import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import founderImg1 from '../../../assets/founderimg1.jpg';
import founderImg2 from '../../../assets/founderimg2.jpg';
import review1 from '../../../assets/review-1.svg';
import review2 from '../../../assets/review-2.svg';
import sideImg1 from '../../../assets/side_img1.webp';
import sideImg2 from '../../../assets/side_img2.jpg';
import './Review.css';
import ReviewImages from './ReviewImages';

const reviews = [
    {
        data: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
        name: "Kriti Goel",
        designation: "Co-Founder, P-TAL",
        image: founderImg1,
        comp_image: review1,
        side_img: sideImg1,
        box1: "Automated Invoice Reconciliation",
        box2: "Channel wise Sales Classification",
    },
    {
        data: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
        name: "Diksha Pande",
        designation: "Co-founder, Samosa Party",
        image: founderImg2,
        comp_image: review2,
        side_img: sideImg2,
        box1: "upto 95% , Demand Fulfilment",
        box2: "< 3% , Daily Stock-out",
    }
];

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='r-wrapper'>
            <div className="r-container">
                <div className="running-container">
                    <ReviewImages />
                </div>
                <div className="r-detail">
                    <div className="r-detail-left">
                        <div className="r-para">
                            <p>{reviews[currentIndex].data}</p>
                        </div>
                        <div className="detail">
                            <div className='detail-l'>
                                <img className="founder-img" src={reviews[currentIndex].image} alt={reviews[currentIndex].name} />
                                <div className="name">
                                    <h1>{reviews[currentIndex].name}</h1>
                                    <h2>{reviews[currentIndex].designation}</h2>
                                </div>
                            </div>
                            <div className="reviewimg">
                                <img className="reviewimg1" src={reviews[currentIndex].comp_image} alt="Company Logo" />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="arrow-btn" onClick={handlePrev}>
                                <FaArrowLeft />
                            </button>
                            <button className="arrow-btn" onClick={handleNext}>
                                <FaArrowRight />
                            </button>
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <h1>{reviews[currentIndex].box1.split(',')[0]}</h1>
                                <span>{reviews[currentIndex].box1.split(',')[1]}</span>
                            </div>
                            <div className="box">
                                <h1>{reviews[currentIndex].box2.split(',')[0]}</h1>
                                <span>{reviews[currentIndex].box2.split(',')[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="r-detail-right">
                        <img className="review-img" src={reviews[currentIndex].side_img} alt="Side" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
