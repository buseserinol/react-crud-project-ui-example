import React from "react";

const Buttons = ({ page, setPage, maxPageCount }) => {
  return (
    <>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary"
      >
        {"< Geri"}
      </button>
      <span>{page}</span>
      <button
        disabled={page === maxPageCount}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary"
      >
        {"> İleri"}
      </button>
    </>
  );
};

export default Buttons;
