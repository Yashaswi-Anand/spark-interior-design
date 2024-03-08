import { useState, useRef } from "react";
import gsap from "gsap";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ImageListView = ({data}) => {

    const scrl = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift);

        if (Math.ceil(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };

    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        setScrollX(scrl.current.scrollLeft);
        if (Math.ceil(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    return (
        <div>
            <h3 className="m-l-20">Gallery With Real Work</h3>
            <div className="image-list-box">
                {/* {scrollX !== 0 && (
                <button
                    className="prev button"
                    onClick={() => slide(-50)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}
                >
                    <FaChevronCircleLeft style={{ color: 'black' }} />
                </button>
            )} */}
                <div className="image-list" ref={scrl} onScroll={scrollCheck}>
                    {data?.map((image, index) => (
                        <ImageCard key={index} image={image} />
                    ))}
                </div>
                {/* {!scrollEnd && (
                <button
                    className="next button"
                    onClick={() => slide(50)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}
                >
                    <FaChevronCircleRight style={{ color: 'black' }} />
                </button>
            )} */}
            </div>
        </div>
    );
};

export default ImageListView;


const ImageCard = ({ image }) => {
    return (
        <div className="image-card">
            <img src={image?.image_path} alt={image} />
            <div className="image-name" style={{color: 'black'}}>{image?.title}</div>
        </div>
    );
};

