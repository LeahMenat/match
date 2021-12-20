import React, { useState } from 'react';
import ItemDetails from './ItemDetails';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const Input = styled('input')({
  display: 'none',
});

function ChooseItem(props) {

  // const [src,setSrc]=useState(null);


    // function setItem(e) {
    //   // console.log(e.target.value.files)
    //   console.log(e.target.files)
    //   let fileInput =e.target;
    //     var files = fileInput.files;
    //     for (var i = 0; i < files.length; i++) {           
    //         var file = files[i];
    //         var imageType = /image.*/;     
    //         if (!file.type.match(imageType)) {
    //             continue;
    //         }
    //         // var img=document.getElementById("thumbnil");            
    //         // img.file = file;   
    //         props.setImgSrc(file);
    //         console.log("file: "+file);
    //         var reader = new FileReader();
    //         reader.onload = (function(aImg) { 
    //             return function(e) {
    //                 // dom.inputImage.src = e.target.result; 
    //                 // dom.btnCancelImage.classList.remove('displayNone');
    //                 //// props.setImgSrc(e.target.result);
    //                 console.log("e.target.result: "+e.target.result);
    //                 console.log("e.target: "+e.target);
    //                 // dom.thumbnil.classList.remove('displayNone');
    //             }; 
    //         })(null);
    //         reader.readAsDataURL(file);
    //     }
    // }
    // let src = "";
    const setImg = (event) => {
      props.setImgSrc(event.target.value);
      // src = event.target.value;
      // setSrc(event.target.value);
    }

  return (
    <div className="ChooseItem">
        {/* <input name="inputImage" id="inputImage" type="file" accept="image/*"  onChange={(e)=>setItem(e)} /> */}
     
        {/* <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>setItem(e)}/>
        <Button variant="contained" component="span">
          Upload
        </Button>
        </label>
      <br/> */}
      
      <TextField id="standard-basic" label="Image Source" variant="standard" onChange={setImg}/>
      {props.src?
        <div>
          <ItemDetails getRequest={props.getRequest} setX={props.setX}/>
        </div>:''
      }
       
    </div>
  );
}


export default ChooseItem;
