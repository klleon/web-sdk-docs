# Klleon SDK Documentation Rules

## 프로젝트 구조

- 메인 프로젝트: web-sdk-docs (문서 사이트)
- SDK 모노레포: sdk/klleon-sdk/ (SDK 코드)
  - 주요 SDK: sdk/klleon-sdk/apps/js-sdk/ (JavaScript SDK 구현)
  - 공통 패키지: sdk/klleon-sdk/packages/ (인터페이스, 설정, 타입 정의)
- 문서 언어: 한국어(ko), 영어(en), 일본어(ja)

## SDK 코드 분석 규칙

1. sdk/klleon-sdk/apps/js-sdk/ 디렉토리의 코드를 우선적으로 참조
2. sdk/klleon-sdk/packages/ 디렉토리의 인터페이스와 타입 정의 참조
3. SDK의 실제 구현을 바탕으로 문서 작성
4. API 변경사항이 있으면 문서에 즉시 반영
5. 타입 정의는 packages/의 실제 타입을 기준으로 작성

## 문서 작성 규칙

1. SDK 코드와 문서의 일치성 유지
2. 실제 동작하는 예제 코드 제공
3. 버전별 변경사항 추적
4. 다국어 지원 (ko, en, ja)
5. 모노레포 구조를 반영한 문서 구성

## 코드 분석 우선순위

1. sdk/klleon-sdk/apps/js-sdk/src/ - 메인 JavaScript SDK 구현
2. sdk/klleon-sdk/packages/ - 공통 인터페이스, 타입, 설정
3. sdk/klleon-sdk/apps/js-sdk/package.json - SDK 의존성 및 스크립트
4. sdk/klleon-sdk/README.md - 모노레포 설명
5. sdk/klleon-sdk/apps/js-sdk/README.md - JavaScript SDK 설명

## 모노레포 구조 이해

- **apps/js-sdk/**: 실제 JavaScript SDK 구현체
- **packages/**:
  - 인터페이스 정의
  - 공통 타입 정의
  - 설정 파일들
  - 유틸리티 함수들

## 문서 업데이트 워크플로우

1. SDK 코드 변경사항 확인 (apps/js-sdk/ 및 packages/)
2. 관련 문서 파일 식별
3. 문서 내용 업데이트
4. 예제 코드 동기화
5. 다국어 번역 업데이트
6. 모노레포 구조 변경사항 반영
