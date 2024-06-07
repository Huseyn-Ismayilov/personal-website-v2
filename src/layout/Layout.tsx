import { Outlet } from 'react-router-dom'

// Layout
import TopHeader from './TopHeader'
// import NavBar from './NavBar'

import LeftNavbar from './LeftNavbar'

// Modal
import Contact from '../components/Contact'

// Context
import { ModalProvider } from '../context/ModalContext'

export const Layout = () => {
  return (
    <>
      <ModalProvider>
        {/* <TopHeader /> */}
        <main className='pt-10 2xl:pl-96 lg:pl-80 2xl:pr-64'>
          <Outlet />
        </main>
        <LeftNavbar />
        <Contact />
      </ModalProvider>
    </>
  )
}
