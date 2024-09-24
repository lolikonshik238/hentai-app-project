import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css"
import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./pages/Categories"
import PostsByCategories from "./pages/PostsByСategories";
import PostDetail from "./pages/PostDetail";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hentaiapp/:id" element={<PostDetail/>}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/categories/hentaiapp/:id" element={<PostsByCategories />}/>
          

        </Routes>
      </main>
    </div>
  );
}

export default App;
