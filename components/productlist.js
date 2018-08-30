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

export default class ProductList extends React.Component {
   state = {
     cart:[]
   }

  _handleCart = (items) => {
    return (
      this.setState({
        cart:this.state.cart.concat(items),

      })
    );

  }

  render() {
    const items = this.props.items;
    return(
      <div style={root} className="container">
        <div className="well"><h4>Cart:</h4> {this.state.cart.map(row => [
          <p>{`Product Name: ${row.name} | Price $${row.price.toFixed(2)}`}</p>,
        ] )}
      </div>
        {items.map(product => {
          return (
          <div key={product['id']}  className="col-md-4">
              <img src={`http://localhost:1337/`+product['image']['url']} style={img}/>
              <p style={productName}>{product['name']} </p>
              <p style={price}>{'$'+product['price']} </p>
              <input
                type="button"
                className="btn btn-primary"
                value="Add to cart"
                onClick={this._handleCart.bind(this,product)}
              />
          </div>
        );
        })}
    </div>
    );
  }
}
