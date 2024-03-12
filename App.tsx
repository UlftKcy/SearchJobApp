import { store } from "@/features/store";
import RootStackScreen from "@/navigation/RootStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
        <Toast position="bottom" bottomOffset={50} />
      </Provider>
    </SafeAreaProvider>
  );
}
