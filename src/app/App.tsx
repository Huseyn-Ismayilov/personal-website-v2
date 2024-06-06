import { Routes, Route } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import { Layout } from '../layout/Layout'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
