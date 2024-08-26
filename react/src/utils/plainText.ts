// Converted from src/app/theme/filters/text/removeHtml.js

/**
 * Converts HTML content to plain text by removing HTML tags.
 * @param text - The HTML content to be converted.
 * @returns The plain text without HTML tags.
 */
export function plainText(text: string | null | undefined): string {
  return text ? String(text).replace(/<[^>]+>/gm, '') : '';
}
