import Link from 'next/link';

let sum = 0;
const Cart = ({cart}) => (
  <div className="well">
    <h4>Cart:</h4>
    {console.log(cart)}
    {cart !== [] ?  cart.map(row => {
      sum += row.price;
       return (
         <div key={row._id}>
            <p>{`Product Name: ${row.name} | Price $${row.price.toFixed(2)}`}</p>
        </div>
      )})
    :'Please select an Item:' }
   <h5>Total: {sum}</h5>
   {cart == '' ? '': <Link passHref href="/checkout"><a>Checkout</a></Link>}
</div>
);

export default Cart;
