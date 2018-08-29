import Strapi from 'strapi-sdk-javascript/build/main';
import ProductList from '../components/productlist';
import Layout from '../components/Layout';

const strapi = new Strapi('http://localhost:1337');
const Home = ({ products }) => (
  <Layout title="Store Home">

    <ProductList items={products.data.products} />
  </Layout>
)

Home.getInitialProps = async () => {
  const products = await strapi.request('post', '/graphql', {
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

  return {
    products
  }

}

export default Home;
