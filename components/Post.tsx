
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";

import { View, Text, TouchableOpacity } from "react-native";



export default function Post({ post }: { post: any }) {

    function formatDistanceToNow(_creationTime: any, arg1: { addSuffix: boolean; }): import("react").ReactNode {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={styles.post}>
            {/*  Post Header */}
            <View style={styles.postHeader} >

                <Link href={"/(tabs)/notifications"}>
                    <TouchableOpacity style={styles.postHeaderLeft}>
                        <Image
                            source={post.author.image}
                            style={styles.postAvatar}
                            contentFit="cover"
                            transition={200}
                            cachePolicy="memory-disk"
                        />
                        <Text style={styles.postUsername}>{post.author.username}</Text>
                    </TouchableOpacity>
                </Link>
                <Text>Post</Text>
            </View>

            {/* IMAGE */}
            <Image
                source={post.imageUrl}
                style={styles.postImage}
                contentFit="cover"
                transition={200}
                cachePolicy="memory-disk"
            />
            <View style={styles.postActions}>
                <View style={styles.postActionsLeft}>
                    <TouchableOpacity>
                        <Ionicons name={"heart-outline"} size={24} color={COLORS.white}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Ionicons name="chatbubble-outline" size={22} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <Ionicons
                        name={"bookmark-outline"}
                        size={22}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>

           {/* POST INFO */}
      <View style={styles.postInfo}>
        <Text style={styles.likesText}>Be first to like this</Text>
        {post.caption && (
          <View style={styles.captionContainer}>
            <Text style={styles.captionUsername}>{post.author.username}</Text>
            <Text style={styles.captionText}>{post.caption}</Text>
          </View>
        )}

        
          <TouchableOpacity >
            <Text style={styles.commentsText}>View all 4 comments comments</Text>
          </TouchableOpacity>
        

        <Text style={styles.timeAgo}>
          2hours ago
        </Text>
      </View>
        </View>

        
    )
}