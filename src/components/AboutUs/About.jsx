import './About.css'
import pizz4 from '../../assets/4pizza.svg'
import big from '../../assets/bigpizza.svg'

function About() {
  return (
    <div>
        <div style={{
          display:'flex',
          justifyContent:'space-around',
          alignItems:'center',
          flexWrap:'wrap'
        }}>
          <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <h1 style={{fontSize:'50px', color:'white'}}>About us</h1>
            <p style={{ color:'gray', width:'439px'}}>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
            <img src={pizz4} alt="" />
            <p style={{color:'gray', width:'439px'}}>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>
          </div>

          <img src={big} alt="" />
        </div>
    </div>
  )
}

export default About