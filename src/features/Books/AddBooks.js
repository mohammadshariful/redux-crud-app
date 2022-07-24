import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "./BookSlice";
const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <section className="lg:p-6 ">
      <h2 className="text-center text-xl">Add Your Favourite Book</h2>
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
          <button className="btn block w-full lg:w-96 mt-4">Add Book</button>
        </form>
      </div>
    </section>
  );
};

export default AddBooks;
