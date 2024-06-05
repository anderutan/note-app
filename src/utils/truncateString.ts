function truncateString(str, num) {
  // Check if the string length exceeds the limit
  if (str.length > num) {
    // Truncate the string and add "..."
    return str.slice(0, num) + '...';
  } else {
    // If string is within the limit, return it as is
    return str;
  }
}

export default truncateString;
