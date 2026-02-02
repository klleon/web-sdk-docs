import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Klleon Chat SDK - AI Avatar Chat JavaScript Library",
  tagline:
    "Build interactive AI avatars with real-time chat, LLM, and TTS capabilities",
  favicon: "img/favicon.ico",

  url: "https://docs.klleon.io",
  baseUrl: "/",
  trailingSlash: false,
  organizationName: "klleon", // Usually your GitHub org/user name.
  projectName: "web-sdk-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  customFields: {
    sdkKey: process.env.REACT_APP_SDK_KEY || "APP-vN4Mh9vmHqtPbTDbDhCp",
    avatarId:
      process.env.REACT_APP_AVATAR_ID || "a5fe629d-0090-11ef-8ee1-0abbf354c5cc",
  },

  scripts: [
    {
      src: "https://web.sdk.klleon.io/1.2.0/klleon-chat.umd.js",
      async: true,
    },
  ],
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en", "ja"],
    localeConfigs: {
      ko: {
        label: "한국어",
        htmlLang: "ko",
      },
      en: {
        label: "English",
        htmlLang: "en",
      },
      ja: {
        label: "日本語",
        htmlLang: "ja",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/docs/tags/**", "/search/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  plugins: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
    metadata: [
      { name: "robots", content: "index,follow" },
      { name: "googlebot", content: "index,follow" },
      {
        name: "keywords",
        content: [
          "AI Avatar Chat, Digital Human, Conversational AI, LLM SDK, TTS, Lip Sync, JavaScript AI SDK, Virtual Assistant, Realtime AI Chat, GPT Avatar, Klleon SDK, AI Developer Tools, Web SDK",
          "AI 아바타, 디지털 휴먼, 대화형 인공지능, LLM 연동, 음성합성, 립싱크, 자바스크립트 SDK, 가상 비서, 실시간 AI 채팅, GPT 챗봇, 클레온 SDK, AI 개발 툴, 웹 기반 AI",
          "AIアバター, デジタルヒューマン, 会話型AI, LLM統合, 音声合成, リップシンク, JavaScript AI SDK, バーチャルアシスタント, リアルタイムAIチャット, GPTアバター, クレオンSDK, AI開発ツール, ウェブAI",
        ].join(", "),
      },
      {
        name: "description",
        content:
          "Build AI avatars with chat, LLM, and TTS. 디지털 휴먼 SDK로 실시간 대화를 구현하세요. AIアバターと会話できるウェブSDK。",
      },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Klleon Chat SDK - Real-Time AI Avatar Conversation SDK",
      },
      {
        name: "twitter:description",
        content:
          "Build virtual humans with JavaScript. Real-time chat, LLM, TTS, and lip sync powered by Klleon AI SDK.",
      },
      { name: "og:type", content: "website" },
      { name: "og:site_name", content: "Klleon Chat SDK Documentation" },
      {
        name: "og:title",
        content: "Klleon Chat SDK - Real-Time AI Avatar SDK for Developers",
      },
      {
        name: "og:description",
        content:
          "JavaScript SDK for building AI avatars, chatbots, and virtual assistants with LLM, TTS, and real-time lip sync. Designed for modern web developers.",
      },
      { name: "og:url", content: "https://docs.klleon.io" },
    ],

    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        src: "img/klleon_logo_full.png",
        width: 100,
        alt: "Klleon Logo",
        style: {
          objectFit: "contain",
        },
      },
      items: [
        {
          type: "html",
          position: "left",
          value: `
            <span style="
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-size: 1.15em;
              font-weight: 600;
              color: #24292f;
              padding: 0;
              box-shadow: none;
            ">
              1.2.0
              <span style="
                display: inline-block;
                margin-left: 4px;
                background: none;
                color: #3579CC;
                border: 1.5px solid #3579CC;
                border-radius: 10px;
                font-size: 0.5em;
                font-weight: 700;
                padding: 3px 5px;
                letter-spacing: 0.5px;
                line-height: 1.2;
                box-shadow: none;
                vertical-align: middle;
              ">
                Latest
              </span>
            </span>
        `,
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "docs",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true, // 🔴 사용자 테마 전환 스위치 제거
      respectPrefersColorScheme: false, // 🔴 OS 다크 모드 무시
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
