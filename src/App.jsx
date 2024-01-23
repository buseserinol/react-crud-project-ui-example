import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);
  // bileşenin ekrana basılma olayını izliyoruz.
  useEffect(() => {
    // apiden verileri alır.
    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
      })
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.log(err);
        if (err.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, []);

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">Crud</span>
      </h2>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos && <p className="spinner-border text-primary"></p>}
        {todos?.map((todo) => (
          // prop olarak gönderdik. hata vermemesi için benzersiz bir key oluşturduk.
          <ListItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default App;
