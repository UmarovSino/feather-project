import React from 'react'
import "./App.css"
import imgMagazin from "./assets/Vector (11).png"
import asaiding from "./assets/IMAGE (44).png"
import imgsection from "./assets/IMAGE (45).png"
import img2 from "./assets/IMAGE (46).png"
import img3 from "./assets/IMAGE (47).png"
import Button from './component/button'
const App = () => {
  return (
    <div>
      <header>
        <nav className='nav-header'>
          <ul>
            <li>Funitary </li>
            <li>Why Feathrt </li>
            <li>Feathrt for Business</li>
          </ul>
          <h2>Feather</h2>
          <ul>
            <li>Check if We Deliver</li>
            <li>Search</li>
            <li>Acccount</li>
            <li>
              <img src={imgMagazin} alt="" />
            </li>
          </ul>
        </nav>
        <section className='curated-section'>
          <aside>
            <div className='convenien-div'>
              <h2 className='cura-ted'>
                Curated and Convenient
              </h2>
              <p className='buil-divh'>We've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”</p>
            </div>
          </aside>
          <aside>
            <img src={asaiding} className='asaidinimg' alt="" />
          </aside>
        </section>
      </header>
      <main>
        <section className='enjoy-swction'>
          <h2 className='keping-h2'>
            “Keeping Furniture in Homes and out of Landfills."
          </h2>
          <p className='keping-p'>This isn’t just another rental company - We’re elevating the future of furniture by replacing the commitment of ownership with a culture of sharing in a way that’s curated, convenient, and sustainable.</p>


        </section>
        <section className='curated-section'>
          <aside>
            <div className='convenien-div'>
              <h2 className='cura-teds'>
                Enjoy a fully furnished space in less than week
              </h2>
              <p className='buil-divhs'>Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.</p>
              <p className='explore-furniture'>Explore Furniture </p>
            </div>
          </aside>
          <aside>
            <img src={asaiding} className='asaidinimge' alt="" />
          </aside>
        </section>
        <section className='garge-section'>
          <aside>
            <img src={imgsection} alt="" />
          </aside>
          <aside>
            <h2 className='garage-sale'>Garage Sale - 40% & Up</h2>
            <p className='garage-saleopen'>Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.</p>
            <p className='terms-sale'>Terms and conditions apply.View here.</p>
            <p className='shop-now'>Shop Now</p>
          </aside>
        </section>
        <section className='curated-section'>
          <aside>
            <div className='convenien-div'>
              <h2 className='cura-teds'>
                Furniture for business, made simple.
              </h2>
              <p className='buil-divhs'>Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.</p>
              <p className='explore-furnitures'>Visit Feather For Business </p>
            </div>
          </aside>
          <aside>
            <img src={img2} className='asaidinimges' alt="" />
          </aside>
        </section>
        <section className='garge-section'>
          <aside>
            <img src={img3} alt="" />
          </aside>
          <aside>
            <h2 className='garage-sale'>Never assemble furniture again.</h2>
            <p className='garage-saleopen'>We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.</p>
            <p className='shop-now'>How Feather Works</p>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App