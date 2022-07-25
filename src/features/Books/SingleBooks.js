import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";

const SingleBooks = () => {
  const { books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
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
              <button
                onClick={() => dispatch(deleteBook(id))}
                className="btn btn-sm btn-error text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default SingleBooks;
