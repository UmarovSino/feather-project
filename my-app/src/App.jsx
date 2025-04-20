import React from 'react'
import "./App.css"
import imgMagazin from "./assets/Vector (11).png"
import asaiding from "./assets/IMAGE (44).png"
import imgsection from "./assets/IMAGE (45).png"
import img2 from "./assets/IMAGE (46).png"
import img3 from "./assets/IMAGE (47).png"
import img4 from "./assets/IMAGE (48).png"
import img5 from "./assets/IMAGE (49).png"
import img6 from "./assets/IMAGE (50).png"
import img7 from "./assets/IMAGE (51).png"
import img8 from "./assets/IMAGE (52).png"
import img9 from "./assets/Frame (24).png"
import img10 from "./assets/Frame (25).png"
import img11 from "./assets/Frame (26).png"
import img12 from "./assets/Frame (27).png"
import img13 from "./assets/Frame (28).png"
import img14 from "./assets/Frame (22).png"
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
        <section className='best-seller'>
<h2 className='best-seller'>Shop our Bestsellers</h2>
<div className='all-articlesection'>
  <article className='cooper-article'>
    <img src={img4} alt="" />
    <h2 className='dinig'>Cooper Dining Table</h2>
    <p className='rent-forsale'>rent for <span className='spann'>$15</span>/mo</p>
    <p className='diniger'>or buy for <span className='spannn'>$359</span></p>
    <p className='dollar'>$314</p>
  </article>
  <article className='cooper-article'>
    <img src={img5} alt="" />
    <h2 className='dinig'>Croft Media Console</h2>
    <p className='rent-forsale'>rent for <span>$35</span>/mo</p>
    <p className='diniger'>or buy for <span className='spannn'>$839</span></p>
    <p  className='dollar'>$739</p>
  </article>
  <article className='cooper-article'>
    <img src={img6} alt="" />
    <h2 className='dinig'>Essex Dining Chair</h2>
    <p className='rent-forsale'>rent for <span>$18</span>/mo</p>
    <p className='diniger'>or buy for <span className='spannn'>$429</span></p>
    <p  className='dollar'>$379</p>
  </article>
  <article className='cooper-article'>
    <img src={img7} alt="" />
    <h2 className='dinig'>Ludlow Sofa</h2>
    <p className='rent-forsale'>rent for <span className='spannn'>$52</span>/mo</p>
    <p className='diniger'>or buy for <span>$1249</span></p>
    <p  className='dollar'>$1099</p>
  </article>
</div>
<h2 className='furniture'>Shop All Furniture</h2>
        </section>
        <section className='foother-section'>
<aside><img src={img8} alt="" /></aside>
<aside className='floyd-asaid'>
  <p className='feather-p'>feather x Floyd</p>
  <h2 className='metts-h2'>Floyd Furniture Meets Feather Flexibility</h2>
</aside>
        </section>




        <section class="reviews-section">
  <h2 class="reviews-title">The Reviews are In</h2>
  <div class="reviews-container">
    <div class="review-card border-pink">
      <div class="stars">⭐⭐⭐✩✩</div>
      <p>Honestly BEST EXPERIENCE moving ever.</p>
      <p class="author">• Julie, San Francisco, CA</p>
    </div>
    <div class="review-card border-yellow">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>Extremely easy! Browsed for furniture and it was in my new apartment within a week.</p>
      <p class="author">• Anthony, Los Angeles, CA</p>
    </div>
    <div class="review-card border-teal">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>THIS JUST MAKES SENSE. Truly obsessed with Feather.</p>
      <p class="author">• Wesley, New York City, NY</p>
    </div>
  </div>
</section>




<section className='moving-secetion'>
<h2 className='apartment-h2'>Ease the pain of moving from apartment to apartment.</h2>
<div className='all-imgdiv'>
  <img src={img9} alt="" />
  <img src={img10} alt="" />
  <img src={img11} alt="" />
  <img src={img12} alt="" />
  <img src={img13} alt="" />
</div>
</section>
<section className='furnish-section'>
<img src={img14} className='img14' alt="" />
<h2 className='featherstress-sectionh2'>Feather is the stress-free way to furnish your home</h2>
</section>

      </main>
    </div>
  )
}

export default App