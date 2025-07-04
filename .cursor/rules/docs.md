# Klleon SDK Documentation Rules

## 프로젝트 구조

- **메인 프로젝트**: web-sdk-docs (문서 사이트)
- **SDK 모노레포**: sdk/klleon-sdk/ (SDK 코드)
  - 주요 SDK: sdk/klleon-sdk/apps/js-sdk/ (JavaScript SDK 구현)
  - 공통 패키지: sdk/klleon-sdk/packages/ (인터페이스, 설정, 타입 정의)
- **문서 언어**: 한국어(ko), 영어(en), 일본어(ja)

## 문서 작성 워크플로우

### 1. 질의응답 기반 문서 작성

#### 문서 작성 전 필수 질문

1. **대상 독자**: 이 문서는 누구를 위한 것인가?
2. **목적**: 독자가 이 문서를 통해 무엇을 얻어야 하는가?
3. **사전 지식**: 독자가 알아야 할 사전 요구사항은?
4. **실제 사용 시나리오**: 어떤 상황에서 이 기능을 사용하는가?
5. **문제 해결**: 어떤 문제를 해결하는 기능인가?

#### 문서 작성 중 체크리스트

- [ ] 독자의 관점에서 설명하고 있는가?
- [ ] 실제 사용 예시가 충분한가?
- [ ] 복잡한 개념을 단계별로 분해했는가?
- [ ] 시각적 요소로 이해를 돕고 있는가?
- [ ] 에러 상황과 해결책을 포함했는가?

### 2. SDK 코드 기반 문서 작성

#### 코드 분석 우선순위

1. **sdk/klleon-sdk/apps/js-sdk/src/** - 메인 JavaScript SDK 구현
2. **sdk/klleon-sdk/packages/** - 공통 인터페이스, 타입, 설정
3. **sdk/klleon-sdk/apps/js-sdk/package.json** - SDK 의존성 및 스크립트
4. **sdk/klleon-sdk/README.md** - 모노레포 설명
5. **sdk/klleon-sdk/apps/js-sdk/README.md** - JavaScript SDK 설명

#### 코드와 문서 동기화 규칙

- **실제 구현 확인**: SDK 코드의 실제 동작을 바탕으로 문서 작성
- **API 변경 추적**: SDK 업데이트 시 문서 즉시 반영
- **타입 정의 활용**: packages/의 실제 타입을 기준으로 작성
- **예제 코드 검증**: 문서의 예제가 실제 SDK와 호환되는지 확인

### 3. Changelog 작성 규칙

#### Changelog 템플릿 필수 사용

새로운 버전의 changelog를 작성할 때는 반드시 `template/changelog.mdx` 템플릿을 참고하여 작성합니다.

```mdx
---
id: v1.x.x
title: v1.x.x
sidebar_label: v1.x.x
sidebar_position: 0
description: Klleon Chat SDK v1.x.x 업데이트 내역
---

# Klleon Chat SDK v1.x.x

## ✨ Features

- 새로운 기능 설명

## 🐛 Fixes

- (수정된 항목이 있다면 여기에)

## Removed

- (제거된 항목이 있다면 여기에)

## 🛠️ Others

- (리팩토링, 명칭 변경 등 그 외 변경사항)
```

#### Changelog 작성 체크리스트

- [ ] `template/changelog.mdx` 템플릿 구조를 정확히 따랐는가?
- [ ] 버전 번호와 날짜가 정확한가?
- [ ] 각 섹션(Features, Fixes, Removed, Others)이 적절히 분류되었는가?
- [ ] 새로운 기능의 설명이 명확하고 구체적인가?
- [ ] 다국어 지원 시 모든 언어 버전에 동일한 내용이 반영되었는가?

#### Changelog Index 업데이트

새로운 버전 추가 시 `06-changelog/index.mdx` 파일도 함께 업데이트하여 최신 버전을 맨 위에 배치합니다.

## 문서 작성 규칙

### 1. SEO 및 메타데이터 최적화

#### Head 컴포넌트 필수 사용

```tsx
import Head from "@docusaurus/Head";

<Head>
  <title>{`페이지 제목 - Klleon Chat SDK`}</title>
  <meta name="description" content="페이지 설명 (150-160자 권장)" />
  <meta name="keywords" content="주요 키워드들, 쉼표로 구분" />
</Head>;
```

#### 메타데이터 규칙

- **title**: `{페이지 제목} - Klleon Chat SDK {부제목}`
- **description**: 150-160자 내외, 페이지 핵심 내용 요약
- **keywords**: 관련 키워드들을 쉼표로 구분하여 나열
- **sidebar_position**: 문서 순서 제어 (1, 2, 3...)

### 2. 문서 구조 및 네비게이션

#### 파일명 규칙

- **한국어 기본**: `docs/` 디렉토리에 직접 작성
- **다국어**: `i18n/{locale}/docusaurus-plugin-content-docs/current/` 에 번역
- **파일명**: kebab-case 사용 (예: `getting-started.mdx`)

#### Frontmatter 필수 항목

```yaml
---
id: unique-page-id
sidebar_position: 숫자
title: 페이지 제목
sidebar_label: 사이드바 표시명 (선택)
description: 페이지 설명 (선택)
---
```

### 3. 컨텐츠 작성 원칙

#### 직관성과 접근성

- **단계별 설명**: 복잡한 개념은 작은 단위로 분해
- **실제 사용 시나리오**: 이론보다는 실무 중심 설명
- **사전 요구사항**: 각 섹션 시작 시 필요한 지식 명시
- **왜(Why) 설명**: 기능의 목적과 사용 이유 설명
- **문제 해결 중심**: 어떤 문제를 해결하는지 명확히 설명

#### 시각적 요소 활용

- **Mermaid 다이어그램**: 복잡한 흐름이나 관계 표현
- **Table 컴포넌트**: API 메서드, 옵션, 속성 정리
- **Callout/Alert**: 중요 정보 강조
- **번호 매기기**: 단계별 가이드

### 4. 코드 예제 작성 규칙

#### React 기반 예제 필수 작성

모든 코드 예제는 React 기반으로 작성합니다. 다른 프레임워크나 바닐라 JavaScript 예제는 필요시에만 추가로 제공합니다.

````tsx
// ✅ React 기반 예제 (기본)
```tsx title="App.tsx (React 예제)"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const { KlleonChat } = window;

    // 이벤트 리스너 등록
    KlleonChat.onErrorEvent((error) => {
      console.error("SDK 오류:", error);
    });

    // SDK 초기화
    KlleonChat.init({
      sdk_key: "YOUR_SDK_KEY",
      avatar_id: "YOUR_AVATAR_ID",
    });
  }, []);

  return (
    <div>
      <avatar-container />
      <chat-container />
    </div>
  );
}
````

#### 완전한 실행 가능한 예제

````tsx
// ✅ 좋은 예제
```tsx title="App.tsx (완전한 예제)"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const { KlleonChat } = window;

    // 이벤트 리스너 등록
    KlleonChat.onStatusEvent((status) => {
      console.log("Status:", status);
    });

    // SDK 초기화
    KlleonChat.init({
      sdk_key: "YOUR_SDK_KEY",
      avatar_id: "YOUR_AVATAR_ID",
    });
  }, []);

  return (
    <div>
      <avatar-container />
      <chat-container />
    </div>
  );
}
````

#### 코드 예제 규칙

- **실행 가능**: 복사해서 바로 사용할 수 있는 완전한 코드
- **단계별 진행**: 기본 → 고급 → 실전 순서
- **에러 처리**: 예외 상황과 해결 방법 포함
- **TypeScript 지원**: 타입 정보 명시
- **실제 프로젝트 구조**: Vite, React 등 실제 환경 반영
- **SDK 버전 호환성**: 현재 SDK 버전과 호환되는 코드

### 5. 컴포넌트 활용 규칙

#### Table 컴포넌트 사용

```tsx
import { Table } from "@site/src/components/table/Table";
import { setup } from "@site/src/data/setup";

<Table columns={setup.ko.initOptionColumns} data={setup.ko.initOptionData} />;
```

#### 라이브 예제 컴포넌트

```tsx
import BaseReactExample from "@site/src/components/example/BaseReactExample";

<BaseReactExample />;
```

### 6. 다국어 지원 규칙

#### 번역 우선순위

1. **한국어(ko)**: 기본 언어, 최신 내용 우선
2. **영어(en)**: 글로벌 사용자 대상
3. **일본어(ja)**: 일본 시장 대상

#### 번역 파일 위치

```
i18n/
├── ko/                          # 한국어 (기본)
├── en/                          # 영어 번역
└── ja/                          # 일본어 번역
```
