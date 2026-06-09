import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="box">
      
      <div className="text-zone">
        <h2>Events</h2>
        <p>
          There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!
        </p>
      </div>

      <div className="grid">
        
        <div className="card card1">
          <div className="content">
            <h3>HOW WE COOKING</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card2">
          <div className="content">
            <h3>OUR BLOG</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card3">
          <div className="content">
            <h3>TWO PIZZA FOR 1 PRICE</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card4">
          <div className="content">
            <h3>KITCHEN TOUR</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card5">
          <div className="content">
            <h3>FREE COFFEE FOR 3 PIZZA</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card6">
          <div className="content">
            <h3>OUR INSTAGRAM</h3>
            <button className="btn">More</button>
          </div>
        </div>

        <div className="card card7">
          <div className="content">
            <h3>WHERE ARE YOU CHOOSE US?</h3>
            <button className="btn">More</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Events;