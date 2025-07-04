import Translate, { translate } from "@docusaurus/Translate";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ChatData, ResponseChatType, Status } from "@site/src/types/global";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface AvatarProps {
  videoStyle?: CSSProperties;
  volume?: number;
}

const CustomReactExample = () => {
  const { i18n, siteConfig } = useDocusaurusContext();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<Status>("IDLE");
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [chatType, setChatType] = useState<ResponseChatType>();
  const [message, setMessage] = useState("");
  const [echoMessage, setEchoMessage] = useState("");
  const [isAvatarSpeaking, setIsAvatarSpeaking] = useState(false);
  const [guideText, setGuideText] = useState(
    translate({ message: "start chat 버튼을 통해 연결해주세요" })
  );

  const avatarContainerRef = useRef<HTMLElement & AvatarProps>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarContainerRef.current) {
      avatarContainerRef.current.videoStyle = {
        borderRadius: "24px",
        objectFit: "cover",
      };
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      const observer = new MutationObserver(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      });

      observer.observe(chatContainerRef.current, {
        childList: true,
        subtree: true,
      });
    }
  }, [chatContainerRef.current]);

  const sdkHandler = {
    startChat: async () => {
      const { KlleonChat } = window;

      KlleonChat.onStatusEvent((status) => {
        setStatus(status);
        setIsLoading(status !== "VIDEO_CAN_PLAY");
      });

      KlleonChat.onChatEvent((chatData) => {
        setChatType(chatData.chat_type);
        setChatData((prev) => [...prev, chatData]);
        if (chatData.chat_type === "PREPARING_RESPONSE") {
          setIsAvatarSpeaking(true);
          setGuideText(
            translate({
              message: "아바타가 답변을 준비중입니다. 잠시만 기다려주세요.",
            })
          );
        }
        if (chatData.chat_type === "TEXT") {
          setGuideText(
            translate({
              message:
                "아바타가 발화중입니다. stopSpeech로 취소할 수 있습니다.",
            })
          );
        }
        if (chatData.chat_type === "RESPONSE_IS_ENDED") {
          setIsAvatarSpeaking(false);
          setGuideText(
            translate({
              message:
                "아바타가 발화를 완료했습니다. 대화를 계속하려면 메세지를 입력하세요.",
            })
          );
        }
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

      await KlleonChat.init({
        sdk_key: siteConfig.customFields.sdkKey as string,
        avatar_id: siteConfig.customFields.avatarId as string,
        subtitle_code: getLocale(),
        voice_code: getLocale(),
      });
      setGuideText(translate({ message: "연결이 완료되었습니다." }));
    },
    disconnect: () => {
      const { KlleonChat } = window;
      KlleonChat.destroy();
      setGuideText(
        translate({
          message: "연결이 해제되었습니다. start chat 버튼을 통해 연결해주세요",
        })
      );
    },
    sendTextMessage: () => {
      const { KlleonChat } = window;
      KlleonChat.sendTextMessage(message);
      setMessage("");
    },
    startStt: () => {
      const { KlleonChat } = window;
      KlleonChat.startStt();
      setGuideText(
        translate({
          message:
            "음성 녹음 중입니다. endStt로 완료하거나 cancelStt로 취소하세요.",
        })
      );
    },
    endStt: () => {
      const { KlleonChat } = window;
      KlleonChat.endStt();
      setGuideText(translate({ message: "음성 녹음이 종료되었습니다" }));
    },
    cancelStt: () => {
      const { KlleonChat } = window;
      KlleonChat.cancelStt();
      setGuideText(
        translate({
          message: "음성녹음 상태(startStt)가 취소합니다.",
        })
      );
    },
    stopSpeech: () => {
      const { KlleonChat } = window;
      if (chatType === "PREPARING_RESPONSE") {
        setGuideText(
          translate({
            message: "아바타 답변 준비중에는 중단할 수 없습니다.",
          })
        );
        return;
      }
      KlleonChat.stopSpeech();
      setGuideText(
        translate({
          message: "아바타의 발화를 중단합니다.",
        })
      );
    },
    clearMessage: () => {
      setChatData([]);
    },
    clearMessageList: () => {
      const { KlleonChat } = window;
      KlleonChat.clearMessageList();
    },
    echo: () => {
      const { KlleonChat } = window;
      KlleonChat.echo(echoMessage);
      setEchoMessage("");
    },
    changeAvatar: () => {
      const { KlleonChat } = window;
      const avatarList = [
        "a5de0514-0090-11ef-8ee1-0abbf354c5cc",
        "a55bf757-0090-11ef-8ee1-0abbf354c5cc",
        "a57d4b8e-0090-11ef-8ee1-0abbf354c5cc",
      ];
      const filteredAvatarList = avatarList.filter(
        (id) => id !== siteConfig.customFields.avatarId
      );
      const randomAvatarId =
        filteredAvatarList[
          Math.floor(Math.random() * filteredAvatarList.length)
        ];
      KlleonChat.changeAvatar({
        avatar_id: randomAvatarId,
      });
      setGuideText(
        translate({
          message: "아바타가 변경되었습니다.",
        })
      );
    },
  };

  return (
    <div className="custom-react-example-page">
      <div className="klleon-chat-container">
        <avatar-container ref={avatarContainerRef} class="avatar-container" />
        <div
          ref={chatContainerRef}
          className="chat-container"
          style={{
            opacity: status === "VIDEO_CAN_PLAY" ? 1 : 0,
          }}
        >
          {chatData.map((item) => (
            <div className="chat-item" key={item.id}>
              <h5>ChatType: {item.chat_type}</h5>
              <h6>Message: {item.message}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="control-container">
        <div className="log-container">
          {isLoading && <h5>loading...</h5>}
          <h5>Guide: {guideText}</h5>
          <h5>Status: {status}</h5>
        </div>
        <div className="method-container">
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.sdk-lifecycle">
                SDK 라이프사이클:
              </Translate>
            </label>
            <button onClick={sdkHandler.startChat}>start chat</button>
            <button onClick={sdkHandler.disconnect}>disconnect</button>
          </div>
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.send-text-message">
                텍스트 메세지 전송:
              </Translate>
            </label>
            <div className="vertical-control-item">
              <input
                placeholder={
                  isAvatarSpeaking
                    ? translate({
                        message:
                          "아바타가 발화중입니다. 발화가 종료되면 메세지를 입력해주세요.",
                      })
                    : translate({
                        message: "메세지를 입력하세요.",
                      })
                }
                value={message}
                disabled={isAvatarSpeaking}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    sdkHandler.sendTextMessage();
                  }
                }}
              />
              <button onClick={sdkHandler.sendTextMessage}>
                sendTextMessage
              </button>
            </div>
          </div>
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.send-voice-message">
                음성 메세지 전송:
              </Translate>
            </label>
            <button onClick={sdkHandler.startStt}>startStt</button>
            <button onClick={sdkHandler.endStt}>endStt</button>
          </div>
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.message-control">
                메세지 제어
              </Translate>
            </label>
            <button onClick={sdkHandler.cancelStt}>cancelStt</button>
            <button onClick={sdkHandler.stopSpeech}>stopSpeech</button>
            <button onClick={sdkHandler.clearMessage}>clearMessage</button>
          </div>
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.echo-function">
                에코 기능
              </Translate>
            </label>
            <div className="vertical-control-item">
              <input
                placeholder={
                  isAvatarSpeaking
                    ? translate({
                        message:
                          "아바타가 발화중입니다. 발화가 종료되면 메세지를 입력해주세요.",
                      })
                    : translate({
                        message: "메세지를 입력하세요.",
                      })
                }
                value={echoMessage}
                disabled={isAvatarSpeaking}
                onChange={(e) => setEchoMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    sdkHandler.echo();
                  }
                }}
              />
              <button onClick={sdkHandler.echo}>echo</button>
            </div>
          </div>
          <div className="horizontal-control-item">
            <label>
              <Translate id="custom-react-example.change-avatar">
                아바타 변경
              </Translate>
            </label>
            <button onClick={sdkHandler.changeAvatar}>changeAvatar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomReactExample;
