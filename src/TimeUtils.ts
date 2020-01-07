// @file
// Time utilities.

export const toHHMMSS = (str: string): string => {
  const secNum = parseInt(str, 10);
  let hours   = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - (hours * 3600)) / 60);
  let seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const const toMMSS = (str: string): string => {
  const secNum = parseInt(str, 10);
  let minutes = Math.floor(secNum / 60);
  let seconds = secNum - (minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
};
