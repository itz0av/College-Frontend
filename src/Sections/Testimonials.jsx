import React from 'react'
import reviews from '../Components/reviews'
import ReviewCard from '../Components/ReviewCard'
const repeatedTestimonials = Array(10) // Repeat 10 times
  .fill(reviews) // Use the original testimonials array
  .flat(); // Flatten into one big array
const Testimonials = () => {
  return (
    <div className='mb-8'>
            <div className="flex items-center justify-center">
        <h2 className="font-extrabold text-4xl">Testimonials</h2>
      </div>

      <div className=' flex flex-none max-w-full gap-6 py-9 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] animate-review'>
      {repeatedTestimonials.map((item, index) => (
          <ReviewCard key={index} name={item.name} rating={item.stars} review={item.review}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
