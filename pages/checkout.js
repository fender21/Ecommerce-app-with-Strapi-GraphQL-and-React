import Cookies from 'universal-cookie';
import Strapi from 'strapi-sdk-javascript/build/main';
import Router from 'next/router'

import Layout from '../components/Layout';

const cookies = new Cookies();
const newMap = cookies.get('allCart');
const strapi = new Strapi('http://localhost:1337');

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      city: ''
     };

    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddress(event) {
    this.setState({
      address: event.target.value
    });
  }

  handleCity(event) {
    this.setState({
      city: event.target.value
    });
  }



  async handleSubmit() {
    try {
        await strapi.createEntry('order', {
          items: newMap,
          amount:4000,
          address: this.state.address,
          city: this.state.city,
        })
        alert('Your order have been successfully submitted.')

      } catch (err) {
        //this.loading = false
        console.log(err);
        alert('An error occurred.')
      }

  }

  render() {
    console.log(newMap);
    return (
      <Layout title="User Registration">
        <table className=" col-md-4 col-md-offset-4">
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
          {newMap.map(row => {
            return (
              <tr>
                <td>{row.name}</td>
                <td>{row.price}</td>
              </tr>
            );
          })}
        </table>
        <div className="col-md-4 col-md-offset-4">
          <header>
            <h3>Order</h3>
          </header>
            <div className="form-group">
              <label>
                Address:
                <input type="text" value={this.state.address} onChange={this.handleAddress} className="form-control" autoComplete="off"/>
              </label>
            </div>

            <div className="form-group">
              <label>
                City:
                <input type="password" value={this.state.city} onChange={this.handleCity} className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <input type="button" value="Order" className="btn btn-primary" onClick={this.handleSubmit}/>
            </div>
      </div>
    </Layout>
    );
  }
}

export default Checkout;
