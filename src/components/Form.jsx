const Form = () => {
  return (
    <form className="d-flex justify-content-center gap-3 my-5">
      <input
        placeholder="ör: react projesi yap"
        className="form-control shadow"
        type="text"
      />

      <select className="form-select w-50 shadow">
        <option>Önemli</option>
        <option>Günlük</option>
        <option>İş</option>
      </select>

      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};

export default Form;
