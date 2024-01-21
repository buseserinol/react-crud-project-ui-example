import getStatus from "./getStatus";
import formatDate from "./FormatDate";

const ListItem = ({ todo }) => {
  return (
    <li className=" relative p-3 list-group-item d-flex justify-content-between align-items-center">
      {getStatus(todo.status)}

      <span>{todo.title}</span>

      <div className="btn-group">
        <button className="btn btn-sm btn-primary">Düzenle</button>
        <button className="btn btn-sm btn-danger ">Sil</button>
      </div>

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
