import React from 'react'
import {  Text, View, ActivityIndicator, Image, ScrollView, Linking } from 'react-native';
import { useState, useEffect } from "react"
import axios from 'axios';
import styles from './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faReddit } from '@fortawesome/free-brands-svg-icons'

  
  


export default function game( { route }) {

    

    const [ info, setInfo ] = useState('')
    const [ photo, setPhoto ] = useState('')
    const [ error, setError ] = useState('')
    const [ reddit, setReddit ] = useState('')
    const [ name, setName ] = useState('')
    
    const [ isLoading, setIsLoading ] = useState(true)

    async function GameDetails(){
        
        try {
        const response = await axios.get(`https://rawg.io/api/games/${route.params.id}`,{
           params : {
               key  : "9f7e2adc537b4d91b6d0f23d3104b804"
           }
         })
         setInfo(() => response.data.description_raw)
         setPhoto(() => response.data.background_image_additional)
         setReddit(() => response.data.reddit_url)
         setName(() => response.data)

            setIsLoading(false) 
        }catch(e){
              setError(e)
        }
        
    }

    useEffect(()=>{
          GameDetails();
          
    },[])
    
    
    function Redirect(){
        
        if(reddit.length===0){
            return setError("Opps.. There is not a link to Reddit.")
        }

        Linking.openURL(reddit)
        
    }
  
    return (
        <View>
            <Text style={styles.error}>{error}</Text>


             {isLoading ? 
                  <ActivityIndicator size="large"/> : 
                  <ScrollView>
                      <Text style={styles.title}>{name.name}</Text>
                     <View style={styles.gameInfoBody}>
                       <Image 
                          style={styles.photo}
                          source={{
                              uri : photo
                          }}
                        />
                       <Text style={styles.gameinfo}>{info}</Text>
                       <View style={styles.icons}>
                       <Text style={styles.redditTXT}>See Review on Reddit</Text><FontAwesomeIcon icon={faReddit}  size={50} onPress={Redirect} style={styles.redditlogo}/>
                           
                       </View>
                       
                     </View>
                  </ScrollView>
             
             }
  
        </View>
    )
}
