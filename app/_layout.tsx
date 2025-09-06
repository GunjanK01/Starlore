import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import AuthGate from "@/components/AuthGate";
import ClerkAndConvexProvider from "@/provider/ClerkAndConvexProvider";
import {useFonts} from "expo-font";
import { Platform, StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";


SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'JetBrain-Bold': require("../assets/fonts/JetBrain-Bold.ttf"), 
  });


  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  // Match Android system nav bar with the app’s dark theme. 
// Setting a black background and light buttons avoids clashing system colors 
// and keeps the UI consistent, especially on devices with soft keys or gestures.
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#000000");
      NavigationBar.setButtonStyleAsync("light");
    }
  }, []);

  return (
    <ClerkAndConvexProvider>

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} onLayout={onLayoutRootView}>
          <StatusBar barStyle="light-content" hidden={false} />
          <AuthGate />
        </SafeAreaView>
      </SafeAreaProvider>

    </ClerkAndConvexProvider>

  );
}
