import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import AuthGate from "@/components/AuthGate";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
        <AuthGate />
      </SafeAreaView>
    </SafeAreaProvider>
    </ClerkProvider>

  );
}
