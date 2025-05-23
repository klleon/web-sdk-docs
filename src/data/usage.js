export const avatarContainerPropsColumns = [
  { header: "propName", label: "속성명" },
  { header: "type", label: "타입" },
  { header: "default", label: "기본값" },
  { header: "description", label: "설명" },
];
export const avatarContainerPropsData = [
  {
    propName: "volume",
    type: "`number`",
    default: "`100`",
    description: "아바타 음성 볼륨을 조절합니다. (0 ~ 100 사이의 값)",
  },
  {
    propName: "videoStyle",
    type: "`StyleObject | null`",
    default: "`null`",
    description:
      "내부 아바타 비디오 스트림 요소에 직접 적용할 CSS 스타일 객체입니다. `StyleObject`는 `{[key: string]: string | number}` 형태입니다. (예: `object-fit`, 비디오 자체의 `border-radius` 등)\n" +
      "이 스타일은 `<avatar-container>` 래퍼가 아닌, 내부 비디오 화면에 적용됩니다.\n\n" +
      "HTML attribute (`video-style`)로 설정하는 방법:\n" +
      '  값을 유효한 JSON 문자열로 전달해야 합니다. JSON 내부의 모든 키와 문자열 값은 큰따옴표(`"`)로 감싸야 합니다.\n' +
      '  예시: `video-style=\'{"borderRadius": "12px", "objectFit": "cover"}\'`\n\n' +
      "JavaScript 프로퍼티 (`videoStyle`)로 설정하는 방법:\n" +
      "  JavaScript 스타일 객체(키는 `camelCase`)를 직접 할당합니다.\n" +
      '  예시: `element.videoStyle = { borderRadius: "12px", objectFit: "cover" };`\n\n' +
      "문제가 지속될 경우, JSON 문자열이 유효한지, 그리고 컴포넌트 내부에서 `videoStyle` 프로퍼티가 올바르게 사용되고 있는지 확인해 보세요.",
  },
];

export const chatContainerPropsColumns = [
  { header: "propName", label: "속성명" },
  { header: "type", label: "타입" },
  { header: "default", label: "기본값" },
  { header: "description", label: "설명" },
];
export const chatContainerPropsData = [
  {
    propName: "type",
    type: "`'text' | 'voice'`",
    default: "'text'",
    description:
      "채팅 입력창의 초기 모드를 설정합니다.\n'text': 텍스트 입력 모드\n'voice': 음성 입력 모드",
  },
  {
    propName: "delay",
    type: "`number`",
    default: "`30`",
    description:
      "아바타 메시지 타이핑 효과의 글자 당 지연 시간(밀리초, ms)입니다. 값이 클수록 타이핑 속도가 느려집니다.",
  },
  {
    propName: "isShowCount",
    type: "`boolean`",
    default: "`true`",
    description:
      "텍스트 입력 모드일 때, 현재 입력된 글자 수 및 최대 글자 수 카운터 표시 여부를 설정합니다.",
  },
];

export const chatDataColumns = [
  { header: "property", label: "속성명" },
  { header: "type", label: "타입" },
  { header: "description", label: "설명" },
];

export const chatDataRows = [
  {
    property: "message",
    type: "string",
    description: "수신된 메시지의 내용입니다.",
  },
  {
    property: "chat_type",
    type: "string (ResponseChatType)",
    description:
      "메시지의 종류를 나타냅니다. 가능한 값은 옆의 'ResponseChatType 값 상세' 탭을 참고하세요.",
  },
  {
    property: "time",
    type: "string",
    description:
      "메시지가 발생한 시간의 문자열 표현입니다. (예: ISO 8601 형식)",
  },
  {
    property: "id",
    type: "string",
    description: "메시지의 고유 식별자입니다.",
  },
];

export const statusEventArgumentColumns = [
  { header: "type", label: "타입" },
  { header: "description", label: "설명" },
];

export const statusEventArgumentRows = [
  {
    type: "string (Status)",
    description:
      "SDK 및 아바타의 현재 상태를 나타내는 문자열입니다. 가능한 값은 아래 'Status 값 상세' 표를 참고하세요.",
  },
];

export const statusPossibleValuesColumns = [
  { header: "status", label: "Status 값" },
  { header: "description", label: "설명" },
];

export const statusPossibleValuesData = [
  {
    status: "IDLE",
    description: "SDK가 초기화되었으나 아직 연결되지 않은 유휴 상태입니다.",
  },
  {
    status: "CONNECTING",
    description:
      "세션 연결 전, `sdk_key`와 `avatar_id`를 검증하고 통과한 상태입니다.",
  },
  {
    status: "CONNECTING_FAILED",
    description:
      "올바르지 않은 `sdk_key` 또는 `avatar_id` 값으로 인해 검증에 실패한 상태입니다.",
  },
  {
    status: "SOCKET_CONNECTED",
    description: "웹소켓 서버에 성공적으로 연결된 상태입니다.",
  },
  {
    status: "SOCKET_FAILED",
    description: "웹소켓 서버 연결에 실패한 상태입니다.",
  },
  {
    status: "STREAMING_CONNECTED",
    description: "미디어 스트리밍(WebRTC) 서버에 성공적으로 연결된 상태입니다.",
  },
  {
    status: "STREAMING_FAILED",
    description: "미디어 스트리밍(WebRTC) 서버 연결에 실패한 상태입니다.",
  },
  {
    status: "CONNECTED_FINISH",
    description: "모든 연결(웹소켓, 스트리밍)이 성공적으로 완료된 상태입니다.",
  },
  {
    status: "VIDEO_LOAD",
    description: "아바타 비디오 데이터 로드가 시작된 상태입니다.",
  },
  {
    status: "VIDEO_CAN_PLAY",
    description:
      "아바타 비디오 재생이 가능하며, 대부분의 SDK 메서드를 호출할 수 있는 준비 상태입니다.",
  },
];

export const responseChatTypeValuesColumns = [
  { header: "chatType", label: "ResponseChatType 값" },
  { header: "description", label: "설명" },
];

export const responseChatTypeValuesData = [
  {
    chatType: "TEXT",
    description:
      "아바타가 전송하는 텍스트 메시지입니다. 주로 `KlleonChat.echo()` 또는 `KlleonChat.sendTextMessage()` 메서드 사용 후 아바타의 응답으로 발생합니다.",
  },
  {
    chatType: "STT_RESULT",
    description: "사용자의 음성(STT)이 성공적으로 텍스트로 변환된 결과입니다.",
  },
  {
    chatType: "STT_ERROR",
    description:
      "사용자 음성(STT) 변환 또는 전송에 실패했을 때 발생합니다. 주로 음성 데이터가 없는 경우에 발생합니다.",
  },
  {
    chatType: "WAIT",
    description: "채팅 시작을 위해 대기 중일 때 발생합니다.",
  },
  {
    chatType: "WARN_SUSPENDED",
    description:
      "일정 시간(예: 10초) 동안 채팅이 없을 경우 곧 채팅이 중지될 것을 경고합니다.",
  },
  {
    chatType: "DISABLED_TIME_OUT",
    description: "장시간 채팅이 없어 세션이 중지되었을 때 발생합니다.",
  },
  {
    chatType: "TEXT_ERROR",
    description: "사용자가 보낸 텍스트 메시지 전송에 실패했을 때 발생합니다.",
  },
  {
    chatType: "TEXT_MODERATION",
    description:
      "사용자가 부적절한 언어를 사용하여 메시지가 필터링되었을 때 발생합니다.",
  },
  {
    chatType: "ERROR",
    description:
      "서버 측에서 일반적인 오류가 발생했을 때 전달됩니다. (예: 내부 서버 오류, 특정 요청 처리 실패 등)",
  },
  {
    chatType: "PREPARING_RESPONSE",
    description:
      "아바타가 사용자의 메시지에 대한 답변을 준비 중일 때 발생합니다.",
  },
  {
    chatType: "RESPONSE_IS_ENDED",
    description:
      "아바타의 한 턴(LLM이 생성한 여러 문장을 포함할 수 있는 응답)이 완전히 종료되었음을 알립니다.",
  },
  {
    chatType: "RESPONSE_OK",
    description:
      "아바타가 사용자 메시지에 대해 정상적으로 응답을 준비했거나 발화를 시작했음을 알립니다.",
  },
  {
    chatType: "WORKER_DISCONNECTED",
    description: "아바타 스트리밍 워커와의 연결이 끊어졌을 때 발생합니다.",
  },
  {
    chatType: "EXCEED_CONCURRENT_QUOTA",
    description:
      "허용된 최대 동시 접속자 수를 초과하여 연결이 거부되었을 때 발생합니다.",
  },
  {
    chatType: "START_LONG_WAIT",
    description:
      "지정된 시간 동안 사용자와의 상호작용이 없어 아바타가 긴 대기 상태로 전환될 때 발생합니다.",
  },
  {
    chatType: "USER_SPEECH_STARTED",
    description: "SDK가 사용자 음성 입력을 감지하기 시작했을 때 발생합니다.",
  },
  {
    chatType: "USER_SPEECH_STOPPED",
    description: "SDK가 사용자 음성 입력이 멈춘 것을 감지했을 때 발생합니다.",
  },
];
