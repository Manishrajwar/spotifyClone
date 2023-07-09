import PlaylistView from "../Components/PlaylistView";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import cardData from "../store";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { GiPreviousButton } from "react-icons/gi";
import { BiPlayCircle } from "react-icons/bi";
import { BsPauseCircle } from "react-icons/bs";
import { GiNextButton } from "react-icons/gi";
import { CgRepeat } from "react-icons/cg";
import { Howl, Howler } from "howler";
import LoggedinContainer from "../Components/LoggedinContainer";




function Home(){
  return (
 <LoggedinContainer>
             <PlaylistView playlistTitle={"Focus"} cardData={cardData} />
             <PlaylistView playlistTitle={"Manish"} cardData={cardData} />
             <PlaylistView playlistTitle={"Dabang3"} cardData={cardData} />
 </LoggedinContainer>
  )
}
export default Home;
