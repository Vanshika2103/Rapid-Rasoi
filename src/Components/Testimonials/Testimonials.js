import "./Testimonials.css";
import { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "RapidRasoi transformed our canteen, making ordering quick, easy, and efficient. It saved our time too.",
      name: "@Ajit-Sharma",
      college: "JSS Mysuru",
      avatar: "avatar-1",
    },
    {
      text: "I used to pay inflated prices on Zomato & Swiggy, RapidRasoi saved me 2,000+ rupees in a month.",
      name: "@Mohasin-Haque",
      college: "IIT Kharagpur",
      avatar: "avatar-2",
    },
    {
      text: "No more standing in queues. I finish my work and go to pick up my food and get it instantly. Saves SO much time!",
      name: "@Harishchand-Gupt",
      college: "NIT Agartala",
      avatar: "avatar-3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="testimonial-first-section mt-3 ml-3 mr-3">
        <div className="testimonial-texts ml-2">
          <h2>Testimonials</h2>
          <h1 className="mb-2 mt-1">Hear What Users Say About RapidRasoi</h1>
          <p>
            RapidRasoi users share their experiences and stories about the app
          </p>
        </div>
        <div className="testimonial-image"></div>
      </section>

      <section className="testimonial-second-section mr-2 ml-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`sectional-box ${
              index === currentIndex ? "active" : "inactive"
            }`}
          >
            <h1 className="quote-sign">"</h1>
            <p>{testimonial.text}</p>
            <main className="flex avatar-image">
              <p className="flex-col">
                <span>
                  <i>{testimonial.name}</i>
                </span>
                <small>{testimonial.college}</small>
              </p>
              <p className={`${testimonial.avatar} ml-auto`}>
                <span className="verified-tick"></span>
              </p>
            </main>
          </div>
        ))}
      </section>

      <div className="slider-buttons">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={index === currentIndex ? "active" : ""}
          ></button>
        ))}
      </div>
    </>
  );
};

export { TestimonialSection };
