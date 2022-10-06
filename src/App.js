import { HeaderBlog } from "./components/HeaderBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetail } from "./views/BlogDetail";
import { HomePage } from "./views/HomePage";
import { Profile } from "./views/Profile";
import { LoginPage } from "./views/LoginPage";
import { LogoutPage } from "./views/LogoutPage";
import { AuthProvider, AuthRoute } from "./context/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <HeaderBlog />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detalle-blog/:slug" element={<BlogDetail />} />
              <Route path="/profile" element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              } />
            <Route path="/logout" element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
              } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
