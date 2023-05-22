import { Route, Router, Switch } from "react-router-dom"
import "./App.css"
import Header from "./components/common/header/Header"
import Pages from "./components/pages/Pages"
import Home from "./components/home/Home"
import DetialNews from "./components/detial/news_detial"
import CategoryDetial from "./components/category/categoryDetial"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Blog from "./components/blog/Blog"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

function App () {
  return <Pages/>
}

export default App
