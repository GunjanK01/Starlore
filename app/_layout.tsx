import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import AuthGate from "@/components/AuthGate";
import ClerkAndConvexProvider from "@/provider/ClerkAndConvexProvider";
import {useFonts} from "expo-font";


SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Monofett': require("../assets/fonts/Monofett.ttf"), 
  });


  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ClerkAndConvexProvider>

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} onLayout={onLayoutRootView}>
          <AuthGate />
        </SafeAreaView>
      </SafeAreaProvider>

    </ClerkAndConvexProvider>

  );
}
