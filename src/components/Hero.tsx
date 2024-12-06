import Slider from 'react-slick';
import styled from 'styled-components';
import '../App.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing Font Awesome icons

const images = [
    {
        logo: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    },
    {
        logo: "https://img.freepik.com/free-photo/vibrant-bouquet-colorful-flowers-reflects-love-nature-generated-by-artificial-intelligence_188544-150453.jpg?semt=ais_hybrid",
    },
    {
        logo: "https://tinypng.com/images/social/website.jpg",
    },
    {
        logo: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80",
    }
];

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: <FaChevronLeft />,
        nextArrow: <FaChevronRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='bg-blue-50 pt-20 md:pt-24'> {/* Add pt-32 for top padding, creates space below nav */}
            <div className="w-full">
                <StyledSlider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="tool-item p-0"> {/* Removed padding for no gap */}
                                <LogoAndName>
                                    <Logo src={image.logo} alt={`logo`} />
                                </LogoAndName>
                        </div>
                    ))}
                </StyledSlider>
            </div>
        </div>
    );
};

const StyledSlider = styled(Slider)`
    .slick-list {
        padding: 0;
        margin: 0;
        overflow: hidden;  /* Hide overflow if any */
    }

    .slick-dots {
        bottom: 0px;  /* Adjust dot position */
        z-index: 1; /* Ensure dots are above other content */
        position: relative;
        background-color: var(--blue-color); /* Set background color */
        padding: 10px 0;  /* Reduced padding for better positioning */
        border-radius: 10px;
    }

    .slick-prev, .slick-next {
        background-color: white;
        border: none;
        color: var(--teal-color);
        font-size: 2rem;
        z-index: 10; /* Ensure arrows are above the image */
        cursor: pointer;
        transition: color 0.3s ease;
        position: absolute; /* Position arrows absolutely on top */
        top: 50%; /* Center the arrows vertically */
        transform: translateY(-50%); /* Align the arrows in the center */
    }

    .slick-prev {
        left: 20px; /* Position left arrow closer to the left edge */
    }

    .slick-next {
        right: 20px; /* Position right arrow closer to the right edge */
    }

    /* Hide arrows on mobile screens */
    @media (max-width: 1024px) {
        .slick-prev, .slick-next {
            display: none !important; /* Ensure arrows are hidden */
        }

        .slick-dots {
            padding: 5px 0;  /* Reduce padding for mobile to minimize gap */
        }
    }

    /* Ensure arrows are visible on desktop */
    @media (min-width: 1024px) {
        .slick-prev, .slick-next {
            display: block !important; /* Force the arrows to show on desktop */
        }
    }

    /* Add hover effect for the arrows */
    .slick-prev:hover, .slick-next:hover {
        color: var(--blue-color); /* Or any other color you prefer */
    }
`;

const LogoAndName = styled.div`
background-color: var(--white-color);
    box-shadow: 0 8px 8px var(--teal-color);
    height: 500px; /* Fixed height for carousel */
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden; /* Hide overflow if content exceeds */
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        height: 300px; /* Reduced height for mobile view */
    }
`;

const Logo = styled.img`
    width: 100%;  /* Full width of container */
    height: 100%;  /* Full height of container */
    object-fit: cover;  /* Ensure the image covers the container without stretching */
`;

export default Hero;
