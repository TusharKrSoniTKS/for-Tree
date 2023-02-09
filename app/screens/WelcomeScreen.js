import React from 'react';
import { ImageBackground, StyleSheet,View, Text,Image } from 'react-native';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require("../assets/background.jpg")}
        style = {styles.background}
        >
            <View style={styles.logoContainer}>
            <Image source={require("../assets/logo-red.png")} style={
                styles.logo
            }></Image>
            <Text>Sell What You Don't Need</Text>
            </View>
            
            <View style={styles.loginButton}>
                <Text styles={styles.textButton}> Login </Text>
            </View>
            <View style={styles.registerButton}/>

            

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center"


    },
    loginButton: {
        height: 70,
        width: "100%",
        backgroundColor: "#fc5c65",
        justifyContent:"center"
        
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
        
    },
    
    registerButton: {
        height: 70,
        width: "100%",
        backgroundColor: "#4dcec4"
        
    },
    textButton: {
        
        
    justifyContent:"space-between"

        
    },
    logo:{
        width:100,
        height:100,
        
    }
})

export default WelcomeScreen;