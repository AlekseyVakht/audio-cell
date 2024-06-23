import { useEffect, useState } from "react";
import { playerStore, durationToSec } from "@/shared";
import { Howl } from "howler";

import audio from "@/shared/assets/common/audio/test-sound.mp3";

export const useSound = () => {
  const [sound] = useState<Howl>(
    new Howl({
      src: [audio],
      onload: () =>
        playerStore.setTrackDuration(durationToSec(sound.duration())),
      onpause: () => playerStore.setIsPaused(),
      onend: () => {
        playerStore.changePlayStatus();
        playerStore.setIsUnpaused();
      },
    }),
  );

  useEffect(() => {
    if (sound) {
      const interval = setInterval(() => {
        const min = Math.floor(sound.seek() / 60);
        const sec = Math.floor(sound.seek() % 60);
        playerStore.setCurrentTime({ min, sec });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [sound]);

  return {
    play: () => sound.play(),
    pause: () => sound.pause(),
  };
};
