import React from "react";
import SingleBooks from "./SingleBooks";
const BooksView = () => {
  return (
    <section className="lg:p-6">
      <h2 className="text-center text-xl">List of Books</h2>
      <div class="overflow-x-auto mt-2">
        <table class="table table-zebra w-full text-black">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <SingleBooks />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BooksView;
