export default class AddToCart extends React.Component {

  state = {

  }

  _handleCart = () => {
    const items = this.props;
    return (
    console.log(items.product.name)
  );
  }
  render() {
    return(
      <div className="text-center" style={cartbtn}>
        <input
          type="button"
          className="btn btn-primary"
          value="Add to cart"
          onClick={this._handleCart}/>
      </div>
    );
  }
}

const cartbtn = {
  width:'250px',
  marginBottom:'20px'
}
