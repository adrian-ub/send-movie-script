import { convert } from "html-to-text";

export function extractContent(htmlString: string) {
  return convert(htmlString, { wordwrap: 130 });
}
