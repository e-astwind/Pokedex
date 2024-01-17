import { StatusBar } from "react-native";
import Home from "./src/pages/Home";
import TabRoutes from "./src/routes/tab.routes";

export default function App() {
  return (
    <>
      <StatusBar />
      <TabRoutes />
    </>
  );
}
