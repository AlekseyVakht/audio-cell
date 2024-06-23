import { createRoot } from "react-dom/client";
import { Providers } from "./providers/vkProviders";
import { Layout } from "./layout/layout.ui";
import "./styles/index.css";
import "@vkontakte/vkui/dist/cssm/styles/themes.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <Providers>
    <Layout />
  </Providers>,
);
