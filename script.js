function firstWord(str) {
  // Trim leading whitespace first to handle cases like ' Hello'
  str = str.trim();

  // Find the index of the first space
  let spaceIndex = str.indexOf(' ');

  // If there's no space, return the entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Return the substring up to the first space
  return str.slice(0, spaceIndex);
}

