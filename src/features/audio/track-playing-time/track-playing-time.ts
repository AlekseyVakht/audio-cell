import { timeFormatter, TrackTime } from "@/shared";

export const trackPlayingTime = ({ min, sec }: TrackTime) => {
  const time = timeFormatter(min, sec);
  return time;
};
