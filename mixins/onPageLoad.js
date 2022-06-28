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
      let targets = document.querySelectorAll(".rotate")

      targets.forEach(el => {
        function rotatingImage(e) {
          var xPos = e.clientX / window.innerWidth - 0.5,
            yPos = e.clientY / window.innerHeight - 0.5

          gsap.to(el, 1, {
            rotationY: xPos * 50,
            rotationX: -yPos * 50,
            ease: "Power1.easeOut"
          })

          console.log(xPos)
        }
        document.addEventListener("mousemove", rotatingImage)
      })
    }
  }
}
