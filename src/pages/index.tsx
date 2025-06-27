import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Status } from "../types/global";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useTimer } from "../hooks/customHooks";

interface AvatarProps {
  videoStyle?: CSSProperties;
  volume?: number;
}

const Home = () => {
  const { i18n, siteConfig } = useDocusaurusContext();
  const { timeLeft, start, stop, reset } = useTimer(60);

  const [status, setStatus] = useState<Status>();

  const avatarContainerRef = useRef<HTMLElement & AvatarProps>(null);

  useEffect(() => {
    const { KlleonChat } = window;
    const init = async () => {
      KlleonChat.onStatusEvent((status) => {
        setStatus(status);
        if (status === "VIDEO_CAN_PLAY") {
          start();
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
        log_level: "silent",
        subtitle_code: getLocale(),
        voice_code: getLocale(),
      });
    };
    init();
    if (avatarContainerRef.current) {
      avatarContainerRef.current.videoStyle = {
        borderRadius: "24px",
        objectFit: "cover",
      };
    }
    return () => {
      KlleonChat.destroy();
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const { KlleonChat } = window;
      stop();
      KlleonChat.destroy();
    }
  }, [timeLeft]);

  const getDocsLink = () => {
    const locale = i18n.currentLocale;
    if (locale === "ko") {
      return "/docs/intro";
    } else {
      return `/${locale}/docs/intro`;
    }
  };

  const timeFormat = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const reStartChat = async () => {
    const { KlleonChat } = window;
    reset();
    KlleonChat.onStatusEvent((status) => {
      setStatus(status);
      if (status === "VIDEO_CAN_PLAY") {
        start();
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
      sdk_key: "APP-vN4Mh9vmHqtPbTDbDhCp",
      avatar_id: "a5de0514-0090-11ef-8ee1-0abbf354c5cc",
      log_level: "silent",
      subtitle_code: getLocale(),
      voice_code: getLocale(),
    });
  };

  return (
    <Layout>
      <main className={styles["main-container"]}>
        <div className={styles["landing-container"]}>
          <div className={styles["info-container"]}>
            <p className={styles["title"]}>
              Create your digital human chat experience with our SDK.
            </p>
            <p className={styles["description"]}>
              Craft next-level chat experiences, from code to character.
            </p>
            <Link to={getDocsLink()} className={styles["get-started-button"]}>
              Get Started
            </Link>
          </div>
          <div className={styles["klleon-chat-conatiner"]}>
            {status !== "VIDEO_CAN_PLAY" && (
              <div className={styles["loading-container"]}>
                <p className={styles["loading-text"]}>
                  Loading
                  <span className={styles["loading-text-dot"]}>...</span>
                </p>
              </div>
            )}
            {timeLeft === 0 && (
              <div className={styles["loading-container"]}>
                <p className={styles["loading-text"]}>Chat Time Ended</p>
              </div>
            )}
            <avatar-container
              ref={avatarContainerRef}
              style={{
                flex: 1,
              }}
            ></avatar-container>
            <div className={styles["control-container"]}>
              <chat-container
                class="chat-container"
                style={{
                  flex: 1,
                  borderRadius: "24px",
                }}
              />
              <div className={styles["bottom-container"]}>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    gap: "0px 6px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="8" fill="#D4D5FF" />
                    <path
                      d="M14.2425 5.75736C14.6525 6.16738 14.5906 6.82346 14.1806 7.23348L7.23336 14.1807C6.82334 14.5908 6.16726 14.6527 5.75724 14.2426C3.41409 11.8995 3.41409 8.1005 5.75724 5.75736C8.10038 3.41421 11.8994 3.41421 14.2425 5.75736Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V9.59863L13.416 11.376C13.7607 11.6057 13.8538 12.0714 13.624 12.416C13.3943 12.7607 12.9286 12.8538 12.584 12.624L9.62851 10.6538C9.39204 10.4961 9.25 10.2307 9.25 9.94651V7C9.25 6.58579 9.58579 6.25 10 6.25Z"
                      fill="#444444"
                    />
                  </svg>
                  <p className={styles["time-text"]}>{timeFormat(timeLeft)}</p>
                  {timeLeft === 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "0px 6px",
                        alignItems: "center",
                      }}
                      onClick={reStartChat}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 15.5C11.9644 15.5 13.6882 14.4702 14.6611 12.921L15.7945 13.9285C14.5353 15.7822 12.4099 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.5265 3 16.4439 5.60771 16.9291 9H18.204C18.6895 9 18.9326 9.57851 18.5893 9.91685L16.6353 11.8427C16.4225 12.0524 16.0775 12.0524 15.8647 11.8427L13.9107 9.91685C13.5674 9.57851 13.8105 9 14.296 9H15.4093C14.9391 6.43988 12.6961 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
                          fill="#121212"
                        />
                      </svg>
                      <p className={styles["restart-button"]}>reconnect</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
