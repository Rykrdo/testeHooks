import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ContentRegister from "../conditional/content/content"
import ConditionProvider from "../../contexts/codcontext"

const Register = () =>{

    return(
        <ConditionProvider>
            <View style={ styles.container }>            
                <Text>Componente de registro aqui</Text>
                <ContentRegister />                
            </View>
        </ConditionProvider>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})