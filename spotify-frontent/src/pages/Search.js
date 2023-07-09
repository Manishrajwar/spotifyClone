import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";
import LoggedinContainer from "../Components/LoggedinContainer";


function Search() {
 
 const [searchData , setSearchData] = useState();


    const {active , setActive , cookie , setCookie , removeCookie} = useContext(AppContext);
  return (
  <LoggedinContainer>
    <input type="text" className="w-1/2 h-[40px] rounded-full mx-auto mt-10 text-black font-semibold pl-5" placeholder="Search"  onChange={(event)=>setSearchData(event.target.value)} />
  </LoggedinContainer>
  );
}

export default Search;
