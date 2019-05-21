import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'


//1.validations
//2.update => empty
//3.Cannot read property 'replace' of undefined 
//4.css does not work, then fix sticky footer
//5.gives extra empty row in the DB and front end
//6.github
//7.without refreshing page

const App = () => {
    
    return(
        <div>
            < Navbar />
            <div className = 'container'>
                < Main />
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default App