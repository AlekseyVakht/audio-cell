import { ReactNode } from "react";
import { observer } from "mobx-react-lite";

import { Image } from "@vkontakte/vkui";

import { coverStore } from "@/shared/model";
import cover from "@/shared/assets/common/icons/cover.svg";

interface CoverProps {
  children: ReactNode;
  onClick: () => void;
}

export const Cover = observer((props: CoverProps) => {
  const { children, onClick } = props;
  return (
    <Image
      src={cover}
      alt="cover"
      size={40}
      onClick={onClick}
      onMouseEnter={() => coverStore.setIsHovered()}
      onMouseLeave={() => coverStore.setIsUnhovered()}
    >
      {children}
    </Image>
  );
});
