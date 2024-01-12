import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">
        <h2>Testimonial</h2>

        <section>
        <TestimonialCard
          name={"Swati"}
          feedback={"You have great problem solving skills!"}
        />

        <TestimonialCard
          name={"Saloni"}
          feedback={
            "You are a great DSA problem solver!"
          }
        />

        <TestimonialCard
          name={"Himanshu"}
          feedback={"Amazing! You solved more than 600 questions on Leetcode"}
        />
      </section>
        
    </div>
  )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );

export default Testimonial