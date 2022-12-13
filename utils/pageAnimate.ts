import { gsap } from 'gsap'
const tl = gsap.timeline()

export function imagesAnimate() {
  tl.from('#img-wrapper', {
    autoAlpha: 0,
    filter: 'blur-90',
    translateY: 50,
    duration: 0.7,
  })
}

export function aboutAnimate() {
  tl.from('#about-wrapper', {
    autoAlpha: 0,
    filter: 'blur-90',
    translateY: 50,
    duration: 0.7,
  })
}
