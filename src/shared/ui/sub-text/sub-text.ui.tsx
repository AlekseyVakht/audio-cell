import { Footnote } from "@vkontakte/vkui";

interface SubTextProps {
  children: string;
}

export function SubText(props: SubTextProps) {
  const { children } = props;
  return (
    <Footnote
      style={{
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "13px",
        letterSpacing: "0.2px",
        lineHeight: "16px",
      }}
    >
      {children}
    </Footnote>
  );
}
