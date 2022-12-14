import { gsap } from 'gsap'
const tl = gsap.timeline()

export function imagesAnimate() {
  tl.from('#img-wrapper', {
    autoAlpha: 0,
    translateY: 30,
    duration: 0.7,
  })
}

export function aboutAnimate() {
  tl.from('#about-wrapper', {
    autoAlpha: 0,
    translateY: 30,
    duration: 0.7,
  })
}

export function NotFoundAnimate() {
  tl.from('#NotFound-wrapper', {
    autoAlpha: 0,
    translateY: 30,
    duration: 0.7,
  })
}
