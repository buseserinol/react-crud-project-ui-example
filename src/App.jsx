import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

function App() {
  const [todos, setTodos] = useState(null);
  // bileşenin ekrana basılma olayını izliyoruz.
  useEffect(() => {
    // apiden verileri alır.
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">Crud</span>
      </h2>
      <Form />

      <ul className="list-group">
        {!todos && <p className="spinner-border text-primary"></p>}
        {todos?.map((todo) => (
          // prop olarak gönderdik. hata vermemesi için benzersiz bir key oluşturduk.
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
