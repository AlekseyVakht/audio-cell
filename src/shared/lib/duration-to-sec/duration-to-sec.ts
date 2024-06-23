import { timeFormatter } from "../time-formatter/time-formatter";

export const durationToSec = (duration: number) => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);
  const formatted = timeFormatter(min, sec);
  return formatted;
};
