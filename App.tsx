import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "@/navigation/RootStackScreen";
import Toast from "react-native-toast-message";
import { theme } from "@/theme/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <RootStackScreen />
        </NavigationContainer>
        <Toast position="bottom" bottomOffset={50} />
      </Provider>
    </SafeAreaProvider>
  );
}
