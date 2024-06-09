import { Outlet } from 'react-router-dom'

// Navbar
import LeftNavbar from './LeftNavbar'

// Modal
import Contact from '../components/Contact'

// Context
import { ModalProvider } from '../context/ModalContext'

export const Layout = () => {
  return (
    <>
      <ModalProvider>
        <main className='lg:pt-10 pt-20 lg:mt-0 mt-3 2xl:pl-96 lg:pl-80 2xl:pr-64'>
          <Outlet />
        </main>
        <LeftNavbar />
        <Contact />
      </ModalProvider>
    </>
  )
}
