import Card from "../card/Card"
import "./CardList.css"

const CardList = ({ students }) => {
  return (
    <div className="card-list">
      {students.map((student) => {
        return <Card studentName={student} />
      })}
    </div>
  )
}
export default CardList
