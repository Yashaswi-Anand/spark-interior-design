import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images_1 from '../components/assets/images/slidera.jpeg'
import images_2 from '../components/assets/images/sliderb.jpeg'
import images_3 from '../components/assets/images/sliderc.jpeg'
const ImageSlider = () => {
    const images = [{
        image_path: images_1,
        message: 'Imagine Design Reality'
    }, {
        image_path: images_2,
        message: 'Design With Effective Cost'
    },
    {
        image_path: images_3,
        message: 'Consult Our Designer',
        button_text: 'Consult Now'
    }]

    return (
        <div>
            <Carousel
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                interval={2500}
                transitionTime={500}
            >
                {images.map((image) => (
                    <div style={{ height: '89vh' }}>
                        <img src={image.image_path} alt="No images" />
                        <div className="image-message-box">
                            <p className="image-message">{image.message}</p>
                            {image?.button_text && <button className="button button-on-image">{image?.button_text}</button>}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider