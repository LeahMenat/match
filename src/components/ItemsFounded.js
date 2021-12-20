import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem';
import axios from 'axios';
import Box from '@mui/material/Box';
import FromSara from './FromSara';
import OneFoundDetails from './OneFoundDetails'
import './ItemFounded.css'

// import props.products from '../assets/props.products.json'

function ItemsFounded(props) {
  

  return (
    // <div className="ItemsFounded">
    //נכון!!!!!!!!!!!
    // {/* אם קיים מוצרים תציג אותם */}
    // {props.items?
    //   <ul>
    //     {props.items?props.items.map((p, index) => (
    //       <li>
    //         {<SingleItem item={p} key={index}/>}
    //       </li>
    //     )): []}
    //   </ul>
    //   :console.log("no! "+props.items)} 
    // </div>

    <div>
    {/* // זמני..... */}
    {props.products?
    // <ul>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
       {props.products?props.products.map((p, index) => (
          // <li>{
            // <SingleItem item={p} key={index}/>
            // <FromSara item ={p} key = {index}/>
            <OneFoundDetails item ={p} key = {index}/>
          //} </li>
         )): []}
         </Box>
      //  </ul>
       :''
    }
    </div>

  );
}

export default ItemsFounded;
