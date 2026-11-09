/**
 * Text normalization and answer validation utilities
 */

/**
 * Normalizes German input strings:
 * - Trims whitespace
 * - Converts to lower case
 * - Strips trailing punctuation (. or ?)
 * - Replaces German umlaut substitutions: ae -> ä, oe -> ö, ue -> ü, ss -> ß
 * - Normalizes multiple spaces into a single space
 */
export function normalizeGermanText(input: string): string {
  if (!input) return '';
  
  let normalized = input.trim().toLowerCase();
  
  // Strip trailing punctuation
  normalized = normalized.replace(/[.?!]+$/, '').trim();

  // Replace alternative spellings to standard German characters for uniform comparison
  // ae -> ä, oe -> ö, ue -> ü, ss -> ß
  // Note: we can also create an alternative variant where ä -> ae so both directions match seamlessly
  return normalized;
}

/**
 * Canonical representation converting umlauts and phonetic equivalents to a base form
 * so that both 'Montag', 'montag', 'Montag.', 'Dienstag', 'ueber' vs 'über', 'fussball' vs 'fußball' match.
 */
export function canonicalizeGerman(text: string): string {
  let s = normalizeGermanText(text);

  // Replace multiple spaces
  s = s.replace(/\s+/g, ' ');

  // Standardize phonetic representations
  s = s
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');

  return s;
}

/**
 * Checks if a user's answer matches any of the accepted target answers
 */
export function isAnswerCorrect(userAnswer: string, acceptedAnswers: string[]): boolean {
  if (!userAnswer || !userAnswer.trim()) return false;

  const canonicalUser = canonicalizeGerman(userAnswer);

  return acceptedAnswers.some(accepted => {
    return canonicalizeGerman(accepted) === canonicalUser;
  });
}

/**
 * Validates a sentence formed by word cards against accepted sentence structures
 */
export function isSentenceCorrect(userTokens: string[], acceptedSentences: string[]): boolean {
  if (!userTokens || userTokens.length === 0) return false;

  // Reconstruct sentence by joining tokens
  // Handle punctuation attached to tokens or separate
  const userSentence = userTokens.join(' ').replace(/\s+([.?!])/g, '$1');
  const canonicalUser = canonicalizeGerman(userSentence);

  return acceptedSentences.some(accepted => {
    return canonicalizeGerman(accepted) === canonicalUser;
  });
}
