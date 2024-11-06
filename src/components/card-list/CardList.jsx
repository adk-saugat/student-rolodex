import { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div className="card-list">
        {students.map((student) => {
          return <Card studentName={student} />;
        })}
      </div>
    );
  }
}
export default CardList;
