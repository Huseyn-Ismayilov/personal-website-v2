import { Outlet } from 'react-router-dom'

// Layout
import TopHeader from './TopHeader'
import NavBar from './NavBar'

// Modal
import Contact from '../components/Contact'

// Context
import { ModalProvider } from '../context/ModalContext'


export const Layout = () => {
  return (
    <>
      <ModalProvider>
        {/* <PageTransition> */}
          <TopHeader />
          <main>
            <Outlet />
          </main>
        {/* </PageTransition> */}
        <NavBar />
        <Contact />
      </ModalProvider>
    </>
  )
}
