import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Button } from 'react-native'
import { useState } from 'react'
import styles from './app.css'
import { useNavigation } from '@react-navigation/native';

export default function Gamescomp( props ) {
     
     const backImg = { uri : props.m.background_image};
     const [ info, setInfo ] = useState('')
     const navigation = useNavigation()

    return (
              
            
            <View style={styles.ChildBody}>
               <ImageBackground source={backImg} style={styles.gameImg}/>
                <Text style={styles.name}>{props.m.name}</Text>
                <Text style={styles.release}>Release date : {props.m.released}</Text>
                <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('Games', {id:props.m.slug})}>
                    <Text style={styles.lnk}>DETAILS</Text>
              </TouchableOpacity>
           
            </View>
     
        
   
    )
}