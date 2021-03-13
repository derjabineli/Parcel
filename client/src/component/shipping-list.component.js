import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const parcel = props => (
  <tr>
    <td>{props.parcel.username}</td>
    
    <td>
      <Link to={"/edit/"+props.parcel._id}>edit</Link> | <a href="#" onClick={() => { props.deleteParcel(props.parcel._id) }}>delete</a>
    </td>
  </tr>
)

export default class ParcelList extends Component {
  constructor(props) {
    super(props);

    this.deleteParcel = this.deleteParcel.bind(this)

    this.state = {Parcels}: []};
  }

  componentDidMount() {
      //
    axios.get('http://localhost:3001/')
      .then(response => {
        this.setState({ parcels: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteparcel(id) {
    axios.delete('http://localhost:3001/parcels/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      Parcels: this.state.parcel.filter(el => el._id !== id)
    })
  }

  ParcelList() {
    return this.state.parcel.map(currentparcel => {
      return <parcel parcel={currentparcel} deleteparcel={this.deleteparcel} key={currentparcel._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged parcels</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.parcelList() }
          </tbody>
        </table>
      </div>
    )
  }
}