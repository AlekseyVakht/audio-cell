import { Cover, Overlay, playerStore } from "@/shared";
import { useSound } from "@/entities/audio";

export const PlaySound = () => {
  const { play, pause } = useSound();
  return (
    <Cover
      onClick={() => {
        playerStore.changePlayStatus();
        playerStore.isPlaying ? play() : pause();
      }}
    >
      <Overlay />
    </Cover>
  );
};
