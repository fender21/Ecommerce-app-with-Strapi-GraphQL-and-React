import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

import ProductList from '../components/productlist';

class App extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      productLists : {},
      productItems : []
    }
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

async fetchProducts() {
  const strapi = new Strapi('http://localhost:1337');
  const response = await strapi.request('post', '/graphql', {
    data: {
      query: `query {
          products {
            _id
            name
            price
            description
            image {
              url
            }
          }
        }
        `
    }
  })
  const productLists = response.data;

  let allProducts = Object.entries(productLists);
  for (const items of allProducts) {
    let productItems = items[1];
    this.setState({productItems})
  }

}

addToCart(e) {
  console.log(e);
}

  render() {
    return (
      <div>
        <ProductList items={this.state.productItems} addToCart={this.addToCart}/>
      </div>
    )
  }
}

export default App;
