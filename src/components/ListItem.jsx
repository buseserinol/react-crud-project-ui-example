import getStatus from "./getStatus";
import formatDate from "./FormatDate";
import axios from "axios";
import { useState } from "react";
import Content from "./Content";
import EditMode from "./EditMode";

const ListItem = ({ todo, setTodos, todos }) => {
  const [isEditMode, setIsEditMode] = useState(false);
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
  const handleEdit = (e) => {
    e.preventDefault();
    // inputlardaki verileri al
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;

    //apideki ilgili todoyu guncelle

    axios
      .patch(`/todos/${todo.id}`, { title: newTitle, status: newStatus })
      //api isteği başarılı olursa arayüzü güncelle
      .then(() => {
        //state'deki eski todoyu kaldır yerine yenisini koy

        //todonun title ve statusunu guncelle
        const updated = { ...todo, status: newStatus, title: newTitle };

        //dizideki eski todoyu kaldır yerine yenisini koy

        const newTodos = todos.map((todo) =>
          todo.id === updated.id ? updated : todo
        );
        // state guncelle

        setTodos(newTodos);
      });

    setIsEditMode(false);
  };

  return (
    <li className=" relative p-3 list-group-item d-flex justify-content-between align-items-center gap-3">
      {!isEditMode ? (
        <Content
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        <EditMode
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleEdit={handleEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
