import { Group } from "@vkontakte/vkui";

import { AudioCard } from "@/entities/audio";

export const AudioWidget = () => {
  return (
    <Group mode="plain" style={{ paddingBlock: "0" }}>
      <AudioCard />
    </Group>
  );
};
