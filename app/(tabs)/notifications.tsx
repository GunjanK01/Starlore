import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function Notifications() {
  return (
    <SafeAreaView>
        <Text>Notifications</Text>
        <Link href={"/profile"}> Go to Profile</Link>
    </SafeAreaView>
  )
}