import React, { useState } from 'react';
import './FormComponentc.css';
import '../database'
import { searchInDataBase } from '../database';
import ProductComponent from './ProductComponent';
import axios from 'axios'
const FormComponent = ({setload}) => {
  const [file, setFile] = useState(null); 
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [searchedProducts, setsearchedProducts] = useState([])
  const [input, setinput] = useState('')
  const [image, setImage] = useState("");
  const [setAuto, setsetAuto] = useState(true)
  const [apiData, setapiData] = useState({})



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    }
    console.log(selectedFile);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
    setinput(e.target.value)
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Perform submission logic here
    setSubmitted(true);
    // Reset file and file name after submission
    setFile(null);
    setFileName('');
    // Reset text input after submission
    setTextInput('');
  };


  function showProducts(e){
    e.preventDefault()
    setinput(e.target.value)
    console.log(input);
    setsearchedProducts(searchInDataBase(input))
    console.log(searchedProducts);
    
    
  }
  
  
  const sendImage = async (e)=> {
    e.preventDefault();
    console.log(image);
    
    // const res = await fetch("https://foodscore.onrender.com/extract_and_summarize", {
      //   mode : "no-cors",
      //   method: "POST",
      //   headers: {
        //     "Content-Type": "image/jpeg"
        //   },
  //   body: image
  // })
  // const json = await res.json();
  // setapiData(json)
  // console.log(apiData);
 
    try{
      const formData = new FormData();
      formData.append("image", image);
      (await axios.post("https://foodscore.onrender.com/extract_and_summarize" , formData))
      .then(res => console.log(res.data))
      
    }
    catch(error){
      console.log(error);
    }
}


  return (
    <div className="form-container">
      <h6 className='font'>Please, write product name or you can upload an ingredients list image to generate your product score</h6>
      <form onSubmit={showProducts}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Product Name or type "
            className="text-field"
            // value={textInput}
            onChange={handleTextChange}
          />
        </div>

      <div className='d-flex flex-column gap-3'>
        {
          searchedProducts.map((elem)=>(
            <div><ProductComponent data={elem}/></div>

          ))
        }
      </div>




        <div className="or-option">-OR-</div>
        <h5 className='m-5'>Upload Image</h5>

        
        <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
        <button type="submit" onClick={sendImage}>Send</button>
        






        
          
    
        
       
      </form>
    </div>
  );
};

export default FormComponent;
