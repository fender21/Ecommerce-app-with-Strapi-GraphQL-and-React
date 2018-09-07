import Cart from './Cart';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart:[] || this.props.items
    }

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
    cookies.set('allCart', this.state.cart, { path: '/' });
    console.log(this.state.cart);
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
