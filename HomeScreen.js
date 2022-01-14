import React from 'react'
import { ImageBackground , View, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./app.css"
import Gamescomp from './Gamescomp';

function HomeScreen({ navigation }) {

const [ games, setGames ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)

    const image = { uri : "https://i.stack.imgur.com/uD9js.png"};
  
    useEffect(()=>{
      callgames();
      async function callgames(){
        const response = await axios.get("https://api.rawg.io/api/games",{
           params : {
               key  : "9f7e2adc537b4d91b6d0f23d3104b804"
           }
         })
         setGames(response.data.results)
         setIsLoading(false)
     }
    },[])
    return (
        <View style={styles.container}>
          {isLoading ? 
             <ActivityIndicator size="large"/>
             :
             <ImageBackground source={image} style={styles.img}>
             <ScrollView> 
               <View style={styles.ParentBody}>{games.map( (m, index) => <Gamescomp key={index} m={m}/>)}
               </View>
             </ScrollView> 
            </ImageBackground>
          }
       
       </View>
    )
}

export default HomeScreen
