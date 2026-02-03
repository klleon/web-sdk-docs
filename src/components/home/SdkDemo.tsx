import { useKlleonSdk } from "../../hooks/useKlleonSdk";
import { formatTime } from "../../utils/format";
import ClockIcon from "./icons/ClockIcon";
import RefreshIcon from "./icons/RefreshIcon";
import styles from "./SdkDemo.module.css";

interface SdkDemoProps {
  sdkKey: string;
  avatarId: string;
  locale: string;
}

export default function SdkDemo({ sdkKey, avatarId, locale }: SdkDemoProps) {
  const { status, timeLeft, restart, avatarContainerRef } = useKlleonSdk({
    sdkKey,
    avatarId,
    locale,
    timerDuration: 60,
  });

  return (
    <div className={styles.container}>
      {status !== "VIDEO_CAN_PLAY" && (
        <div className={styles.overlay}>
          <p className={styles.overlayText}>
            Loading<span className={styles.dots}>...</span>
          </p>
        </div>
      )}
      {timeLeft === 0 && (
        <div className={styles.overlay}>
          <p className={styles.overlayText}>Chat Time Ended</p>
        </div>
      )}
      <avatar-container
        ref={avatarContainerRef}
        style={{ flex: 1 }}
      />
      <div className={styles.controlContainer}>
        <chat-container
          class="chat-container"
          style={{ flex: 1, borderRadius: "24px" }}
        />
        <div className={styles.bottomBar}>
          <div className={styles.timerRow}>
            <ClockIcon />
            <p className={styles.timeText}>{formatTime(timeLeft)}</p>
            {timeLeft === 0 && (
              <div className={styles.reconnectButton} onClick={restart}>
                <RefreshIcon />
                <p className={styles.reconnectText}>reconnect</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
