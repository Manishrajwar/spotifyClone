import { useContext } from "react";
import SingleSongCard from "./SingleSongCard";
import { AppContext } from "../Context/AppContext";
import { useEffect } from "react";

  function MyMusicComponent(){

const {playSound ,getData ,cookie , songInfo} = useContext(AppContext);

useEffect(() => {
     const token = cookie.token;
     if(token){
    getData(token); 
     }
   }, [cookie.token]);

    return (
        <div className="w-full h-full">
           <p className="text-white font-bold text-3xl cursor-default hover:underline mb-6">My Music</p>
           <div className=" flex flex-wrap w-[calc(100%)] min-h-[calc(100%-90px)] max-h-full gap-10">
       
            {   
                songInfo.map((info , index)=>{
                    return (
                        <SingleSongCard playSound={playSound} key={index} info={info} />
                    )
                })
            }
           
           </div>
        </div>
    )
}

export default MyMusicComponent;