import React, { createContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ConditionContext = createContext({})

export const SaveDataPost = async (registro) => { 
    try{
        await AsyncStorage.setItem('@register', JSON.stringify(registro))
        console.log('Registro salvo com sucesso!');
    }catch(e){
        console.log('Erro ao salvar registro');
    }    
}

export const ViewLocalData = async () =>{   
    try{
       const values = await AsyncStorage.getItem('@register')
       if(values !== null){
        console.log('Meus dados estão aqui')
        console.log(JSON.parse(values))
       }else{
        console.log('Nenhum dado encontrado!')
       }
    }catch(e){
        console.log('Error ao buscar dados')
    }
}

export const RemoveLocalRegister = async () =>{
    try {
        await AsyncStorage.removeItem('@register')
      } catch(e) {
        console.log('Error.')
      }    
      console.log('Done.')
} 

 const SaveDataPostApi = () =>{
    console.log('Salvar dados aqui')
 }

 const getLocalData = async () =>{
    // const reg = {}
     return local_register = await AsyncStorage.getItem('@register').then((res)=>{
        {
            nome: 'testes'
        }
     })

        // if(local_register !== null){
        //     setRegister(JSON.parse(local_register))
        //     console.log(JSON.parse(local_register))       
        // }else{
        //     console.log('não possui dados')
        // }

    // console.log(reg)    
    // return reg
   
    
 }

const ConditionProvider = ({children}) => {   

    const [register, setRegister ] = useState({}) 
    const [configstep, setConfigstep] = useState({ step:'stepOne', nextstep: '' })

    console.log("Reg aqui",register)

    useEffect(()=>{       
      
        const carregaDados = async () =>{
            const local_register = await AsyncStorage.getItem('@register').then((value) =>{
                const data = JSON.parse(value);             
                setRegister(data)
            })
        }       
        carregaDados()

    },[])   
   

    return(
        <ConditionContext.Provider value={{ register, configstep }}>            
            {children}  
        </ConditionContext.Provider>
    )
}

export default ConditionProvider;