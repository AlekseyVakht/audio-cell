import { Headline } from "@vkontakte/vkui";

interface HeadingProps {
  children: string;
}

export const Heading = (props: HeadingProps) => {
  const { children = "Трек" } = props;
  return (
    <Headline
      style={{
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "16px",
        letterSpacing: "0.15px",
        lineHeight: "20px",
      }}
    >
      {children}
    </Headline>
  );
};
