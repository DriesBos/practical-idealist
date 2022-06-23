import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      backgroundColor: 0
    }
  },
  watch: {
    $route() {
      this.changeBackground()
      // this.setFirstSectionMargin()
      // this.changeFavicon()
    }
  },
  mounted() {
    this.changeBackground()
    // this.rotateElement()
    // this.scrollSlow()
    // this.scrollFast()
    // this.scrollHorizontal()
  },
  methods: {
    changeBackground() {
      if (this.$route.name == "blog-slug") {
        document.body.style.backgroundColor = "#A3D2E1"
      } else {
        document.body.style.backgroundColor = "#F0EAE8"
      }
    },
    scrollSlow() {
      setTimeout(function() {
        var targets = document.querySelectorAll(".scrollSlow")
        targets.forEach(el => {
          gsap.to(el, {
            y: window.innerHeight,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "bottom top"
            }
          })
        })
      }, 200)
    },
    scrollFast() {
      setTimeout(function() {
        var titles = document.querySelectorAll(".scrollFast")
        titles.forEach(el => {
          gsap.to(el, {
            y: -window.innerHeight,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "bottom top"
            }
          })
        })
      }, 200)
    },
    scrollHorizontal() {
      setTimeout(function() {
        var viewportWidth = window.innerWidth
        var array = document.querySelectorAll(".scrollHorizontal")
        array.forEach(el => {
          let horizontalTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
              ease: "none"
            }
          })
          horizontalTimeline.set(el, {
            x: 0
          })
          horizontalTimeline.to(el, {
            x: -viewportWidth
          })
        })
      }, 200)
    },
    rotateElement() {
      setTimeout(function() {
        var body = document.body,
          html = document.documentElement
        var height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        )
        // Calc number of rotations
        var rotations = height / (window.innerHeight * 3)
        var container = document.querySelector("main")
        // Scrolltrigger animation
        var array = document.querySelectorAll(".rotate")
        array.forEach(el => {
          let rotateTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              scrub: 0,
              start: "top top",
              end: "bottom bottom",
              ease: "none"
            }
          })
          rotateTimeline.to(el, {
            rotation: 360 * rotations,
            ease: "none"
          })
        })
      }, 200)
    }
  }
}
