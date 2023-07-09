import { useState } from "react";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { useContext } from "react";
import InputField from "../Components/InputField";
import { AppContext } from "../Context/AppContext";
import CloudinaryUpload from "../Components/CloudinaryUpload";
import { useEffect } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper"
import { useNavigate } from "react-router-dom";
import LoggedinContainer from "../Components/LoggedinContainer";

function UplaodSong() {
  const { active, setActive , cookie , setCookie , removeCookie } = useContext(AppContext);
    const navigate = useNavigate();
 const [formData , setFormData] = useState({
    name:"",
    thumbnail:"",
    track:""
})

    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedFileSongName, setUploadedFileSongName] = useState();



  //   ! any changes in input field handler
  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      track: playlistUrl
    }));
  }, [playlistUrl]);

//   ! submit handler
async function submitHandler(event){
    event.preventDefault();
    const token = cookie.token;
       const response = await makeAuthenticatedPOSTRequest("/song/create" ,formData , token);
       if(!response.success ){
        alert("could not create song");
       }
       else{
        alert('success');
        navigate("/home")
       }
}

  return (
  <LoggedinContainer>
    <p className="text-white font-bold text-3xl cursor-default">
            Upload Your Music
          </p>
          <div className="flex gap-4">

            {/* two input field  */}
            <label htmlFor="name" className="text-white font-semibold">
              Name
        <InputField formData={formData} changeHandler={changeHandler} name={'name'} placeholder={'Name'} value={formData.name} />
            </label>

            <label htmlFor="thumbnail" className="text-white font-semibold">
              Thumbnail
              <InputField formData={formData} changeHandler={changeHandler} name={'thumbnail'} placeholder={'Thumbnail'} value={formData.thumbnail} />
            </label>


          </div>
          <div>
            <CloudinaryUpload
              setPlaylistUrl={setPlaylistUrl}
              setUploadedFileSongName={setUploadedFileSongName} uploadedFileSongName={uploadedFileSongName}
            />
          </div>
          <div>
            <button className="text-white bg-black px-4 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300" onClick={submitHandler}>Submit</button>
          </div>
  </LoggedinContainer>
  );
}

export default UplaodSong;
