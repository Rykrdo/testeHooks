import React from "react"
import { View, StyleSheet } from "react-native"
import Registro from "./components/conditional/register"
// import { StateTeste, EffectTeste, UseRefTeste1, UseRefTeste2, UseRefTeste3, ReduceEx1, UseMemoTeste } from "./components/"

const App = () =>{  

    return(
        <View style={ styles.container }>          
            <Registro />
        </View>
    )
}

export default App
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#06bcee",
        flex: 1,     
    },
    textHeader:{
        margin:20,
        fontSize: 20,
        color: "#fff",
        fontWeight:"800",
        textAlign: "center"
    }
   

})