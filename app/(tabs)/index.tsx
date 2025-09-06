import { Loader } from "@/components/Loader";
import Story from "@/components/Story";
import { STORIES } from "@/constants/mock-test-data";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { useState } from "react";
import { Text, View , TouchableOpacity, ScrollView} from "react-native";
import { Image } from "expo-image";
import { api } from "@/convex/_generated/api";
import Post from "@/components/Post";

export default function Index() {
  const { signOut } = useAuth();
  //const [refreshing, setRefreshing] = useState(false);

  const posts = useQuery(api.post.getFeedPosts);

  if (posts === undefined) return <Loader />;
  if (posts.length === 0) return <NoPostsFound />;

  // this does nothing
  

  return (
     <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Starlore</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}>

            {STORIES.map((story) => (
              <Story key = {story.id} story = {story}/> 
           ))}
        </ScrollView>
        
        {posts.map((post: any) => (
          <Post key={post._id} post={post} />
        ))}
          
      </ScrollView>
     
    </View>
  );
}

const NoPostsFound = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
  </View>
);