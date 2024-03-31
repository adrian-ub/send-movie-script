import whatsAppContent from "./scripts/whatsapp.js?raw";

export function generate(script: string) {
  return {
    whatsapp: whatsAppContent.replaceAll("{{scriptRendered}}", script),
  };
}
