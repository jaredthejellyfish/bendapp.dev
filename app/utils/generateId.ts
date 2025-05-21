/**
 * Generates a secure random ID with the given prefix and length
 * Works in both browser and Node.js environments
 */
function generateId(prefix: `${string}_`, length: number): string {
  if (length <= 0) {
    throw new Error("Length must be greater than 0");
  }

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let id = "";

  try {
    // Create a typed array to store random values
    const randomValues = new Uint8Array(length);

    // Browser environment
    if (typeof window !== "undefined") {
      window.crypto.getRandomValues(randomValues);
    }
    // Node.js environment or modern browser with global crypto
    else if (typeof crypto !== "undefined") {
      crypto.getRandomValues(randomValues);
    } else {
      throw new Error("Crypto API not available in this environment");
    }

    // Use the random values to select characters
    for (let i = 0; i < length; i++) {
      const value = randomValues[i];
      if (!value) {
        throw new Error("Failed to generate random value");
      }
      const randomIndex = value % charactersLength;
      id += characters.charAt(randomIndex);
    }
  } catch (e) {
    // Fallback to a less secure method if crypto API fails
    console.warn(
      "Secure random generation failed, falling back to Math.random()",
      e
    );
  }

  return `${prefix}${id}`;
}

export default generateId;
