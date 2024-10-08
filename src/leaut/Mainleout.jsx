import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import booksLogo from "../assets/image/booksLogo.svg"
import log from "../assets/image/logout.svg"
import "../App.css"

const Mainleout = ({ children }) => {
    return (
        <>
        <div className='grow'>
            <div className='bg-gray-900 backdrop-blur-xl '>
                <header className='container mx-auto max-w-7xl '>
                    <nav className='px-8 py-5 mx-auto flex justify-between'>
                        <h1 className='text-3xl text-yellow-600 font-bold cursor-pointer flex gap-3 items-center'> 
                            <img src={booksLogo} alt="books icon logao" width={48} height={48}/>
                            WorldBooks</h1>
                        <div className='flex items-center gap-10 font-semibold text-xl  text-yellow-600 '>
                            <NavLink to='/' className='  hover:text-white '>Home</NavLink>
                            <a href="#" className='  hover:text-white '>About US</a>
                            <a href="#" className='  hover:text-white '>Contact US</a>
                        </div>
                        <NavLink to='/Login' className=' bg-[linear-gradient(135deg,_#fdca10,_#fdc70c,_#f3903f,_#ed683c,_#e93e3a)] text-white py-2 px-5 text-lg font-bold rounded-md capitalize active:scale-95 flex justify-center gap-1 items-center'>Log out 
                                <img src={log} alt=" log out icon" width={35} height={35} />
                            </NavLink>
                    </nav>
                </header>

            </div>
            <div className='w-full'>
                {children}
            </div>

        </div>
            <Footer></Footer>

            </>
    )
}

export default Mainleout