import React from 'react'
import ImageSlider from '../../widgets/ImageSlider'
import Header from '../Header'
import Footer from '../Footer'

function Home() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <ImageSlider />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home