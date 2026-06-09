import { useEffect, useState } from 'react'
import './MenuCards.css'

function MenuCards({ name, filling, price, image }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <div className='otadiv'>
            <img className='pizzaimg' src={image} alt="" />

            <h1 style={{ color: '#FFFFFF' }} className='textname'>{name}</h1>

            <p className='filling'>{filling}</p>

            <div className='divnum'>
                <h1 className='textprice'>{price}$</h1>
                <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
                <h1 style={{color:'gray'}}>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button className='order'>Order Now</button>
        </div>
    )
}

export default MenuCards