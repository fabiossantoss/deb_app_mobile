import Reactotron from "reactotron-react-native";

const tron = Reactotron.configure({
  name: "Registro Condominos",
  host: "192.168.100.12"
})
  .useReactNative()
  .connect();

console.tron = tron;

tron.clear();
export default tron;
