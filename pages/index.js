import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');
const Home = ({ products }) => <pre>{JSON.stringify(products, '\t', 2)}</pre>

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
  console.log('pro', products);

}

export default Home;
