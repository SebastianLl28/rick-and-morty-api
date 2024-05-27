/**
 * Sleep function
 * @param {number} s sleep time in seconds
 * @returns {Promise<void>}
 */
export const sleep = (s) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));
