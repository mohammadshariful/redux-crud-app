import { Route, Routes } from "react-router-dom";
import AddBooks from "./features/Books/AddBooks";
import BooksView from "./features/Books/BooksView";
import EditBook from "./features/Books/EditBook";
import Home from "./pages/Home/Home";
import Menubar from "./pages/Shared/Menubar/Menubar";
import NotFound from "./pages/Shared/NotFound/NotFound";
function App() {
  return (
    <Menubar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Menubar>
  );
}

export default App;
