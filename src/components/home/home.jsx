import './home.css'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'

function home() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap:'wrap'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left'
                }}>
                    <h1>The Fastest Pizza Delivery</h1>
                    <p>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span style={{ color: 'white' }}>pizza is free!</span></p>
                    <p>Cooking process:</p>
                    <img src={img1} alt="" />
                </div>
                <div style={{ position: 'relative', width: '470px' }}>
                    <img className='img1' src={img2} alt="" />
                    <img className='fries' src={img3} alt="" />
                    <img className='pizza' src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default home