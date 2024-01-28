import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import axios from "axios";
import Buttons from "./components/Buttons";

axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();
  // bileşenin ekrana basılma olayını izliyoruz.
  useEffect(() => {
    // apiden verileri alır.
    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
        params: {
          _per_page: 5,
          _page: page,
        },
      })
      .then((res) => {
        console.log(res);
        setMaxPageCount(res.data.pages);
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, [page]);

  return (
    <div className="container p-3 p-md-5 ">
      <h2 className="text-center">
        Server <span className="text-warning">Crud</span>
      </h2>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos && <p className="spinner-border text-primary"></p>}
        {todos?.map((todo) => (
          // prop olarak gönderdik. hata vermemesi için benzersiz bir key oluşturduk.
          <ListItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-between my-5">
        <Buttons page={page} setPage={setPage} maxPageCount={maxPageCount} />
      </div>
    </div>
  );
}

export default App;
