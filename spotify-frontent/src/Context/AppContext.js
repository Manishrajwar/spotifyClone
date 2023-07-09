import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import { Howl, Howler } from "howler";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    

   // this is for highlting the  option in slidebar 
   const [active, setActive] = useState('');
 
//  this is cookie to  store the token 
   const [cookie , setCookie , removeCookie] = useCookies(["token"]);
   

   // this useEffect is for highliting the option in slidebar
   useEffect(()=>{
       if(sessionStorage.getItem('active') !== null){
        let storedData =  sessionStorage.getItem('active');
      let activeData = JSON.parse(storedData);
      setActive(activeData);
    }
    else{
       setActive('Home')
    }
   },[]);


   // ! this is for song play 
   const [soundPlayed , setSoundPlayed] = useState(null);
   



   const playSound = (songSrc) => {
 
     if(soundPlayed){
       soundPlayed.stop();
     }
 
     var sound = new Howl({
       src: [songSrc],
       html5: true,
     });
    
     setSoundPlayed(sound);
 
     sound.play();
   };


  //  ! for get data of the my songs 
  const [songInfo ,setSongInfo] = useState([]);


  // ! get Data funtion 
  const getData = async(token)=>{
    const response = await makeAuthenticatedGETRequest("/get/mySongs" , token);
    if(!response.success){
      alert("could not fetch the songs ")
    }
    else{
      setSongInfo(response.data);
      console.log("else songInfo ",songInfo);
    }
  };

  
    const value ={

 active , 
 setActive ,
 cookie , 
 setCookie ,
 removeCookie,
 playSound,
 soundPlayed,
 setSoundPlayed,
 getData,
 songInfo , 
 setSongInfo
 
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}