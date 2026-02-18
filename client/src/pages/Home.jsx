
// src/pages/Home.jsx
import React from 'react'
import Banner from '../components/home/Banner';
import Hero from '../components/home/hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';



const Home = () => { 
     return (
          <div>
             <Banner />

            <Hero />

            <Features /> 
            
           <Testimonials />

           <Contact />

           <Footer />

             
          </div>
     )
}

export default Home; 





/*

import React from 'react'

const App=()=> {

     return(

         <div>

           <h1>Home Page</h1>

         </div>

     )
}

export default App

*/