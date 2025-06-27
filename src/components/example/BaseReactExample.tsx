import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useTimer } from "@site/src/hooks/customHooks";
import { ChatData, Status } from "@site/src/types/global";
import { useEffect, useRef, useState, CSSProperties } from "react";

interface AvatarProps {
  videoStyle?: CSSProperties;
  volume?: number;
}

interface ChatProps {
  delay?: number;
  type?: "voice" | "text";
  isShowCount?: boolean;
}

function App() {
  const { i18n, siteConfig } = useDocusaurusContext();

  const [echoText, setEchoText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);

  const avatarContainerRef = useRef<HTMLElement & AvatarProps>(null);
  const chatContainerRef = useRef<HTMLElement & ChatProps>(null);

  const { timeLeft, start, stop, reset } = useTimer(60);

  useEffect(() => {
    if (avatarContainerRef.current) {
      avatarContainerRef.current.videoStyle = {
        borderRadius: "24px",
        objectFit: "cover",
      };
      avatarContainerRef.current.volume = 100;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.delay = 10;
      chatContainerRef.current.type = "text";
      chatContainerRef.current.isShowCount = true;
      console.log("chat-container props set via ref.");
    }
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const { KlleonChat } = window;
      stop();
      setIsChatStarted(false);
      KlleonChat.destroy();
    }
  }, [timeLeft]);

  const startChat = async () => {
    reset();

    setIsChatStarted(true);
    const KlleonChat = window.KlleonChat;
    console.log(
      translate({ message: "SDK 로드 확인됨. 초기화를 시도합니다..." })
    );

    KlleonChat.onStatusEvent((status: Status) => {
      console.log(`SDK Status Event: ${status}`);
      setIsLoading(status !== "VIDEO_CAN_PLAY");
      if (status === "VIDEO_CAN_PLAY") {
        start();
        console.log(translate({ message: "아바타 영상 재생 준비 완료!" }));
      }
    });

    KlleonChat.onChatEvent((chatData: ChatData) => {
      console.log("SDK Chat Event:", chatData);
    });
    try {
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

      await KlleonChat.init({
        sdk_key: siteConfig.customFields.sdkKey as string,
        avatar_id: siteConfig.customFields.avatarId as string,
        log_level: "info",
        subtitle_code: getLocale(),
        voice_code: getLocale(),
      });
      console.log(translate({ message: "SDK 초기화 성공!" }));
    } catch (error) {
      console.error(
        translate({
          message: `SDK 초기화 실패`,
        }) + `: ${(error as Error).message || error}`
      );
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEcho = () => {
    window.KlleonChat.echo(echoText);
    setEchoText("");
  };

  return (
    <div className="base-react-example-page">
      {!isChatStarted && (
        <button
          onClick={startChat}
          disabled={isLoading}
          className="start-chat-button"
        >
          <Translate id="base-react-example.start-chat">Start Chat</Translate>
        </button>
      )}
      {isChatStarted && (
        <h5>
          <Translate id="base-react-example.remaining-time">
            남은 대화 시간:
          </Translate>
          {timeLeft}
          <Translate id="base-react-example.seconds">초</Translate>
        </h5>
      )}

      <div
        className="sdk-container"
        style={{
          opacity: isChatStarted ? 1 : 0,
          height: isChatStarted ? "720px" : "0px",
        }}
      >
        {isLoading && (
          <span className="loading-text">Klleon Avatar Loading...</span>
        )}
        <avatar-container ref={avatarContainerRef} class="avatar-container" />
        <div className="chat-control-container">
          <chat-container ref={chatContainerRef} class="chat-container" />
          <div className="chat-echo-container">
            <input
              type="text"
              value={echoText}
              onChange={(e) => setEchoText(e.target.value)}
              placeholder={translate({
                message: "echo 내용 입력...",
              })}
              disabled={isLoading}
              className="echo-input"
            />
            <button
              onClick={handleEcho}
              disabled={isLoading}
              className="echo-button"
            >
              <Translate id="base-react-example.send-echo">echo 전송</Translate>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
