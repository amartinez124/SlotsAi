import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    icon: "circle-question",
    label: "What can you do?",
    prompt: "What can you do?",
  },
  {
    icon: "sparkle",
    label: "What promotions do we have?",
    prompt: "What promotions do we have?",
  },
  {
    icon: "confetti",
    label: "What Slots games do we have?",
    prompt: "What Slots games do we have?",
  },
  {
    icon: "book-clock",
    label: "What time is it?",
    prompt: "What time is it?",
  },
];

export const PLACEHOLDER_INPUT = "Message Chukchansi AI";

export const GREETING = "";

export const COMPOSER_TOOLS = [
  {
    id: "search_docs",
    label: "Search docs",
    shortLabel: "Docs",
    placeholderOverride: "Search documentation",
    icon: "book-open" as const,
    pinned: false,
  },
];

export const SPEECH_RECOGNITION_LANGUAGE = 'en-US';

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    accent: {
      primary: "#D9B282",
      level: 1,
    },
    surface: theme === "dark" 
      ? {
          background: "#14192B",
          foreground: "#030307",
        }
      : {
          background: "#FFFFFF",
          foreground: "#F5F5F5",
        },
  },
  radius: "round",
  density: "spacious",
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal" as const,
        display: "swap" as const,
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Medium.woff2",
        weight: 500,
        style: "normal" as const,
        display: "swap" as const,
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-SemiBold.woff2",
        weight: 600,
        style: "normal" as const,
        display: "swap" as const,
      },
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Bold.woff2",
        weight: 700,
        style: "normal" as const,
        display: "swap" as const,
      },
    ],
  },
});
