import React from 'react';
import './SingleItem.css';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//server תבנית הפריטים שהתקבלו מה
const item ={
    id: 0,
    name: "",
    image: "",//נתוב לתמונת הפריט
    siteSource: "",
    siteName: "",
    price: "",
    description: ""
}

function SingelItem(prop) {
  let currentProduct = prop.item;
  return (
    <div className="SingelItem">
      <Paper elevation={3}>
        <ImageListItem key={item.img}>
          <img
            src={`/pictures/${currentProduct.image}.jpg?w=248&fit=crop&auto=format`}
            srcSet={`/pictures/${currentProduct.image}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={currentProduct.name}
            subtitle={item.author}
          />
        </ImageListItem>
        <div>
          {/* <span>{currentProduct.price} :מחיר</span><br/> */}
          <a href="{currentProduct.siteSource}"> {currentProduct.siteSource}</a><br/>
          <button>אהבתי</button>
        </div>
      </Paper>
    </div>
  );
}

export default SingelItem;

SingelItem.propTypes = {
  item: typeof item
}
