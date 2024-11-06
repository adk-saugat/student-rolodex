import { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.studentName;
    return (
      <div className="card-container">
        <img
          alt={`student ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=100x100`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
