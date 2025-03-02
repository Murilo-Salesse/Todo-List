import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#fff" translucent={true} />
      <Home />
    </>
  );
}
