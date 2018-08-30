let sum = 0;
const Cart = ({cart}) => (
  <div className="well">
    <h4>Cart:</h4>
    {cart.map(row => {
      sum += row.price
       return (
    <p>{`Product Name: ${row.name} | Price $${row.price.toFixed(2)}`}</p>
  )})}
   <p>Total: {sum}</p>

</div>
);

export default Cart;
