import Link from 'next/link';

let sum = 0;
const Cart = ({cart}) => (
  <div className="well">
    <h4>Cart:</h4>
    {cart == '' ? 'Please select an Item:' : cart.map(row => {
      sum += row.price;
      const selectedProducts = localStorage.setItem('products', row);
       return (
         <div>
            <p>{`Product Name: ${row.name} | Price $${row.price.toFixed(2)}`}</p>
        </div>

  )})
}
   <h5>Total: {sum}</h5>
   {cart == '' ? '': <Link passHref href="/checkout"><a>Checkout</a></Link>}

</div>
);

export default Cart;
