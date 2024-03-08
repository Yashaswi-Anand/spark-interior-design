import React from 'react'
import ImageSlider from '../../widgets/ImageSlider'
import Header from '../Header'
import Footer from '../Footer'
import RealWorkDocument from './RealWorkDocument'

function Home() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <ImageSlider />
            <RealWorkDocument/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home