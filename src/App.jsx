import { useState } from 'react'
import './App.css'


function App() {

  return (<>
  <div class="lines">
   <div class="line"></div>
   <div class="line"></div>
   <div class="line"></div>
   
  </div>
    <section class="header">
    <div >
      <img class="logo" src="./assets/Logo.svg" alt="" />
    </div>

  <div class="social-icons">
  <i class="fa fa-github" ></i>
  <i class="fa fa-linkedin"></i>
  <i class="fa fa-envelope" ></i>
  <i class="fa fa-twitter" ></i>

  </div>

    </section>

<section class="content-section">
  
{/* Name section*/ }

<div class=".content-container">
   
    <div class="heading-name">
      {/*<img src="./assets/SHUDHANSHU.svg" alt="" /><br></br>
      <img src="./assets/RANJAN.svg" alt="" />*/}
      <h1 id='first-n1'>SHUDHANSHU</h1>
      <h1 id='last-n1'>RANJAN</h1>
    </div>

    <div><h2 class="thin-heading">HELPING BUSINESSES CREATE THEIR<br></br> ONLINE PRESENCE</h2></div>
    <div><h2 class="tech-stack" >DevOPS | WordPress | Shopify</h2></div>
<button class="button">contact@ranjan.com</button>

</div>
</section>
<section>

</section>

</>
  )
}

export default App
