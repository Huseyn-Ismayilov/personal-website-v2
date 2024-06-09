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
        <main className='lg:pt-10 pt-20 lg:mt-0 mt-3 lg:pb-0 pb-20'>
          <Outlet />
        </main>
        <LeftNavbar />
        <Contact />
      </ModalProvider>
    </>
  )
}
