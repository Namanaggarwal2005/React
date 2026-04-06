import Home from "./components/Home/Home"
import Layout from "./components/Layout"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import User from "./components/User/User"
import NotFound from "./components/NotFound/NotFound"
import { Route,Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
