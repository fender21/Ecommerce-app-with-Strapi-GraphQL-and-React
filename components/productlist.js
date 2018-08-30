import Cart from './Cart';

const root = {
  width: '100%'
};

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
  marginBottom:'20px',
  width:'80%'
}

export default class ProductList extends React.Component {
   state = {
     cart:[]
   }

  _handleCart = (items) => {
    return (
      this.setState({
        cart:this.state.cart.concat(items)
      })
    );
  }

  render() {
    const items = this.props.items;
    return(
      <div style={root} className="container">
        <Cart cart={this.state.cart} />
        {items.map(product => {
          return (
          <div key={product['_id']}  className="col-md-4">
              <img src={`http://localhost:1337/`+product['image']['url']} style={img}/>
              <p style={productName}>{product['name']} </p>
              <p style={price}>{'$'+product['price']} </p>
              <input
                type="button"
                className="btn btn-primary"
                value="Add to cart"
                onClick={this._handleCart.bind(this,product)}
                style={button}
              />
          </div>
        );
        })}
    </div>
    );
  }
}
