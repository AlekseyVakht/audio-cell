import { Image } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { SoundBar, Pause, Play } from "../icons";

import { coverStore, playerStore } from "@/shared/model";

const HoveredOverlay = observer(() => {
  return <>{!coverStore.isHovered ? <SoundBar /> : <Pause />}</>;
});

export const Overlay = observer(() => {
  return (
    <Image.Overlay
      theme="dark"
      aria-label="cover-overlay"
      visibility={playerStore.isPlaying ? "always" : "on-hover"}
    >
      {!playerStore.isPlaying ? <Play /> : <HoveredOverlay />}
    </Image.Overlay>
  );
});
