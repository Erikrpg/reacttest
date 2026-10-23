import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserProvider from "./context/UserContext";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ContactPage from "./pages/ContactPage";
import ReaderForm from "./components/ReaderForm";

export default function App() {
 

  return (
    <>
      <BrowserRouter>
        <Header />

        

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}
