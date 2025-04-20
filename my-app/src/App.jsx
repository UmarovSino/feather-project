import React from 'react'
import "./App.css"
import imgMagazin from "./assets/Vector (11).png"
import asaiding from "./assets/IMAGE (44).png"
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
      </main>
    </div>
  )
}

export default App