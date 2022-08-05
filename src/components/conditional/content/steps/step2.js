import React, { useContext, useState } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { ConditionContext, SaveDataPost, ViewLocalData } from "../../../../contexts/codcontext"

const StepTwo = () =>{
    
    const { register } = useContext(ConditionContext)
    const [newregistro,  setNewregistro ] = useState(register)

    return(
        <View style={ styles.boxStepTwo }>
            <Text style={ styles.titleStep }>StepTwo - Dados de endereço</Text>
            <View>
                <TextInput 
                style={ styles.eleInput }
                placeholder="Logradouro"
                value={ newregistro.logradouro }
                onChangeText={(ele_text)=>{ console.warn(ele_text) }} />

            <TextInput 
                style={ styles.eleInput }
                placeholder="Estado"
                value={ newregistro.estado }
                onChangeText={(ele_text)=>{ console.warn(ele_text) }} />

            <TextInput 
                style={ styles.eleInput }
                placeholder="Cidade"
                value={ newregistro.cidade }
                onChangeText={(ele_text)=>{ console.warn(ele_text) }} />

            <TextInput 
                style={ styles.eleInput }
                placeholder="Cep"
                value={ newregistro.cep }
                onChangeText={(ele_text)=>{ console.warn(ele_text) }} />

                <View style={ styles.groupButtons}>
                    <View style={ styles.btnAction }>
                    <Button 
                            onPress={ () => SaveDataPost(newregistro) }                          
                            title="Save"
                            color="#8bc34a"
                            accessibilityLabel="Learn more about this purple button"                
                        />
                    </View>
                    <View style={ styles.btnAction }>
                        <Button
                        title="Visualizar"
                        color="#777"
                        onPress={() => ViewLocalData() } />
                      
                    </View>
                    <View style={ styles.btnAction }>
                        <Button
                        color="#e23"
                        title="Remover"/>
                    </View>
                </View> 
            </View>
        </View>
    )
}

export default StepTwo

const styles = StyleSheet.create({
    boxStepTwo:{   
        backgroundColor:'#fff',
        padding: 20,
        margin: 20,
        borderRadius: 10
    },
    titleStep:{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#536'
    },
    eleInput:{
        paddingLeft: 10,
        paddingRight: 10,
       paddingBottom: 2,
       paddingTop: 2,
        backgroundColor: '#ccc7',
        marginBottom: 10,
        borderRadius: 20
    }, groupButtons:{
        flexDirection: 'row',
        alignItems: "center",
        alignContent:"space-between"
    },
    btnAction:{
        margin: 5
    }
})