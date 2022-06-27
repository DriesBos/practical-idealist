import { gsap } from "gsap"

export default {
  data() {
    return {
      backgroundColor: 0
    }
  },
  watch: {
    $route() {
      this.changeBackground()
    }
  },
  mounted() {
    this.changeBackground()
    this.rotateImage()
    document
      .querySelectorAll(".cursorInteract")
      .forEach(item => item.addEventListener("mouseover", this.changeCursor))
    document
      .querySelectorAll(".cursorInteract")
      .forEach(item =>
        item.addEventListener("mouseleave", this.removeChangeCursor)
      )
    document
      .querySelectorAll(".rotate")
      .forEach(item =>
        item.addEventListener("mouseleave", this.removeChangeCursor)
      )
  },
  methods: {
    changeBackground() {
      if (this.$route.name == "essays-slug") {
        document.body.style.backgroundColor = "#A3D2E1"
      } else {
        document.body.style.backgroundColor = "#F0EAE8"
      }
    },
    rotateImage() {
      let target = document.querySelector(".rotate")

      function rotatingImage(e) {
        var xPos = e.clientX / window.innerWidth - 0.5,
          yPos = e.clientY / window.innerHeight - 0.5

        gsap.to(target, 1, {
          rotationY: xPos * 100,
          rotationX: yPos * 100,
          ease: "Power1.easeOut"
        })
      }
      document.addEventListener("mousemove", rotatingImage)
    }
  }
}
