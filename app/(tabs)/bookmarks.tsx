import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0,
                    height: 40,
                    paddingBottom: 8,
                },
            }} >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name='bookmarks'
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" color={color} size={size} />
                }}
            />

            <Tabs.Screen
                name='create'
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" color={COLORS.primary} size={size} />
                }}
            />
            <Tabs.Screen
                name='notifications'
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />
                }}
            />
        </Tabs>
    )
}