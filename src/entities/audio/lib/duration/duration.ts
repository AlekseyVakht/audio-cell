import { trackPlayingTime } from "@/features";

import { playerStore } from "@/shared";

export const duration = () => {
  const isPlaying = playerStore.isPlaying;
  const currentTime = trackPlayingTime(playerStore.currentTime);
  const duration = playerStore.trackDuration;
  const content = isPlaying || playerStore.isPaused ? currentTime : duration;
  return content;
};
