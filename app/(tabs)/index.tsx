import Story from "@/components/Story";
import { STORIES } from "@/constants/mock-test-data";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Text, View , TouchableOpacity, Image, ScrollView} from "react-native";

export default function Index() {
  const {signOut} = useAuth();
  return (
    <View
      style= {styles.container}
    >
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
      </ScrollView>
     
    </View>
  );
}

