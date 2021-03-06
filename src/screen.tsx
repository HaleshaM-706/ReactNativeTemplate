import { Navigation } from "react-native-navigation";
import withPaperProvider from "./hoc/withPaperProvider.hoc";


export function registerScreens() {
  Navigation.registerComponent("Initializing", () =>
    withPaperProvider(require("../intialization").default)
  );

  Navigation.registerComponent("CustomDrawer", () =>
  withPaperProvider(require("./components/drawer/CustomDrawer").default)
);

Navigation.registerComponent("Dashboard", () =>
  withPaperProvider(require("./pages/dashboard").default)
);
}


