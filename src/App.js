import "./App.css";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/content/Products";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const CsCenter = lazy(() => import("./pages/CsCenter"));
const Login = lazy(() => import("./pages/Login"));
const MyPage = lazy(() => import("./pages/MyPage"));
const Notify = lazy(() => import("./pages/Notify"));
const Like = lazy(() => import("./pages/Like"));
const Style = lazy(() => import("./pages/Style"));
const Shop = lazy(() => import("./pages/Shop"));
const Ranking = lazy(() => import("./pages/Ranking"));
const Luxury = lazy(() => import("./pages/Luxury"));
const Man = lazy(() => import("./pages/Man"));
const Woman = lazy(() => import("./pages/Woman"));
const Discovery = lazy(() => import("./pages/Discovery"));
const SearchRes = lazy(() => import("./pages/SearchRes"));
const Join = lazy(() => import("./pages/Join"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cscenter" element={<CsCenter />} />
          <Route path="/like" element={<Like />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/notify" element={<Notify />} />
          <Route path="/style" element={<Style />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/searchres" element={<SearchRes />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
