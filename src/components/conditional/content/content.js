import React, { useContext, useState } from "react"
import { View, Text, StyleSheet, ScrollView} from "react-native"
import { ConditionContext } from "../../../contexts/codcontext"
import StepOne from "./steps/step1"
import StepTwo from "./steps/step2"
import StepTthree from "./steps/step3"


const ContentRegister = () =>{
const { register, configstep } = useContext(ConditionContext) 

// console.log("Content Register ",configstep)

    return(
        <ScrollView>
            <View style={ styles.boxFormRegister }>
                <Text>ContentRegister de registro aqui</Text>
                <StepOne default_register={register} />         
                <StepTwo default_register={register}/>
                <StepTthree default_register={register} />
            </View>
        </ScrollView>
    )
}

export default ContentRegister

const styles = StyleSheet.create({
    boxFormRegister:{
        backgroundColor:'#9996',
        padding: 5
    }
})