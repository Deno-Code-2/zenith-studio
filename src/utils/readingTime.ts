
/**
 * Calculates the estimated reading time in minutes for a given text
 * @param text - The text content to calculate reading time for
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up to nearest minute)
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  // Count words by splitting on whitespace
  const words = text.trim().split(/\s+/).length;
  
  // Calculate reading time and round up to nearest minute
  const minutes = Math.ceil(words / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, minutes);
}
