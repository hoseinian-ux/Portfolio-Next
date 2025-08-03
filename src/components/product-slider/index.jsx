'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useRef, useState } from 'react'
import ProductCard from '../ProductCard'

export default function ProductSlider() {
  const [products, setProducts] = useState([])
  const timer = useRef()
  const mouseOver = useRef(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      renderMode: 'performance',
      drag: true,
      slides: {
        perView: 4,
        spacing: 15,
        breakpoints: {
          '(max-width: 768px)': {
            perView: 1,
          },
          '(max-width: 1024px)': {
            perView: 2,
          },
        },
      },
      created(slider) {
        autoPlay(slider)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [
      (slider) => {
        slider.on('created', () => autoPlay(slider))
        slider.on('dragStarted', () => clearTimeout(timer.current))
        slider.on('animationEnded', () => autoPlay(slider))
        slider.on('updated', () => autoPlay(slider))
      },
    ]
  )

  function autoPlay(slider) {
    clearTimeout(timer.current)
    if (mouseOver.current) return
    timer.current = setTimeout(() => {
      slider.next()
    }, 3000)
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    {products.length > 0 && (
      <div
        ref={sliderRef}
        className="keen-slider"
        onMouseOver={() => (mouseOver.current = true)}
        onMouseOut={() => (mouseOver.current = false)}
      >
        {products.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    )}

    {/* Pagination Dots */}
    {products.length > 0 && (
      <div className="flex justify-center space-x-2 mt-6">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    )}
  </div>
)

}
