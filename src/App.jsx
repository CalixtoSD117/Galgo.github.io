import { useState, useEffect } from 'react'
import { About, Alianzas, Contact, Footer, Modal, Navbar, Principal, ScrollUp, Services } from './components'
import { RiArrowRightSLine } from "react-icons/ri";
import NavCell from './components/NavCell';
import PuffLoader from "react-spinners/PuffLoader";
import { galgo_logo, galiso } from './assets';
import { Toaster } from 'react-hot-toast';

const App = () =>
{

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [loading, setloading] = useState(false)

  useEffect(() =>
  {
    setloading(true)
    setTimeout(() =>
    {
      setloading(false)
    }, 1000)

  }, [])


  const [menuopen, setmenuopen] = useState(false)

  const openMenu = () =>
  {
    setmenuopen(!menuopen)
  }

  return (
    <div >
      {
        loading ?
          <div className='flex justify-center items-center h-[100vh] w-full '>
            <PuffLoader
              color={'#958F8F'}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div className='absolute'>
              <img className='w-[45px] md:w-[60px]' src={galiso} alt="" />
            </div>
          </div>
          :
          <div id='inicio'>
            <ScrollUp/>
            <NavCell scrolling={scrolling} menuopen={menuopen} menu={openMenu} />
            <div>
              <Navbar scrolling={scrolling} menu={openMenu} menuopen={menuopen} />
            </div>
            <div className=''>
              <Principal />
            </div>
            <div className='' id='sobre-nosotros'>
              <About />
            </div>
            <div>
              <Alianzas />
            </div>
            <div className='' id='nuestros-servicios'>
              <Services />
            </div>
            <div className='' id='contacto'>
              <Contact />
            </div>
            <div className=''>
              <Footer />
            </div>
            <Toaster
              position="top-right"
              reverseOrder={false}
            />
          </div>
      }


    </div>
  )
}

export default App