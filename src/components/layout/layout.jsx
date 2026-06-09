import Logo from '../../assets/Logoshop.svg'
import './layout.css'
import { Link, Outlet } from 'react-router-dom'
import { RiShoppingBag4Line } from "react-icons/ri"

function Layout() {
    return (
        <div>
            <div className='ota_div'>
                <header>
                    <img src={Logo} alt="" />

                    <div style={{
                        display: 'flex',
                        gap: '80px',
                        alignItems: 'center'
                    }}>
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/about">About Us</Link>
                    </div>

                    <div className='btndiv'>
                        <button className='Login'>Log in</button>
                        <button
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#FF5D29',
                                borderRadius: '50%',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <RiShoppingBag4Line size={30} style={{ color: '#fff' }} />
                        </button>
                    </div>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
            <footer style={{
                position:'relative'
            }}>
                <img src={Logo} alt="" />
                <div style={{
                    display:'flex',
                    justifyContent:'space-around',
                    width:'739px',
                    position:'absolute',
                    left:'348px',
                    top:'74px',
                    flexWrap:'wrap'
                }}>
                    <div>
                        <h2>Home</h2>
                        <h4>To Order</h4>
                        <h4>About us</h4>
                        <h4>Events</h4>
                        <h4>Menu</h4>
                    </div>

                    <div>
                        <h2>Events</h2>
                        <h4>3 Pizza 1 Free Coffee</h4>
                        <h4>2 Pizza for 1 Price</h4>
                        <h4>Kitchen Tour</h4>
                    </div>

                    <div>
                        <h2>Menu</h2>
                        <h4>Show all</h4>
                        <h4>Seaproducts</h4>
                        <h4>Vegan</h4>
                        <h4>Meat</h4>
                    </div>

                    <div>
                        <h2>About Us</h2>
                        <h4>Our History</h4>
                        <h4>Why We?</h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout