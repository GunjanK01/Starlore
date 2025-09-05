import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/feed.styles';
import { COLORS } from "@/constants/theme";
import { useAuth } from '@clerk/clerk-expo';
import { STORIES } from '@/constants/mock-test-data';
import Story from '@/components/Story';


export default function Index() {

  const { signOut } = useAuth();
  
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>spotlight</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
        >
          {STORIES.map((story) =>(
            <Story key={story.id} story={story} />

          ))}

        </ScrollView>

          {/* FEED */}
      {/* FlatList*/}
      {/* here the feed will be shown thats soon to be built*/}

      </ScrollView>

      
    </View>
  );
}

