import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Klleon SDK Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "klleon", // Usually your GitHub org/user name.
  projectName: "web-sdk-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  scripts: [
    {
      src: "https://web.sdk.klleon.io/1.2.0/klleon-chat.umd.js",
      async: true,
    },
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en", "ja"],
    localeConfigs: {
      ko: {
        label: "한국어",
      },
      en: {
        label: "English",
      },
      ja: {
        label: "日本語",
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
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  plugins: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
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
