import React, { useEffect, useRef } from 'react';
import analysisImage from '../assets/Website-image-1.webp'; // Corrected import for Section 4
import imageOne from '../assets/world-map.png'; // Corrected import for section 5
import TestimonialCard from '../components/TestimonialCard';
import arbitragePeopleImage from '../assets/arbitrage.webp'; // Corrected: Using existing arbitrage.webp image
import SellerAmpHomepage from '../assets/one.png'; // New: Import for Hero Section image
import laptop01Image from '../assets/laptop.png'; // New: Import for Section 2 image
import phonesImage from '../assets/mobile-app.png'; // New: Import for Section 2 image
import laptop02Image from '../assets/web-app.png'; // New: Import for Section 2 image
import personWithLaptopImage from '../assets/twelve.png'; // New: Import for Section 2 image
import analysisGirlLaptopImage from '../assets/analysis.png'; // New: Import for Section 3 image
import homeVideoImage from '../assets/five.png'; 
import creditCardImage from '../assets/kk1.png'; // Placeholder for credit card image
import shoeImage from '../assets/analysis.png'; // Placeholder for shoe image
import laptopCouponsImage from '../assets/nine.png'; // Placeholder for laptop with coupons image
import treeImage from '../assets/ten.png'; // Placeholder for laptop with coupons image

import avatar1 from '../assets/avatar-1.jpeg';
import avatar2 from '../assets/avatar-2.jpeg';
import avatar3 from '../assets/avatar-3.jpeg';
import avatar4 from '../assets/avatar-4.jpeg';
import avatar5 from '../assets/avatar-5.jpeg';
import avatar6 from '../assets/avatar-6.jpeg';

// Testimonial Images
import paulSheriffsImage from '../assets/paul-sheriffs-400x401.jpeg';
// Removed placeholder image variables as they are not found and will use paulSheriffsImage as fallback

function Home() {
  const testimonials = [
    {
      image: paulSheriffsImage,
      quote: "SellerAmp SAS is our preferred sourcing tool and the one we teach new sellers on our Amazon courses. In our opinion it’s the most user-friendly and feature-rich tool on the market.",
      name: "Steve Brady",
      title: "Ecom Support Services Ltd",
    },
    {
      image: avatar1,
      quote: "Put simply I couldn’t run my 6 figure Amazon business without SAS. It’s the vital component for my buying decisions. It helps me to confidently buy stock, knowing that my figures are correct.",
      name: "Emily Knowles",
      title: "Amazon Sellers Knowledge Bank",
    },
    {
      image: avatar2,
      quote: "SAS never fails to impress me – the constant upgrades of a product that already helps my sales soar to 7 figures is a huge bonus. If you are one of the people on the fence you need to jump off it right now!",
      name: "Amanda Hill",
      title: "iDiva",
    },
    {
      image: avatar3,
      quote: "I have used SAS since I started selling on Amazon... It gives me a great piece of mind knowing that whilst I have used other pieces of software, this has been the best.",
      name: "Pedro Hunter",
      title: "Amazon seller",
    },
    {
      image: avatar4,
      quote: "Hands down the best manually sourcing tool on the market. Always developing new features and constantly improving the software. Keep up the amazing work!",
      name: "Alex Haydon",
      title: "Hampstead Homes",
    },
    {
      image: avatar5,
      quote: "Using SAS transformed our RA/OA sessions. We would never be without it and it’s a tool that has enabled us to achieve our best results to date.",
      name: "Keiran Mussell",
      title: "Hampstead Homes",
    },
    {
      image: avatar6,
      quote: "Initially I was hesitant to make the switch from another app, but now it’s become my go-to tool for all things FBA. In fact I use it on every single one of my analysis...",
      name: "Paul Sheriffs",
      title: "Amazon seller of four years",
    },
  ];

  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
//   const splitShowcaseRef = useRef(null); // New: Ref for the split showcase section
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const arbitrageSectionRef = useRef(null);
  const cashBackSectionRef = useRef(null); // New: Ref for the Cash Back section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const refs = [
      heroContentRef, heroImageRef, section2Ref, section3Ref,
      section4Ref, section5Ref, section6Ref, arbitrageSectionRef, cashBackSectionRef
    ];

    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="home-container">
      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <div className='hero-content-container animate-on-scroll' ref={heroContentRef}>
            <div className="hero-content">
            <h1>eSouct<br/>Sourcing Analysis Simplified.</h1>
            <p>Easily understand key indicators that help you profitably source products to sell on Amazon, whether doing Retail Arbitrage, Online Arbitrage or wholesale. SAS analysis helps you quickly answer the key sourcing questions:</p>
            <h3>CAN I SELL IT? DOES IT SELL? IS IT PROFITABLE?</h3>
            <div className="hero-buttons">
                <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
                  <button className="hero-button-white">Try for Trial</button>
                </a>
                <button className="hero-button-blue">Watch Demo</button>
            </div>
            </div>

        </div>
        <div className="hero-image-container animate-on-scroll" ref={heroImageRef}>
          <img src={SellerAmpHomepage} alt="SellerAmp Sourcing Analysis" className="hero-image" />
        </div>
      </section>

        {/* New Section: Split Showcase (added here) */}


        

      {/* Section 2: 3 Tools, 1 Product - New Design */}
      <section className="section-2-blue-tools animate-on-scroll" ref={section2Ref}>
        <h3>3 Tools, 1 Product</h3>
        <p>Web app, mobile app and Chrome extension enable information at your fingertips – no matter how you source. Your analysis history, settings and preferences are shared across all 3 tools, so you don’t miss a beat.</p>
        <div className="tool-cards">
          <div className="tool-card">
            <img src={laptop01Image} alt="Chrome extension" className="tool-card-image" />

          </div>
          <div className="tool-card">
            <img src={phonesImage} alt="Mobile app" className="tool-card-image" />

          </div>
          <div className="tool-card">
            <img src={laptop02Image} alt="Web App" className="tool-card-image" />

          </div>
        </div>
        <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
          <button className="free-trial-button">FREE TRIAL</button>
        </a>
        <div className="person-laptop-container">
          <img src={personWithLaptopImage} alt="Person using laptop" className="person-laptop-image" />
        </div>
      </section>

      {/* New Section: Cash Back Design */}
      <section className="section-cash-back animate-on-scroll" ref={cashBackSectionRef}>


        <div className="cash-back-visuals-container">
          <div className="cash-back-card-section">
            <img src={creditCardImage} alt="Hand holding credit card" className="cash-back-card-image" />
          </div>
          <div className="cash-back-earned-section">
            <div className="cash-back-shoe-section">
              <img src={shoeImage} alt="Adidas shoe with cash back labels" className="cash-back-shoe-image" />
              <div className="cash-back-bubble cash-back-bubble-10">10% Cash Back</div>
              <div className="cash-back-bubble cash-back-bubble-8">8% Cash Back</div>
              <div className="cash-back-bubble cash-back-bubble-2">2% Cash Back</div>
            </div>
          </div>
        </div>

        <div className="cash-back-more-info-container">
          <div className="cash-back-more-text">
            <h2>eSouct Best !? Why?</h2>
            <p>Earn on everything from clothes and electronics, to restaurants and ride-sharing. We'll find you deals on more brands, apps and services so you can shop easy.</p>
          </div>
          <div className="cash-back-laptop-section">
            <img src={laptopCouponsImage} alt="Laptop with coupons" className="cash-back-laptop-image" />
          </div>
        </div>

        <div className="cash-back-more-info-container">
          <div className="cash-back-laptop-section">
            <img src={treeImage} alt="Laptop with coupons" className="cash-back-laptop-image" />
          </div>
          <div className="cash-back-more-text">
            <h2>eSouct Best !? Why?</h2>
            <p>Earn on everything from clothes and electronics, to restaurants and ride-sharing. We'll find you deals on more brands, apps and services so you can shop easy.</p>
          </div>
        </div>

      </section>

      {/* Section 3: Comprehensive Analysis */}
      <section className="section-3-analysis-new-design animate-on-scroll" ref={section3Ref}>
        <div className='arbitrage-content-container'>
            <div className="analysis-content-left">
            <h2>Comprehensive <br/><span style={{color:'#2ea556'}}>Analysis</span> </h2>
            <p>SAS presents and organizes the information you need to make informed decisions about your Amazon sourcing. Understand all aspects of the product, sales, profitability and competition. Features include:</p>
    
            </div>
                <div className="analysis-features-right">
                <div className="analysis-points">
                    <div className='part'>
                        <h1><span>1</span> Quick Info Panel</h1>
                        <p>Fast access to data that can quickly help make your buying decision, including your maximum cost, profit and ROI.</p>
                    </div>
                    <div className='part'>
                    <h1><span>2</span> Profit Calculator</h1>
                    <p>Breakdown of cost, fees, taxes, profit and ROI. Modify the cost and sale price to instantly see the impact.</p>
                    </div>

                    <div className='part'>
                    <h1><span>3</span> Offers Listing</h1>
                    <p>Listing of other sellers, their stock levels, prices and what impact to you matching their price will have.</p>
                    </div>

                    <div className='part'>
                    <h1><span>4</span> Alerts</h1>
                    <p>Easily see if you are ungated and approved, or if there are Hazmat, Dangerous Goods, IP or PL Issues.</p>
                    </div>

                </div>
                <button className="call-to-action-button">See All Features</button>
                </div>
            </div>
        
        <div className='back-orange' style={{ position:'relative',  width:'100%' , height:'300px',bottom:'0',left:'0'}}>
            <img src={analysisGirlLaptopImage} alt="Person looking at laptop" className="girl-laptop-image" />
        </div>
      </section>

      {/* Section 4: What can SAS do? */}
      <section className="section-4-what-can-do-new-design animate-on-scroll" ref={section4Ref}>
        <div className="section-4-what-can-do-card" style={{ backgroundImage: `url(${homeVideoImage})` }}>
          <h2 style={{fontSize:'2.5rem'}}>What can SAS do?</h2>
          <p>SAS presents and organizes the information you need to make informed sourcing decisions for your Amazon sourcing. Understand all aspects of the product, sales, profitability and competition.</p>
          <div className="play-button-container">
            <div className="play-button"></div>
          </div>
          <button className="call-to-action-button">Give it a try</button>
        </div>
      </section>

      {/* Section 5: Supported Amazon Marketplaces */}
      <section className="section-5-marketplaces animate-on-scroll" ref={section5Ref}>
        <div  className='marketplaces-texts'>
            <h2>Supported Amazon  Marketplaces</h2>
            <p>Use SAS to analyze products across 7 Amazon marketplaces: US, UK, Canada, France, Spain, Germany, and Italy. With a single click you can do full analysis in other marketplaces, using local, EFN or PAN-EU fulfilment.</p>
            <a href="https://whop.com/checkout/4WjgWEt7wqNHow8b7z-xYg9-CuuR-5TT4-eLZ2SipLUXZ1/" target="_blank" rel="noopener noreferrer">
              <button className="call-to-action-button">Try for Trial</button>
            </a>
        </div>
        <div style={{width:'100%'}} >
            <div style={{width:'100%'}}>
                <img src={imageOne} alt="Amazon Marketplaces supported by eSouct" style={{width:'100%'}}></img>
            </div>
        </div>
        
      </section>

      {/* Section 6: Testimonials (Straight from our followers) */}
      <section className="section-6-testimonials animate-on-scroll" ref={section6Ref}>
        <h2>Straight from our followers</h2>
        <div className="marquee-container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`original-${index}`}
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.title}
              />
            ))}
            {/* Duplicate testimonials for a seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`duplicate-${index}`}
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Section: What is Arbitrage and Episodes */}
      <section className="what-is-arbitrage-section animate-on-scroll" ref={arbitrageSectionRef}>
        
        <div className="arbitrage-content-container">
          <div className="arbitrage-image-and-background">
            <div className="arbitrage-background-white">
            <h2 className="arbitrage-main-heading">What is Arbitrage</h2>
            </div>
            
            
          </div>
          <div className="arbitrage-episodes-and-news">
            <div className="arbitrage-episode-card">
              <span className="episode-number">EPISODE 01</span>
              <h3>Beginners Guide to Arbitrage</h3>
              <p>Learn all about Arbitrage and Selling on Amazon for free! How it can streamline your business, drive growth and increase productivity.</p>
              <button className="learn-more-button">LEARN MORE</button>
            </div>

            <div className="arbitrage-episode-card">
              <span className="episode-number">EPISODE 02</span>
              <h3>Free 6 Hour Course: How to Sell on Amazon</h3>
              <p>Learn all about Selling on Amazon for free and how to find profitable products using SellerAmp SAS.</p>
              <button className="learn-more-button">LEARN MORE</button>
            </div>
            <div style={{display:'flex',justifyContent: 'center'}}>
                <button className="news-updates-button">NEWS AND UPDATES</button>

            </div>
          </div>
        </div>
        <div className="arbitrage-background-orange">
        <img src={arbitragePeopleImage} alt="Two people giving thumbs up" className="arbitrage-people-image" />
        </div>
      </section>
    </div>
  );
}

export default Home;
