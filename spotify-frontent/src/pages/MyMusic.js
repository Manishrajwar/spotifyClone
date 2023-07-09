
import MyMusicComponent from "../Components/MyMusicComponent";
import LoggedinContainer from "../Components/LoggedinContainer";


function MyMusic() {

  return (
   <LoggedinContainer>
     <MyMusicComponent  />
   </LoggedinContainer>
  );
}

export default MyMusic;
