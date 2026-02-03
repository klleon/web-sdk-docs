import type { VoiceCodeType } from "../types/global";

const LOCALE_MAP: Record<string, VoiceCodeType> = {
  ko: "ko_kr",
  en: "en_us",
  ja: "ja_jp",
  id: "id_id",
};

export function getLocaleCode(locale: string): VoiceCodeType {
  return LOCALE_MAP[locale] ?? "ko_kr";
}

export function getDocsLink(locale: string): string {
  if (locale === "ko") {
    return "/docs/intro";
  }
  return `/${locale}/docs/intro`;
}
