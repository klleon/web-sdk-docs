export const usage = {
  ko: {
    avatarContainerPropsColumns: [
      { header: "propName", label: "속성명" },
      { header: "type", label: "타입" },
      { header: "default", label: "기본값" },
      { header: "description", label: "설명" },
    ],
    avatarContainerPropsData: [
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
          "내부 비디오 요소에 적용할 CSS 스타일 객체입니다.\n\n" +
          "HTML:\n" +
          '<avatar-container video-style=\'{"borderRadius": "12px", "objectFit": "cover"}\'></avatar-container>\n\n' +
          "React:\n" +
          "ref.current.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vue:\n" +
          "ref.value.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vanilla JS:\n" +
          "element.videoStyle = { borderRadius: '12px', objectFit: 'cover' }",
      },
    ],
    chatContainerPropsColumns: [
      { header: "propName", label: "속성명" },
      { header: "type", label: "타입" },
      { header: "default", label: "기본값" },
      { header: "description", label: "설명" },
    ],
    chatContainerPropsData: [
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
    ],
    chatDataColumns: [
      { header: "property", label: "속성명" },
      { header: "type", label: "타입" },
      { header: "description", label: "설명" },
    ],
    chatDataRows: [
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
    ],
    statusEventArgumentColumns: [
      { header: "type", label: "타입" },
      { header: "description", label: "설명" },
    ],
    statusEventArgumentRows: [
      {
        type: "string (Status)",
        description:
          "SDK 및 아바타의 현재 상태를 나타내는 문자열입니다. 가능한 값은 아래 'Status 값 상세' 표를 참고하세요.",
      },
    ],
    statusPossibleValuesColumns: [
      { header: "status", label: "Status 값" },
      { header: "description", label: "설명" },
    ],
    statusPossibleValuesData: [
      {
        status: "IDLE",
        description: "SDK가 초기화되었으나 아직 연결되지 않은 IDLE 상태입니다.",
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
        description:
          "미디어 스트리밍(WebRTC) 서버에 성공적으로 연결된 상태입니다.",
      },
      {
        status: "STREAMING_FAILED",
        description: "미디어 스트리밍(WebRTC) 서버 연결에 실패한 상태입니다.",
      },
      {
        status: "CONNECTED_FINISH",
        description:
          "모든 연결(웹소켓, 스트리밍)이 성공적으로 완료된 상태입니다.",
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
      {
        status: "DESTROYED",
        description:
          "SDK가 완전히 종료된 상태입니다. `destroy()` 메서드 호출 후 SDK의 최종 상태를 나타냅니다.",
      },
    ],
    responseChatTypeValuesColumns: [
      { header: "chatType", label: "ResponseChatType 값" },
      { header: "description", label: "설명" },
    ],
    responseChatTypeValuesData: [
      {
        chatType: "TEXT",
        description:
          "아바타가 전송하는 텍스트 메시지입니다. 주로 `KlleonChat.echo()` 또는 `KlleonChat.sendTextMessage()` 메서드 사용 후 아바타의 응답으로 발생합니다.",
      },
      {
        chatType: "STT_RESULT",
        description:
          "사용자의 음성(STT)이 성공적으로 텍스트로 변환된 결과입니다.",
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
        description:
          "사용자가 보낸 텍스트 메시지 전송에 실패했을 때 발생합니다.",
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
        description:
          "SDK가 사용자 음성 입력을 감지하기 시작했을 때 발생합니다.",
      },
      {
        chatType: "USER_SPEECH_STOPPED",
        description:
          "SDK가 사용자 음성 입력이 멈춘 것을 감지했을 때 발생합니다.",
      },
    ],
    errorDataColumns: [
      { header: "property", label: "속성명" },
      { header: "type", label: "타입" },
      { header: "description", label: "설명" },
    ],
    errorDataRows: [
      {
        property: "code",
        type: "string (ErrorCode)",
        description: "오류의 종류를 나타내는 문자열입니다.",
      },
      {
        property: "message",
        type: "string",
        description: "오류에 대한 상세한 설명 메시지입니다.",
      },
    ],

    errorTypeColumns: [
      { header: "errorCode", label: "ErrorCode 값" },
      { header: "description", label: "설명" },
    ],
    errorTypeData: [
      {
        errorCode: "SOCKET_FAILED",
        description:
          "SDK 연결 시도 중 WebSocket 서버 연결에 실패했습니다. 수동 재연결이나 새로고침이 필요합니다.",
      },
      {
        errorCode: "STREAMING_FAILED",
        description:
          "SDK 연결 시도 중 미디어 스트리밍(WebRTC) 서버 연결에 실패했습니다. 수동 재연결이나 새로고침이 필요합니다.",
      },
      {
        errorCode: "STREAMING_RECONNECT_FAILED",
        description:
          "스트리밍이 네트워크 환경에 따라 자동으로 재연결을 시도하지만 타임아웃으로 실패했습니다. 수동 재연결이 필요합니다.",
      },
      {
        errorCode: "VIDEO_ELEMENT_NOT_FOUND",
        description:
          "비디오 요소를 찾을 수 없습니다. <avatar-container> 요소가 올바르게 렌더링되었는지 확인하고 UI 상태를 점검하세요.",
      },
      {
        errorCode: "SOCKET_DISCONNECTED_UNEXPECTEDLY",
        description:
          "WebSocket 연결이 예기치 않게 끊어졌습니다. 네트워크 상태를 확인하고 애플리케이션 요구사항에 따라 재연결 로직을 구현하세요.",
      },
      {
        errorCode: "STREAMING_DISCONNECTED_UNEXPECTEDLY",
        description:
          "스트리밍 연결이 예기치 않게 끊어졌습니다. 미디어 연결 상태를 확인하고 애플리케이션 요구사항에 따라 재연결 로직을 구현하세요.",
      },
    ],
  },
  en: {
    avatarContainerPropsColumns: [
      { header: "propName", label: "Property Name" },
      { header: "type", label: "Type" },
      { header: "default", label: "Default" },
      { header: "description", label: "Description" },
    ],
    avatarContainerPropsData: [
      {
        propName: "volume",
        type: "`number`",
        default: "`100`",
        description:
          "Controls the avatar voice volume. (Value between 0 and 100)",
      },
      {
        propName: "videoStyle",
        type: "`StyleObject | null`",
        default: "`null`",
        description:
          "CSS style object to be applied to the internal video element.\n\n" +
          "HTML:\n" +
          '<avatar-container video-style=\'{"borderRadius": "12px", "objectFit": "cover"}\'></avatar-container>\n\n' +
          "React:\n" +
          "ref.current.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vue:\n" +
          "ref.value.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vanilla JS:\n" +
          "element.videoStyle = { borderRadius: '12px', objectFit: 'cover' }",
      },
    ],
    chatContainerPropsColumns: [
      { header: "propName", label: "Property Name" },
      { header: "type", label: "Type" },
      { header: "default", label: "Default" },
      { header: "description", label: "Description" },
    ],
    chatContainerPropsData: [
      {
        propName: "type",
        type: "`'text' | 'voice'`",
        default: "'text'",
        description:
          "Sets the initial mode of the chat input field.\n'text': Text input mode\n'voice': Voice input mode",
      },
      {
        propName: "delay",
        type: "`number`",
        default: "`30`",
        description:
          "Delay time per character (milliseconds, ms) for the avatar message typing effect. Higher values result in slower typing speed.",
      },
      {
        propName: "isShowCount",
        type: "`boolean`",
        default: "`true`",
        description:
          "When in text input mode, sets whether to display the current character count and maximum character count counter.",
      },
    ],
    chatDataColumns: [
      { header: "property", label: "Property Name" },
      { header: "type", label: "Type" },
      { header: "description", label: "Description" },
    ],
    chatDataRows: [
      {
        property: "message",
        type: "string",
        description: "Content of the received message.",
      },
      {
        property: "chat_type",
        type: "string (ResponseChatType)",
        description:
          "Indicates the type of message. For possible values, refer to the 'ResponseChatType Values Detail' tab.",
      },
      {
        property: "time",
        type: "string",
        description:
          "String representation of the time when the message occurred. (e.g., ISO 8601 format)",
      },
      {
        property: "id",
        type: "string",
        description: "Unique identifier of the message.",
      },
    ],
    statusEventArgumentColumns: [
      { header: "type", label: "Type" },
      { header: "description", label: "Description" },
    ],
    statusEventArgumentRows: [
      {
        type: "string (Status)",
        description:
          "String representing the current status of the SDK and avatar. For possible values, refer to the 'Status Values Detail' table below.",
      },
    ],
    statusPossibleValuesColumns: [
      { header: "status", label: "Status Value" },
      { header: "description", label: "Description" },
    ],
    statusPossibleValuesData: [
      {
        status: "IDLE",
        description: "SDK is initialized but not yet connected, in idle state.",
      },
      {
        status: "CONNECTING",
        description:
          "Status after validating and passing `sdk_key` and `avatar_id` before session connection.",
      },
      {
        status: "CONNECTING_FAILED",
        description:
          "Status when validation failed due to incorrect `sdk_key` or `avatar_id` values.",
      },
      {
        status: "SOCKET_CONNECTED",
        description:
          "Status when successfully connected to the WebSocket server.",
      },
      {
        status: "SOCKET_FAILED",
        description: "Status when WebSocket server connection failed.",
      },
      {
        status: "STREAMING_CONNECTED",
        description:
          "Status when successfully connected to the media streaming (WebRTC) server.",
      },
      {
        status: "STREAMING_FAILED",
        description:
          "Status when media streaming (WebRTC) server connection failed.",
      },
      {
        status: "CONNECTED_FINISH",
        description:
          "Status when all connections (WebSocket, streaming) are successfully completed.",
      },
      {
        status: "VIDEO_LOAD",
        description: "Status when avatar video data loading has started.",
      },
      {
        status: "VIDEO_CAN_PLAY",
        description:
          "Avatar video is ready to play and most SDK methods can be called in this prepared state.",
      },
    ],
    responseChatTypeValuesColumns: [
      { header: "chatType", label: "ResponseChatType Value" },
      { header: "description", label: "Description" },
    ],
    responseChatTypeValuesData: [
      {
        chatType: "TEXT",
        description:
          "Text message sent by the avatar. Mainly occurs as an avatar response after using `KlleonChat.echo()` or `KlleonChat.sendTextMessage()` methods.",
      },
      {
        chatType: "STT_RESULT",
        description:
          "Result when user's voice (STT) is successfully converted to text.",
      },
      {
        chatType: "STT_ERROR",
        description:
          "Occurs when user voice (STT) conversion or transmission fails. Mainly occurs when there is no voice data.",
      },
      {
        chatType: "WAIT",
        description: "Occurs when waiting to start chatting.",
      },
      {
        chatType: "WARN_SUSPENDED",
        description:
          "Warns that chatting will be suspended soon if there is no chat for a certain period (e.g., 10 seconds).",
      },
      {
        chatType: "DISABLED_TIME_OUT",
        description:
          "Occurs when the session is suspended due to no chat for a long time.",
      },
      {
        chatType: "TEXT_ERROR",
        description:
          "Occurs when the text message sent by the user fails to transmit.",
      },
      {
        chatType: "TEXT_MODERATION",
        description:
          "Occurs when the message is filtered because the user used inappropriate language.",
      },
      {
        chatType: "ERROR",
        description:
          "Delivered when a general error occurs on the server side. (e.g., internal server error, specific request processing failure, etc.)",
      },
      {
        chatType: "PREPARING_RESPONSE",
        description:
          "Occurs when the avatar is preparing a response to the user's message.",
      },
      {
        chatType: "RESPONSE_IS_ENDED",
        description:
          "Indicates that one turn of the avatar (response that may include multiple sentences generated by LLM) has completely ended.",
      },
      {
        chatType: "RESPONSE_OK",
        description:
          "Indicates that the avatar has successfully prepared a response to the user's message or started speaking.",
      },
      {
        chatType: "WORKER_DISCONNECTED",
        description:
          "Occurs when the connection with the avatar streaming worker is disconnected.",
      },
      {
        chatType: "EXCEED_CONCURRENT_QUOTA",
        description:
          "Occurs when the connection is rejected because the maximum allowed number of concurrent users is exceeded.",
      },
      {
        chatType: "START_LONG_WAIT",
        description:
          "Occurs when the avatar transitions to a long wait state due to no interaction with the user for a specified time.",
      },
      {
        chatType: "USER_SPEECH_STARTED",
        description: "Occurs when the SDK starts detecting user voice input.",
      },
      {
        chatType: "USER_SPEECH_STOPPED",
        description:
          "Occurs when the SDK detects that user voice input has stopped.",
      },
    ],
  },
  ja: {
    avatarContainerPropsColumns: [
      { header: "propName", label: "プロパティ名" },
      { header: "type", label: "タイプ" },
      { header: "default", label: "デフォルト値" },
      { header: "description", label: "説明" },
    ],
    avatarContainerPropsData: [
      {
        propName: "volume",
        type: "`number`",
        default: "`100`",
        description: "アバター音声のボリュームを調整します。 (0～100の値)",
      },
      {
        propName: "videoStyle",
        type: "`StyleObject | null`",
        default: "`null`",
        description:
          "内部ビデオ要素に適用するCSSスタイルオブジェクトです。\n\n" +
          "HTML:\n" +
          '<avatar-container video-style=\'{"borderRadius": "12px", "objectFit": "cover"}\'></avatar-container>\n\n' +
          "React:\n" +
          "ref.current.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vue:\n" +
          "ref.value.videoStyle = { borderRadius: '12px', objectFit: 'cover' }\n\n" +
          "Vanilla JS:\n" +
          "element.videoStyle = { borderRadius: '12px', objectFit: 'cover' }",
      },
    ],
    chatContainerPropsColumns: [
      { header: "propName", label: "プロパティ名" },
      { header: "type", label: "タイプ" },
      { header: "default", label: "デフォルト値" },
      { header: "description", label: "説明" },
    ],
    chatContainerPropsData: [
      {
        propName: "type",
        type: "`'text' | 'voice'`",
        default: "'text'",
        description:
          "チャット入力欄の初期モードを設定します。\n'text': テキスト入力モード\n'voice': 音声入力モード",
      },
      {
        propName: "delay",
        type: "`number`",
        default: "`30`",
        description:
          "アバターメッセージのタイピング効果の文字あたりの遅延時間(ミリ秒、ms)です。値が大きいほどタイピング速度が遅くなります。",
      },
      {
        propName: "isShowCount",
        type: "`boolean`",
        default: "`true`",
        description:
          "テキスト入力モードの時、現在入力された文字数および最大文字数カウンターの表示有無を設定します。",
      },
    ],
    chatDataColumns: [
      { header: "property", label: "プロパティ名" },
      { header: "type", label: "タイプ" },
      { header: "description", label: "説明" },
    ],
    chatDataRows: [
      {
        property: "message",
        type: "string",
        description: "受信されたメッセージの内容です。",
      },
      {
        property: "chat_type",
        type: "string (ResponseChatType)",
        description:
          "メッセージの種類を示します。可能な値は隣の 'ResponseChatType値詳細' タブを参照してください。",
      },
      {
        property: "time",
        type: "string",
        description:
          "メッセージが発生した時間の文字列表現です。 (例: ISO 8601形式)",
      },
      {
        property: "id",
        type: "string",
        description: "メッセージの固有識別子です。",
      },
    ],
    statusEventArgumentColumns: [
      { header: "type", label: "タイプ" },
      { header: "description", label: "説明" },
    ],
    statusEventArgumentRows: [
      {
        type: "string (Status)",
        description:
          "SDKおよびアバターの現在の状態を示す文字列です。可能な値は下の 'Status値詳細' 表を参照してください。",
      },
    ],
    statusPossibleValuesColumns: [
      { header: "status", label: "Status値" },
      { header: "description", label: "説明" },
    ],
    statusPossibleValuesData: [
      {
        status: "IDLE",
        description:
          "SDKが初期化されたがまだ接続されていないアイドル状態です。",
      },
      {
        status: "CONNECTING",
        description:
          "セッション接続前、`sdk_key`と`avatar_id`を検証して通過した状態です。",
      },
      {
        status: "CONNECTING_FAILED",
        description:
          "正しくない`sdk_key`または`avatar_id`値により検証に失敗した状態です。",
      },
      {
        status: "SOCKET_CONNECTED",
        description: "WebSocketサーバーに正常に接続された状態です。",
      },
      {
        status: "SOCKET_FAILED",
        description: "WebSocketサーバー接続に失敗した状態です。",
      },
      {
        status: "STREAMING_CONNECTED",
        description:
          "メディアストリーミング(WebRTC)サーバーに正常に接続された状態です。",
      },
      {
        status: "STREAMING_FAILED",
        description:
          "メディアストリーミング(WebRTC)サーバー接続に失敗した状態です。",
      },
      {
        status: "CONNECTED_FINISH",
        description:
          "すべての接続(WebSocket、ストリーミング)が正常に完了した状態です。",
      },
      {
        status: "VIDEO_LOAD",
        description: "アバタービデオデータの読み込みが開始された状態です。",
      },
      {
        status: "VIDEO_CAN_PLAY",
        description:
          "アバタービデオの再生が可能で、ほとんどのSDKメソッドを呼び出すことができる準備状態です。",
      },
    ],
    responseChatTypeValuesColumns: [
      { header: "chatType", label: "ResponseChatType値" },
      { header: "description", label: "説明" },
    ],
    responseChatTypeValuesData: [
      {
        chatType: "TEXT",
        description:
          "アバターが送信するテキストメッセージです。主に `KlleonChat.echo()` または `KlleonChat.sendTextMessage()` メソッド使用後のアバターの応答として発生します。",
      },
      {
        chatType: "STT_RESULT",
        description:
          "ユーザーの音声(STT)が正常にテキストに変換された結果です。",
      },
      {
        chatType: "STT_ERROR",
        description:
          "ユーザー音声(STT)変換または送信に失敗した時に発生します。主に音声データがない場合に発生します。",
      },
      {
        chatType: "WAIT",
        description: "チャット開始のため待機中に発生します。",
      },
      {
        chatType: "WARN_SUSPENDED",
        description:
          "一定時間(例: 10秒)チャットがない場合、チャットが停止されることを警告します。",
      },
      {
        chatType: "DISABLED_TIME_OUT",
        description:
          "長時間チャットがないためセッションが停止された時に発生します。",
      },
      {
        chatType: "TEXT_ERROR",
        description:
          "ユーザーが送ったテキストメッセージの送信に失敗した時に発生します。",
      },
      {
        chatType: "TEXT_MODERATION",
        description:
          "ユーザーが不適切な言語を使用してメッセージがフィルタリングされた時に発生します。",
      },
      {
        chatType: "ERROR",
        description:
          "サーバー側で一般的なエラーが発生した時に伝達されます。 (例: 内部サーバーエラー、特定のリクエスト処理失敗など)",
      },
      {
        chatType: "PREPARING_RESPONSE",
        description:
          "アバターがユーザーのメッセージに対する回答を準備中に発生します。",
      },
      {
        chatType: "RESPONSE_IS_ENDED",
        description:
          "アバターの1ターン(LLMが生成した複数の文を含む可能性のある応答)が完全に終了したことを通知します。",
      },
      {
        chatType: "RESPONSE_OK",
        description:
          "アバターがユーザーメッセージに対して正常に応答を準備したか、発話を開始したことを通知します。",
      },
      {
        chatType: "WORKER_DISCONNECTED",
        description:
          "アバターストリーミングワーカーとの接続が切断された時に発生します。",
      },
      {
        chatType: "EXCEED_CONCURRENT_QUOTA",
        description:
          "許可された最大同時接続者数を超過して接続が拒否された時に発生します。",
      },
      {
        chatType: "START_LONG_WAIT",
        description:
          "指定された時間ユーザーとの相互作用がないためアバターが長い待機状態に移行する時に発生します。",
      },
      {
        chatType: "USER_SPEECH_STARTED",
        description: "SDKがユーザー音声入力を検出し始めた時に発生します。",
      },
      {
        chatType: "USER_SPEECH_STOPPED",
        description:
          "SDKがユーザー音声入力が停止したことを検出した時に発生します。",
      },
    ],
  },
};
