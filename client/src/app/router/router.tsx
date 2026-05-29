import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import CatalogPage from "../../pages/CatalogPage/СatalogPage"
import ProductPage from "../../pages/ProductPage/ProductPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}