export const initOptionColumns = [
  { header: "parameter", label: "파라미터" },
  { header: "type", label: "타입" },
  { header: "required", label: "필수여부" },
  { header: "default", label: "기본값" },
  { header: "description", label: "설명" },
];

export const initOptionData = [
  {
    parameter: "sdk_key",
    type: "string",
    required: "O",
    default: "-",
    description: "클레온 스튜디오에서 발급받은 SDK 키",
  },
  {
    parameter: "avatar_id",
    type: "string",
    required: "O",
    default: "-",
    description: "사용할 아바타의 고유 ID",
  },
  {
    parameter: "subtitle_code",
    type: "string",
    required: "X",
    default: "`ko_kr`",
    description:
      "아바타 발화 자막 언어 설정입니다.\n지원 코드: `ko_kr` (한국어), `en_us` (영어), `ja_jp` (일본어), `id_id` (인도네시아어) 등",
  },
  {
    parameter: "voice_code",
    type: "string",
    required: "X",
    default: "`ko_kr`",
    description:
      "아바타 발화 음성 언어 설정입니다.\n자막 언어와 동일한 코드를 사용합니다.",
  },
  {
    parameter: "voice_tts_speech_speed",
    type: "number",
    required: "X",
    default: "`1.0`",
    description: "아바타 발화 속도 조절 기능입니다.\n범위: 0.5 ~ 2.0",
  },
  {
    parameter: "enable_microphone",
    type: "boolean",
    required: "X",
    default: "`true`",
    description:
      "`true`로 설정 시, 마이크 권한 요청 없이 음성 입력 기능 시도합니다.\n(브라우저 정책에 따라 동작이 다를 수 있습니다.)",
  },
  {
    parameter: "log_level",
    type: "string",
    required: "X",
    default: "`debug`",
    description:
      "SDK 내부 로그의 상세 수준을 설정합니다. 설정된 레벨에 따라 다음 로그들이 출력됩니다:\n" +
      "- `debug` 설정 시: `debug`, `info`, `warn`, `error` 로그 모두 출력 (개발 및 상세 디버깅용)\n" +
      "- `info` 설정 시: `info`, `warn`, `error` 로그 출력\n" +
      "- `warn` 설정 시: `warn`, `error` 로그 출력\n" +
      "- `error` 설정 시: `error` 로그만 출력\n" +
      "- `silent` 설정 시: 모든 로그 출력 비활성화\n" +
      '프로덕션 배포 시에는 성능 최적화 및 불필요한 정보 노출 방지를 위해 `"silent"` 사용을 권장합니다.',
  },
  {
    parameter: "custom_id",
    type: "string",
    required: "X",
    default: "-",
    description:
      "고객사 시스템에서 사용하는 자체 디바이스 식별 값 또는 기타 사용자 정의 식별자를 설정합니다.",
  },
  {
    parameter: "user_key",
    type: "string",
    required: "X",
    default: "-",
    description:
      "클레온 스튜디오의 End-User 생성 API를 통해 발급받은 사용자 세션 관리용 키입니다. 세션 시간 조절 등에 사용될 수 있습니다.",
  },
];
