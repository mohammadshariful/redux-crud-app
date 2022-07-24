import React from "react";
import { useSelector } from "react-redux";

const SingleBooks = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <>
      {books &&
        books.map(({ id, author, title }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{author}</td>
            <td>
              <button className="btn btn-sm mr-2 btn-success text-white">
                Edit
              </button>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default SingleBooks;
