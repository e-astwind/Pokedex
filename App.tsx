import { StatusBar } from "react-native";
import TabRoutes from "./src/routes/tab.routes";

export default function App() {
  return (
    <>
      <StatusBar />
      <TabRoutes />
    </>
  );
}
