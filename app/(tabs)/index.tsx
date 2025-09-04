import { Link } from "expo-router";
import { Text, View , StyleSheet, TouchableOpacity, Image} from "react-native";

export default function Index() {
  return (
    <View
      style= {styles.container}
    >
      <Link href={"/notifications"}> iseaki no watashi fan desu</Link>
      <Image 
      style={styles.stre}
        source={{uri: "https://images.unsplash.com/photo-1756680967556-26861e2c836b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"}} />
      <Text>Life is enjoy, isn't it</Text>
      <Image style= {styles.stre} source={{uri:"https://images.unsplash.com/photo-1756768937629-febe4bf15fcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"}}
      />
      <TouchableOpacity onPress={() => {
        alert("konichiwa")
      }}> 
      <Text style= {styles.title}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
    
  },
  title: {
    fontSize: 24,
    color: "skyblue",
  },
  stre:{
    width: 380,
    height: 240,
    borderRadius: 64
  }
})