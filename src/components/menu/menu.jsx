import './menu.css'
import Card from './MenuCards'
import pizzaImg from '../../assets/pizzaImg.svg'
import pizzarasm from '../../assets/pizza.svg'

function menu() {

  const pizzas = [
    {
      id: 1,
      name: "Italian",
      filling: "Mozzarella cheese, tomato sauce, pepperoni",
      price: 8.35,
      image: pizzaImg
    },
    {
      id: 2,
      name: "Venecia",
      filling: "Chicken, mushrooms, mozzarella cheese, olives",
      price: 7.35,
      image: pizzaImg
    },
    {
      id: 3,
      name: "Meat",
      filling: "Beef, sausage, pepperoni, mozzarella cheese",
      price: 9.35,
      image: pizzaImg
    },
    {
      id: 4,
      name: "Cheese",
      filling: "Mozzarella, cheddar, parmesan, cream cheese",
      price: 8.35,
      image: pizzaImg
    },
    {
      id: 5,
      name: "Argentina",
      filling: "Beef, onions, tomatoes, mozzarella cheese",
      price: 7.35,
      image: pizzaImg
    },
    {
      id: 6,
      name: "Gribnaya",
      filling: "Mushrooms, onions, mozzarella cheese, herbs",
      price: 6.35,
      image: pizzaImg
    },
    {
      id: 7,
      name: "Tomato",
      filling: "Fresh tomatoes, mozzarella cheese, basil",
      price: 7.35,
      image: pizzaImg
    },
    {
      id: 8,
      name: "Italian",
      filling: "Pepperoni, mushrooms, olives, mozzarella cheese",
      price: 8.35,
      image: pizzaImg
    }
  ];

  return (
    <div className='div1'>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize:'45px'}}>Menu</h1>

      <div>
        <div className='cards'>
          {pizzas.map((pizza) => (
            <Card
              key={pizza.id}
              name={pizza.name}
              filling={pizza.filling}
              price={pizza.price}
              image={pizza.image}
            />
          ))}
        </div>
      </div>

      <div className='ramsdiv' style={{ position: 'relative', width: 1000, height: 300 }}>
        <h1 style={{
          color: 'white',
          textAlign:'center',
          paddingTop:'125px'
        }}>MOST POPULAR PIZZA</h1>
      </div>
    </div>
  )
}

export default menu