import { useEffect, useState } from 'react'
import './MenuCards.css'

function MenuCards({ name, filling, price, image }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <div className='otadiv'>
            <div className="img-container">
                <img className='pizzaimg' src={image} alt={name} />
            </div>

            <div className="card-body">
                <h1 className='textname'>{name}</h1>
                <p className='filling'>{filling}</p>

                <div className='divnum'>
                    <h1 className='textprice'>{price}$</h1>
                    <div className="counter-actions">
                        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
                        <span className="count-text">{count}</span>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>

                <button className='order'>Order Now</button>
            </div>
        </div>
    )
}

export default MenuCards