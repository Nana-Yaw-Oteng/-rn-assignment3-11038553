import { Image, SafeAreaView, Text,View } from "react-native";

const Greetings = () =>{
    const image1 = require('../assets/a1ae0913e0ff2083486500681569cc7c.png'); 
    return(
        <SafeAreaView>
        <View style={{ display: "flex", flexDirection: "column", padding: 15 }}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 32 }}>Hello, Devs</Text>
            <Image source={image1} style={{ width: 50, height: 52, backgroundColor: '#fff', borderRadius: 100 }} />
          </View>
          <Text style={{ fontStyle:'italic' }}>15 tasks ongoing</Text>
        </View>
      </SafeAreaView>   
      
    );
}
export default Greetings;