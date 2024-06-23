import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ConfigProvider appearance="light">
      <AdaptivityProvider>{children}</AdaptivityProvider>
    </ConfigProvider>
  );
}
