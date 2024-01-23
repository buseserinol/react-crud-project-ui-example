import getStatus from "./getStatus";
import formatDate from "./FormatDate";
import axios from "axios";

const ListItem = ({ todo, setTodos }) => {
  // silme butonuna tıklanınca çalıştır
  const handleDelete = () => {
    // veriyi api'den sil
    axios
      .delete(`/todos/${todo.id}`)
      // veriyi state'den sil
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
  };

  return (
    <li className=" relative p-3 list-group-item d-flex justify-content-between align-items-center">
      {/*todo'nun durumuna göre span döndürür */}
      {getStatus(todo.status)}

      <span>{todo.title}</span>

      <div className="btn-group">
        <button className="btn btn-sm btn-primary">Düzenle</button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger ">
          Sil
        </button>
      </div>

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
