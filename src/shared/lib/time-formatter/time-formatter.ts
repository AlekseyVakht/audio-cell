export const timeFormatter = (min: number, sec: number) => {
  const formattedSec = `${sec < 10 ? "0" + sec : sec}`;
  const formatted = `${min}:${formattedSec}`;
  return formatted;
};
