import { compiledContent } from "./scripts/whatsapp.md";

export function generate(script: string) {
  return {
    whatsapp: compiledContent().replaceAll("{{scriptRendered}}", script),
  };
}
