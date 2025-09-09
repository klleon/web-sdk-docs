import Translate, { translate } from "@docusaurus/Translate";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useTimer } from "@site/src/hooks/customHooks";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface AvatarProps {
  videoStyle?: CSSProperties;
  volume?: number;
}

interface ChatProps {
  delay?: number;
  type?: "voice" | "text";
  isShowCount?: boolean;
}

const InitPage = () => {
  const { i18n, siteConfig } = useDocusaurusContext();

  const avatarRef = useRef<HTMLElement & AvatarProps>(null);
  const chatRef = useRef<HTMLElement & ChatProps>(null);

  const [isChatStarted, setIsChatStarted] = useState(false);
  const { timeLeft, start, stop, reset } = useTimer(60);

  useEffect(() => {
    const { KlleonChat } = window;

    if (avatarRef.current) {
      avatarRef.current.videoStyle = {
        borderRadius: "30px",
        objectFit: "cover",
      };
      avatarRef.current.volume = 100;
    }

    if (chatRef.current) {
      chatRef.current.delay = 30;
      chatRef.current.type = "text";
      chatRef.current.isShowCount = true;
    }

    return () => {
      KlleonChat.destroy();
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const { KlleonChat } = window;
      stop();
      setIsChatStarted(false);
      KlleonChat.destroy();
    }
  }, [timeLeft]);

  const startChat = () => {
    reset();
    const { KlleonChat } = window;

    const init = async () => {
      // 1. Status 이벤트 리스너 등록
      KlleonChat.onStatusEvent((status) => {
        // 상세한 Status 값과 의미는 'usage > 이벤트 처리' 문서를 참고하세요.
        if (status === "VIDEO_CAN_PLAY") {
          start();
          console.log(translate({ message: "아바타 영상 재생 준비 완료!" }));
        }
        setIsChatStarted(status === "VIDEO_CAN_PLAY");
      });

      // 2. Chat 이벤트 리스너 등록
      KlleonChat.onChatEvent((chatData) => {
        // 상세한 ChatData 구조와 chat_type은 'usage > 이벤트 처리' 문서를 참고하세요.
        console.log("SDK Chat Event:", chatData);
      });

      const getLocale = () => {
        switch (i18n.currentLocale) {
          case "ko":
            return "ko_kr";
          case "en":
            return "en_us";
          case "ja":
            return "ja_jp";
          case "id":
            return "id_id";
          default:
            return "ko_kr";
        }
      };

      // 3. SDK 초기화
      await KlleonChat.init({
        sdk_key: siteConfig.customFields.sdkKey as string,
        avatar_id: siteConfig.customFields.avatarId as string,
        subtitle_code: getLocale(),
        voice_code: getLocale(),
        // custom_id: "YOUR_CUSTOM_ID",
        // user_key: "YOUR_USER_KEY",
        // voice_code: "ko_kr",
        // subtitle_code: "ko_kr",
        // voice_tts_speech_speed: 1,
        // enable_microphone: true,
        // log_level: "debug",
      });
    };
    init();
  };

  return (
    <div>
      {!isChatStarted && (
        <button
          style={{
            width: "150px",
            height: "50px",
            backgroundColor: "#0C5EF0",
            color: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={startChat}
        >
          <strong>
            <Translate id="setup-example.start-chat">start chat!</Translate>
          </strong>
        </button>
      )}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: isChatStarted ? "720px" : "auto",

          opacity: isChatStarted ? 1 : 0,
        }}
      >
        {isChatStarted && (
          <h5>
            <Translate id="setup-example.remaining-time">
              남은 대화 시간:
            </Translate>
            {timeLeft}
            <Translate id="setup-example.seconds">초</Translate>
          </h5>
        )}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "0px 24px",
          }}
        >
          <avatar-container ref={avatarRef} style={{ flex: 1 }} class="" />
          <chat-container
            ref={chatRef}
            style={{
              flex: 1,
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
    </div>
  );
  ``;
};

export default InitPage;
