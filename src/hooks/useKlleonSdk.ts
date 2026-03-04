import { useEffect, useRef, useState } from "react";
import type { Status, AvatarProps } from "../types/global";
import { useTimer } from "./customHooks";
import { getLocaleCode } from "../utils/locale";

interface UseKlleonSdkOptions {
  sdkKey: string;
  avatarId: string;
  locale: string;
  timerDuration?: number;
}

export function useKlleonSdk({
  sdkKey,
  avatarId,
  locale,
  timerDuration = 60,
}: UseKlleonSdkOptions) {
  const [status, setStatus] = useState<Status>();
  const { timeLeft, start, stop, reset, isRunning } =
    useTimer(timerDuration);
  const avatarContainerRef = useRef<HTMLElement & AvatarProps>(null);

  useEffect(() => {
    let cancelled = false;

    const initSdk = async () => {
      if (cancelled) return;
      const { KlleonChat } = window;

      KlleonChat.onStatusEvent((s) => {
        setStatus(s);
        if (s === "VIDEO_CAN_PLAY") {
          start();
        }
      });

      await KlleonChat.init({
        sdk_key: sdkKey,
        avatar_id: avatarId,
        log_level: "silent",
        subtitle_code: getLocaleCode(locale),
        voice_code: getLocaleCode(locale),
      });

      if (avatarContainerRef.current) {
        avatarContainerRef.current.videoStyle = {
          borderRadius: "24px",
          objectFit: "cover",
        };
      }
    };

    if (window.KlleonChat) {
      initSdk();
    } else {
      const onLoad = () => { if (window.KlleonChat) initSdk(); };
      window.addEventListener("load", onLoad);
      return () => { cancelled = true; window.removeEventListener("load", onLoad); };
    }

    return () => {
      cancelled = true;
      window.KlleonChat?.destroy();
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      stop();
      window.KlleonChat.destroy();
    }
  }, [timeLeft]);

  const restart = async () => {
    const { KlleonChat } = window;
    const voiceCode = getLocaleCode(locale);

    reset();

    KlleonChat.onStatusEvent((s) => {
      setStatus(s);
      if (s === "VIDEO_CAN_PLAY") {
        start();
      }
    });

    await KlleonChat.init({
      sdk_key: sdkKey,
      avatar_id: avatarId,
      log_level: "silent",
      subtitle_code: voiceCode,
      voice_code: voiceCode,
    });
  };

  return {
    status,
    timeLeft,
    isRunning,
    restart,
    avatarContainerRef,
  };
}
