import React, { CSSProperties, useEffect, useRef } from "react";
import Button from "../Button/Button";

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
  const avatarRef = useRef<HTMLElement & AvatarProps>(null);
  const chatRef = useRef<HTMLElement & ChatProps>(null);

  useEffect(() => {
    const { KlleonChat } = window;

    const init = async () => {
      // 1. Status 이벤트 리스너 등록
      KlleonChat.onStatusEvent((status) => {
        // 상세한 Status 값과 의미는 'usage > 이벤트 처리' 문서를 참고하세요.
        if (status === "VIDEO_CAN_PLAY") {
          console.log("아바타 영상 재생 준비 완료!");
        }
      });

      // 2. Chat 이벤트 리스너 등록
      KlleonChat.onChatEvent((chatData) => {
        // 상세한 ChatData 구조와 chat_type은 'usage > 이벤트 처리' 문서를 참고하세요.
        console.log("SDK Chat Event:", chatData);
      });

      // 3. SDK 초기화
      await KlleonChat.init({
        sdk_key: "APP-vN4Mh9vmHqtPbTDbDhCp",
        avatar_id: "b626e1d5-444c-11ef-b707-0a8637d613d3",
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

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "720px",
        gap: "0px 24px",
      }}
    >
      <avatar-container ref={avatarRef} style={{ flex: 1 }} class="" />
      <chat-container ref={chatRef} style={{ flex: 1, borderRadius: "24px" }} />
    </div>
  );
  ``;
};

export default InitPage;
