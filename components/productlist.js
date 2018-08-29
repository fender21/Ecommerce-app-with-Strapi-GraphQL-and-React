import AddToCart from './AddToCart';
const root = {
  width: '100%'
};
const box = {
  width: '30%',
  marginRight: '1px',
  float:'left'
}
const img ={
  width:'250px',
  height:'200px',
  padding:'5px',
  border:'3px solid #ddd'
}

const price = {
  color:'red',
  textAlign:'center',
  width: '70%',
  marginTop:'-10px'
}

const productName = {
  textAlign:'center',
  width: '60%',
}

const button= {
  float:'right'
}

const ProductList = ({ items, handleCart }) => (

  <div style={root}>
    {items.map(product => {
      return (
      <div key={product['id']} style={box}>
          <img src={`http://localhost:1337/`+product['image']['url']} style={img}/>
          <p style={productName}>{product['name']} </p>
          <p style={price}>{'$'+product['price']} </p>
          <AddToCart product={product} />

      </div>
    );
    })}
</div>
);

export default ProductList;
