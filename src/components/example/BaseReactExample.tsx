import { useTimer } from "@site/src/hooks/customHooks";
import { ChatData, Status } from "@site/src/types/global";
import { useEffect, useRef, useState, CSSProperties } from "react";

// TODO: 실제 SDK 키와 아바타 ID로 변경하세요.
const SDK_KEY = "APP-vN4Mh9vmHqtPbTDbDhCp";
const AVATAR_ID = "a5fe629d-0090-11ef-8ee1-0abbf354c5cc";

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
    console.log("SDK 로드 확인됨. 초기화를 시도합니다...");

    KlleonChat.onStatusEvent((status: Status) => {
      console.log(`SDK Status Event: ${status}`);
      setIsLoading(status !== "VIDEO_CAN_PLAY");
      if (status === "VIDEO_CAN_PLAY") {
        start();
        console.log("아바타 영상 재생 준비 완료!");
      }
    });

    KlleonChat.onChatEvent((chatData: ChatData) => {
      console.log("SDK Chat Event:", chatData);
    });
    try {
      await KlleonChat.init({
        sdk_key: SDK_KEY,
        avatar_id: AVATAR_ID,
        log_level: "info",
      });
      console.log("SDK 초기화 성공!");
    } catch (error) {
      console.error(`SDK 초기화 실패: ${(error as Error).message || error}`);
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
          Start Chat
        </button>
      )}
      {isChatStarted && <h5>남은 대화 시간: {timeLeft} 초</h5>}

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
              placeholder="echo 내용 입력..."
              disabled={isLoading}
              className="echo-input"
            />
            <button
              onClick={handleEcho}
              disabled={isLoading}
              className="echo-button"
            >
              echo 전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
