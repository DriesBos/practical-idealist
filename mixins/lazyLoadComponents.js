import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.lazyLoadComponents()
  },
  methods: {
    lazyLoadComponents() {
      var array = document.querySelectorAll(".item")
      array.forEach(el => {
        let lazyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom"
          }
        })
        lazyTimeline.to(
          el,
          {
            opacity: 1,
            duration: 0.33,
            ease: "power2.in"
          },
          0
        )
        lazyTimeline.to(
          el,
          {
            y: 0,
            duration: 0.33,
            ease: "power2.out"
          },
          0
        )
      })
    }
  }
}
