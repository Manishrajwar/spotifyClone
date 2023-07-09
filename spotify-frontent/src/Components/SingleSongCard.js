import { AiOutlineHeart } from 'react-icons/ai';
import { PiPaperPlaneRightDuotone } from 'react-icons/pi';
import { SlOptions } from 'react-icons/sl';

function SingleSongCard({info ,playSound}) {
  return (
    <div className="text-white cursor-pointer flex w-full  py-1 max-h-[60px] rounded-lg hover:bg-[#fffff722] duration-200  justify-between" onClick={()=>{
      playSound(info.track);
      
    }}>
      {/* left side */}
      <div className='flex gap-4 relative group ' >
      
        <img src={info.thumbnail}   className='py-1  pl-1 rounded-lg bg-cover w-[80px] h-[50px] bg-center' />
           <p className="absolute left-8 top-[30%] text-2xl text-white opacity-0 group-hover:opacity-100"> <PiPaperPlaneRightDuotone  /></p>
       
        <div className='flex flex-col gap-1'>
          <p className='hover:underline'>{info.name}</p>
          <p className='hover:underline text-[12px] font-semibold text-gray-400'>{`${info.artist.firstName} ${info.artist.lastName}`}</p>
        </div>
      </div>

      {/* right side */}
      <div className='flex gap-5 justify-center pr-3 items-center'>
        <i><AiOutlineHeart className='cursor-pointer text-xl' /> </i>
        <p className='cursor-default text-gray-400'>3:55</p>
        <p className='cursor-pointer text-xl'><SlOptions/> </p>
      </div>
    </div>
  );
}

export default SingleSongCard;
