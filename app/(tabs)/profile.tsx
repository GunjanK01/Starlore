import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Link href = {"/"}>Go index </Link>
    </View>
  )
}