export const setup = {
  ko: {
    initOptionColumns: [
      { header: "parameter", label: "파라미터" },
      { header: "type", label: "타입" },
      { header: "required", label: "필수여부" },
      { header: "default", label: "기본값" },
      { header: "description", label: "설명" },
    ],
    initOptionData: [
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
        description: "아바타 발화 음성 언어 설정입니다.",
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
    ],
    changeAvatarOptionColumns: [
      { header: "parameter", label: "파라미터" },
      { header: "type", label: "타입" },
      { header: "required", label: "필수여부" },
      { header: "default", label: "기본값" },
      { header: "description", label: "설명" },
    ],
    changeAvatarOptionData: [
      {
        parameter: "avatar_id",
        type: "string",
        required: "O",
        default: "-",
        description: "변경할 아바타의 고유 ID",
      },
      {
        parameter: "subtitle_code",
        type: "string",
        required: "X",
        default: "최초 연결 값",
        description:
          "아바타 발화 자막 언어 설정입니다.\n지원 코드: `ko_kr` (한국어), `en_us` (영어), `ja_jp` (일본어), `id_id` (인도네시아어) 등",
      },
      {
        parameter: "voice_code",
        type: "string",
        required: "X",
        default: "최초 연결 값",
        description: "아바타 발화 음성 언어 설정입니다.",
      },
      {
        parameter: "voice_tts_speech_speed",
        type: "number",
        required: "X",
        default: "최초 연결 값",
        description: "아바타 발화 속도 조절 기능입니다.\n범위: 0.5 ~ 2.0",
      },
    ],
  },
  en: {
    initOptionColumns: [
      { header: "parameter", label: "Parameter" },
      { header: "type", label: "Type" },
      { header: "required", label: "Required" },
      { header: "default", label: "Default" },
      { header: "description", label: "Description" },
    ],
    initOptionData: [
      {
        parameter: "sdk_key",
        type: "string",
        required: "O",
        default: "-",
        description: "SDK key issued by Klleon Studio",
      },
      {
        parameter: "avatar_id",
        type: "string",
        required: "O",
        default: "-",
        description: "Unique ID of the avatar to be used",
      },
      {
        parameter: "subtitle_code",
        type: "string",
        required: "X",
        default: "`ko_kr`",
        description:
          "Avatar speech subtitle language setting.\nSupported codes: `ko_kr` (Korean), `en_us` (English), `ja_jp` (Japanese), `id_id` (Indonesian), etc.",
      },
      {
        parameter: "voice_code",
        type: "string",
        required: "X",
        default: "`ko_kr`",
        description: "Avatar speech voice language setting.",
      },
      {
        parameter: "voice_tts_speech_speed",
        type: "number",
        required: "X",
        default: "`1.0`",
        description: "Avatar speech speed control feature.\nRange: 0.5 ~ 2.0",
      },
      {
        parameter: "enable_microphone",
        type: "boolean",
        required: "X",
        default: "`true`",
        description:
          "When set to `true`, attempts voice input without requesting microphone permission.\n(Behavior may vary depending on browser policy.)",
      },
      {
        parameter: "log_level",
        type: "string",
        required: "X",
        default: "`debug`",
        description:
          "Sets the detail level of SDK internal logs. Depending on the set level, the following logs are output:\n" +
          "- When set to `debug`: All `debug`, `info`, `warn`, `error` logs are output (for development and detailed debugging)\n" +
          "- When set to `info`: `info`, `warn`, `error` logs are output\n" +
          "- When set to `warn`: `warn`, `error` logs are output\n" +
          "- When set to `error`: Only `error` logs are output\n" +
          "- When set to `silent`: All log outputs are disabled\n" +
          'For production deployment, it is recommended to use `"silent"` to optimize performance and prevent unnecessary information exposure.',
      },
      {
        parameter: "custom_id",
        type: "string",
        required: "X",
        default: "-",
        description:
          "Sets a custom device identifier or other user-defined identifier used in the client system.",
      },
      {
        parameter: "user_key",
        type: "string",
        required: "X",
        default: "-",
        description:
          "User session management key issued through Klleon Studio's End-User creation API. It can be used for session time adjustment, etc.",
      },
    ],
    changeAvatarOptionColumns: [
      { header: "parameter", label: "Parameter" },
      { header: "type", label: "Type" },
      { header: "required", label: "Required" },
      { header: "default", label: "Default" },
      { header: "description", label: "Description" },
    ],
    changeAvatarOptionData: [
      {
        parameter: "avatar_id",
        type: "string",
        required: "O",
        default: "-",
        description: "Unique ID of the avatar to be changed",
      },
      {
        parameter: "subtitle_code",
        type: "string",
        required: "X",
        default: "Initial connection value",
        description:
          "Avatar speech subtitle language setting.\nSupported codes: `ko_kr` (Korean), `en_us` (English), `ja_jp` (Japanese), `id_id` (Indonesian), etc.",
      },
      {
        parameter: "voice_code",
        type: "string",
        required: "X",
        default: "Initial connection value",
        description: "Avatar speech voice language setting.",
      },
      {
        parameter: "voice_tts_speech_speed",
        type: "number",
        required: "X",
        default: "Initial connection value",
        description: "Avatar speech speed control feature.\nRange: 0.5 ~ 2.0",
      },
    ],
  },
  ja: {
    initOptionColumns: [
      { header: "parameter", label: "parameter" },
      { header: "type", label: "type" },
      { header: "required", label: "required" },
      { header: "default", label: "default" },
      { header: "description", label: "description" },
    ],
    initOptionData: [
      {
        parameter: "sdk_key",
        type: "string",
        required: "O",
        default: "-",
        description: "クレオンスタジオで発行されたSDKキー",
      },
      {
        parameter: "avatar_id",
        type: "string",
        required: "O",
        default: "-",
        description: "使用するアバターの固有ID",
      },
      {
        parameter: "subtitle_code",
        type: "string",
        required: "X",
        default: "`ko_kr`",
        description:
          "アバター発話字幕言語設定です。\nサポートコード: `ko_kr` (韓国語), `en_us` (英語), `ja_jp` (日本語), `id_id` (インドネシア語) など",
      },
      {
        parameter: "voice_code",
        type: "string",
        required: "X",
        default: "`ko_kr`",
        description: "アバター発話音声言語設定です。",
      },
      {
        parameter: "voice_tts_speech_speed",
        type: "number",
        required: "X",
        default: "`1.0`",
        description: "アバター発話速度調整機能です。\n範囲: 0.5 ~ 2.0",
      },
      {
        parameter: "enable_microphone",
        type: "boolean",
        required: "X",
        default: "`true`",
        description:
          "`true`に設定すると、マイク権限の要求なしに音声入力機能を試みます。\n(ブラウザのポリシーによって動作が異なる場合があります。)",
      },
      {
        parameter: "log_level",
        type: "string",
        required: "X",
        default: "`debug`",
        description:
          "SDK内部ログの詳細レベルを設定します。設定されたレベルに応じて次のログが出力されます:\n" +
          "- `debug`設定時: `debug`, `info`, `warn`, `error`ログすべて出力 (開発および詳細デバッグ用)\n" +
          "- `info`設定時: `info`, `warn`, `error`ログ出力\n" +
          "- `warn`設定時: `warn`, `error`ログ出力\n" +
          "- `error`設定時: `error`ログのみ出力\n" +
          "- `silent`設定時: すべてのログ出力無効化\n" +
          'プロダクション配布時には、性能最適化および不要な情報露出防止のために`"silent"`の使用を推奨します。',
      },
      {
        parameter: "custom_id",
        type: "string",
        required: "X",
        default: "-",
        description:
          "顧客システムで使用する独自のデバイス識別値またはその他のユーザー定義識別子を設定します。",
      },
      {
        parameter: "user_key",
        type: "string",
        required: "X",
        default: "-",
        description:
          "クレオンスタジオのEnd-User生成APIを通じて発行されたユーザーセッション管理用キーです。セッション時間調整などに使用されることがあります。",
      },
    ],
    changeAvatarOptionColumns: [
      { header: "parameter", label: "パラメータ" },
      { header: "type", label: "タイプ" },
      { header: "required", label: "必須かどうか" },
      { header: "default", label: "デフォルト値" },
      { header: "description", label: "説明" },
    ],
    changeAvatarOptionData: [
      {
        parameter: "avatar_id",
        type: "string",
        required: "O",
        default: "-",
        description: "変更するアバターの固有ID",
      },
      {
        parameter: "subtitle_code",
        type: "string",
        required: "X",
        default: "初回接続値",
        description:
          "アバター発話字幕言語設定です。\nサポートコード: `ko_kr` (韓国語), `en_us` (英語), `ja_jp` (日本語), `id_id` (インドネシア語) など",
      },
      {
        parameter: "voice_code",
        type: "string",
        required: "X",
        default: "初回接続値",
        description: "アバター発話音声言語設定です。",
      },
      {
        parameter: "voice_tts_speech_speed",
        type: "number",
        required: "X",
        default: "初回接続値",
        description: "アバター発話速度調整機能です。\n範囲: 0.5 ~ 2.0",
      },
    ],
  },
};
