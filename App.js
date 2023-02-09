// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, Image, Button,Alert, Platform, StatusBar, Dimensions } from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';

export default function App() {
  console.log("App executed")
  // console.log(useDeviceOrientation())

  const handelPress = () =>{
    console.log("You clicked the button")
  }

  console.log(Dimensions.get("screen"))

  

  

  return <ViewImage/>;
    // <SafeAreaView style={styles.container}>
      
    //   <Text style={styles.texting} numberOfLines={1} onPress={handelPress}>Hi World going to make this </Text>

    //   <TouchableHighlight onPress={() => console.log("Image  is Clicked")}>

    //   <Image source={{uri:"https://picsum.photos/200/300"}}
    //   borderRadius={15}
    //   fadeDuration = {1800}
    //   // resizeMode={'cover'}
    //   style = {styles.imageview}></Image>
    //   </TouchableHighlight>


    //   {/* <Image source={require('./assets/icon.png')}/> */}
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // <SafeAreaView style = {styles.container}>
    //     <Button title='Click Me ' 
    //     onPress={() => Alert.alert("My title","Your have clicked the button",[
    //       {text:"Yes" , onPress: () => console.log("You clicked Yes")},
    //       {text:"No", onPress: () => console.log("You pressed No")},
    //       {text:"Null", onPress: ()=> console.log("Null Value")}
    //     ],

    //     )} 
    //     style={styles.bottonview}/>
    // </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <Button title='Click Me'
    //   onPress={() => 
    //     Alert.prompt("My Title", "Message", (text) => console.log(text) )
    //   }/>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <View style = {{
    //     backgroundColor: '#005A9C',
    //     width:'50%',
    //     height:70,
         

    //   }}>

    //   </View>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <View style={{
    //   backgroundColor: "#fff",
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent:"center",
    //   alignItems:"center"
    // }}>
    //   <View style={{
    //     backgroundColor: "#005A9C",
    //     width: 100,
    //     height: 100
    //   }}/>
    //   <View style={{
    //     backgroundColor: "gold",
    //     width: 100,
    //     height: 100
    //   }}/>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     width: 100,
    //     height: 100
    //   }}/>

    // </View>
    // </SafeAreaView>
    
    
    
  
}



// const styles = StyleSheet.create({
//   container: {
//     // SafeAreaView:true,
//     flex: 1,
//     backgroundColor: '#000000',
    
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    
//   },
//   texting: {
//     backgroundColor: 'yellow'

//   },imageview: {
//     height: 200,
//     width: 300,
//     justifyContent: 'center',
//     alignContent:'center',
//     marginLeft: 50,
//     marginTop: 20,
    
    
//   },
//   bottonview: {
//     backgroundColor:"blue",
//     color:"orange",
//   }
// });
