import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './SingleItem.css'


function OneFoundDetails(props){ 
  let currentProduct = props.item;

return(
  <div>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {/* {getCategoryByKey(item.category).category + " > " + getSubCategoryByKey(item.category, item.subCategory).name} */}
        {"שלום" + " > " + "עולם"}
    </Typography>
    <Typography variant="h5" component="div">
    {/* {item.name} */}
        {currentProduct.name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    </Typography>
    <Typography variant="body2">
        <div className="desc-conteiner">
            {/* {item.details} */}
            {"פרטים בלה בלה בלהפרטים בלה בלה בלהפרטים בלה בלה בלהפרטים בלה בלה בלה"}
            {currentProduct.description}
        </div>
    </Typography>
    <br/>
    <Typography variant="body2">
    {/* {item.images[0]? (<img className="card-image" src={'images/' + item.images[0]} alt={item.images[0]}></img>):''} */}
    <img className="card-image" 
    src={`/pictures/${currentProduct.image}.jpg?w=248&fit=crop&auto=format`}
    alt={"4502231.jpg"}></img>
    </Typography>
</CardContent>
<CardActions className="button-container-left">
    {/* <ItemAdvancedDetails item={item}/> */}
     {/* <Button size="small">פרטים נוספים</Button>  */}
    {/* <Button size="small" id="btn-update-item" className="button" onClick={handleUpdateItem}>עדכון פריט</Button>
    <Button size="small" id="btn-delete-item" className="button" onClick={handleDeleteItem}>מחיקת פריט</Button> */}
    <Button size="small" id="btn-update-item" className="button"  >🤍</Button>
    
</CardActions>
</Card>
</div>
)
}
export default OneFoundDetails;
