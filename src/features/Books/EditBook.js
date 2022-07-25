import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./BookSlice";
const EditBook = () => {
  const { state } = useLocation();
  const [id, setId] = useState(state.id);
  const [title, setTitle] = useState(state.title);
  const [author, setAuthor] = useState(state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };
  return (
    <section className="lg:p-6 ">
      <h2 className="text-center text-xl">Edit the Book</h2>
      <div className="grid justify-center bg-white py-5 mt-2 text-black">
        <form onSubmit={handleSubmit}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-semibold">Book Title</span>
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              class="input input-bordered w-full lg:w-96 "
              required
            />
          </div>
          <div class="form-control w-full  max-w-xs">
            <label class="label">
              <span class="label-text font-semibold">Author Name</span>
            </label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              value={author}
              class="input input-bordered w-full lg:w-96"
              required
            />
          </div>
          <button className="btn btn-success text-white block w-full lg:w-96 mt-4">
            Edit Book
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditBook;
