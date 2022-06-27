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
    document
      .querySelectorAll(".cursorInteract")
      .forEach(item => item.addEventListener("mouseover", this.changeCursor))
    document
      .querySelectorAll(".cursorInteract")
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
    }
  }
}
