import React, { useContext, useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native"
import { ConditionContext, SaveDataPost, ViewLocalData, RemoveLocalRegister } from "../../../../contexts/codcontext"


const StepOne = ({default_register}) =>{
    // const { register } = useContext(ConditionContext)
    let [newregistro,  setNewregistro ] = useState(default_register)



    // useEffect(() => {
    //     setNewregistro(default_register)
    //     // console.log('Teste', default_register)
    // },[newregistrofsdf])


    return(
        <View style={ styles.boxStepOne }>             
            <Text style={ styles.titleStep }>StepOne - Informações de contato</Text>
            <View>
                <TextInput 
                style={ styles.eleInput }
                placeholder="Nome"
                value={ newregistro.nome }
                onChangeText={ nome=> setNewregistro({...newregistro, nome})} />               
           

            <TextInput 
                style={ styles.eleInput }
                placeholder="Endereço de email"
                value={ newregistro.email }
                onChangeText={email=> setNewregistro({...newregistro, email}) } />
          
            <TextInput 
                style={ styles.eleInput }
                placeholder="Telefone"
                value={ newregistro.telefone }
                onChangeText={ telefone => setNewregistro({...newregistro, telefone})} />

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
                        onPress={()=> RemoveLocalRegister() }
                        title="Remover"/>
                    </View>
                </View> 
            </View>
        </View>
    )
}

export default StepOne

const styles = StyleSheet.create({
    boxStepOne:{
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
    },
    groupButtons:{
        flexDirection: 'row',
        alignItems: "center",
        alignContent:"space-between"
    },
    btnAction:{
        margin: 5
    }
})