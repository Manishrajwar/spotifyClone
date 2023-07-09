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


function LoggedinContainer({children}) {
  const { active, setActive, cookie , soundPlayed  , setSoundPlayed , playSound  } = useContext(AppContext);
 const [isPaused , setIsPaused] = useState(true);

 const pauseSound = ()=>{
  soundPlayed.stop();
 }

 const togglePlayPause = ()=>{
  if(isPaused){
    playSound("https://res.cloudinary.com/dn3vbnvcs/video/upload/v1688189013/p0pntkbxbpjj9jizskp6.mp3");
    setIsPaused(false);
  }else{
    pauseSound();
    setIsPaused(true);
  }
 }

  return (
    <div className="w-full h-full ">
      <div className="w-full h-[90%] flex relative overflow-x-hidden ">
        {/* left part */}
        <Slidebar cookie={cookie} active={active} setActive={setActive} />

        {/* right part music content */}
        <div className="w-screen h-[100%] bg-app-black items-center ">
          {/* navbar stick  */}
          <Navbar />

          {/* second part */}
          <div className="pl-[23%] pt-[100px] pb-[4%] pr-[3rem] w-screen min-h-[calc(100vh-65px)] h-full mb-16 flex flex-col gap-9">         
{
    children
}
       </div>
        </div>
      </div>
      {/* footer -> this is for showing current playing song   */}

      <footer className="h-[13%] w-full text-white bg-black opacity-80 fixed bottom-0 flex items-center gap-2 pr-[1rem]">
        {/* first div for image  */}
        <div className="flex gap-10 items-center w-1/4 justify-start">
          <img
            src="https://i.ytimg.com/vi/gB35UWMenfA/hqdefault.jpg"
            alt="currentSongThumbnail"
            className="w-[80px] ml-10 h-[80px] bg-cover rounded-2xl"
          />
          {/* single name */}
          <div className="flex flex-col gap-1 ">
            <p className="text-lg hover:underline cursor-pointer">judge</p>
            <p className="text-[12px] hover:underline cursor-pointer text-gray-500 font-semibold">
              mankrit
            </p>
          </div>
          {/* heart icon */}
          <i className="text-3xl cursor-pointer">
            {" "}
            <AiOutlineHeart />{" "}
          </i>
        </div>
        {/* second div for middle part */}
        <div className="w-1/2 flex  justify-center h-full text-3xl pt-4 ">

          {/*  for forward backward button */}
          <div  className="flex w-[40%] justify-between">
            <BiShuffle className="cursor-pointer text-gray-400 hover:text-white" fontSize={25} />
            <GiPreviousButton className="cursor-pointer text-gray-400 hover:text-white" fontSize={25} />

            {/* play and pause */}
            {
              isPaused?(<BiPlayCircle  className="cursor-pointer mt-[-0.5rem] text-gray-400 hover:text-white" fontSize={40} onClick={togglePlayPause} />):(<BsPauseCircle onClick={togglePlayPause} className="cursor-pointer mt-[-0.5rem] text-gray-400 hover:text-white" fontSize={40}  />)
            }
          
            


            {/* next */}
            <GiNextButton className="cursor-pointer text-gray-400 hover:text-white" fontSize={25} />

            {/* repeat */}
            <CgRepeat className="cursor-pointer text-gray-400 hover:text-white" fontSize={30} />
          </div>

          {/* for progress bar */}
          <div></div>
        </div>

        {/* third div for right part  */}
        <div className="w-1/4 flex justify-end bg-pink-400">helow</div>
      </footer>
    </div>
  );
}

export default LoggedinContainer;
