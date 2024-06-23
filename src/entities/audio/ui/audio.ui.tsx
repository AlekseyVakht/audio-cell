import { observer } from "mobx-react-lite";

import { SimpleCell } from "@vkontakte/vkui";

import { duration } from "../lib/duration/duration";
import { PlaySound } from "@/features";
import { SubText, Heading, IconButtonCustom, playerStore } from "@/shared";

export const AudioCard = observer(() => {
  const { title, artist } = playerStore.currentTrack;
  const time = duration();
  return (
    <SimpleCell
      subtitle={<SubText>{artist}</SubText>}
      indicator={<SubText>{time}</SubText>}
      before={<PlaySound />}
      after={<IconButtonCustom />}
    >
      <Heading>{title}</Heading>
    </SimpleCell>
  );
});
