let sum = 0;
const Cart = ({cart}) => (
  <div className="well">
    <h4>Cart:</h4>
    {cart == '' ? 'Please select an Item:' : cart.map(row => {
      sum = row.price
       return (
    <p>{`Product Name: ${row.name} | Price $${row.price.toFixed(2)}`}</p>
  )})}
   <h5>Total: {sum}</h5>

</div>
);

export default Cart;
