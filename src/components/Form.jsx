import { v4 } from "uuid";
import axios from "axios";
const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdan verileri alma
    const title = e.target[0].value;
    const status = e.target[1].value;

    // inputu kontrol et
    if (!title) {
      return alert("Lütfen bir başlık giriniz");
    }

    // veritabanına eklenecek veriyi hazırla

    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };

    // axios
    axios
      .post("/todos", newTodo)
      // api başarılı olursa newTodoyu state e ekle
      .then(() => {
        setTodos((todos) => [...todos, newTodo]);
        e.target[0].value = "";
      })

      // başarısız olursa
      .catch(() => alert("üzgünüz bir sorun oluştu"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="ör: react projesi yap"
        className="form-control shadow"
        type="text"
      />

      <select className="form-select w-50 shadow">
        <option>Varsayılan</option>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>

      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};

export default Form;
