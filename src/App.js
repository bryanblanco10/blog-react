import { HeaderBlog } from "./components/HeaderBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetail } from "./views/BlogDetail";
import { HomePage } from "./views/HomePage";
import { Profile } from "./views/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBlog />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detalle-blog/:slug" element={<BlogDetail />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
