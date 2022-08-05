import React, { useContext, useState } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { ConditionContext, ViewLocalData, SaveDataPostApi } from "../../../../contexts/codcontext"

const StepTthree = () =>{
    
    const { register } = useContext(ConditionContext)
    const [newregistro,  setNewregistro ] = useState(register)

    return(
        <View style={ styles.boxStepTwo }>
            <Text style={ styles.titleStep }>StepTthree - Info do Sistema</Text>
            <View>
                <TextInput 
                style={ styles.eleInput }
                placeholder="Informação do Sistema"
                value={ newregistro.info_aparelho }
                onChangeText={ info_aparelho => setNewregistro({...newregistro, info_aparelho})} />

                <TextInput 
                style={ styles.eleInput }
                placeholder="Cod. do Aparelho"
                value={ newregistro.code_aparelho }
                onChangeText={ code_aparelho => setNewregistro({...newregistro, code_aparelho })} />

                <View style={ styles.groupButtons}>
                    <View style={ styles.btnAction }>
                    <Button 
                            onPress={ () => SaveDataPostApi(newregistro) }                          
                            title="Save"
                            color="#8bc34a"                                       
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

export default StepTthree

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