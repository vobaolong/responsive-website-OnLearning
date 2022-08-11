// Testimonial
function testimonial() {
  const carouselOne = document.getElementById("carouselOne")
  if (carouselOne) {
    carouselOne.addEventListener("slide.bs.carousel", function () {
      const activeItem = this.querySelector(".active")
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img")
    })
  }
}
testimonial()


// courses preview videos
function coursesPreview() {
  const coursesPreviewModal = document.querySelector(".js-course-preview-modal")
  if (coursesPreviewModal) {
    coursesPreviewModal.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play()
      this.querySelector(".js-course-preview-video").currentTime = 0
    })
    coursesPreviewModal.addEventListener("hidden.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause()
    });
  }
}
coursesPreview()

//! headermenu
function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop")
  menuCollapse = 991

  function toggleMenu() {
    menu.classList.toggle("open")
    backdrop.classList.toggle("active")
    document.body.classList.toggle("overflow-hidden")
  }
  document.querySelectorAll(".js-header-menu-toggle").forEach((item) => {
    item.addEventListener("click", toggleMenu)
  })

  backdrop.addEventListener("click", toggleMenu)

  function collapse() {
    menu.querySelector(".active .js-sub-menu").removeAttribute("style")
    menu.querySelector(".active").classList.remove("active")
  }

  menu.addEventListener("click", (event) => {
    const { target } = event
    if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapse) {
      event.preventDefault();

      if (target.parentElement.classList.contains("active")) {
        collapse()
        return
      }

      if (menu.querySelector(".active")) {
        collapse()
      }

      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
    }
  })

  window.addEventListener("resize", function () {
    if (this.innerWidth > menuCollapse && menu.classList.contains("open")) {
      toggleMenu()
    }
    if (this.innerWidth > menuCollapse && menu.classList.contains("active")) {
      collapse()
    }
  })
}
headerMenu()
//! Switcher
function SwitcherToggle() {
  const switcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function () {
    switcher.classList.toggle("open")
    this.querySelector("i").classList.toggle("fa-times")
    this.querySelector("i").classList.toggle("fa-cog")
  })
}
SwitcherToggle()

// theme color 
function themeColor() {
  const colorStyle = document.querySelector(".js-color-style"),
    themeColorContainer = document.querySelector(".js-theme-color");

  themeColorContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("js-theme-color-item")) {
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"))
      setColor()
    }
  })
  function setColor() {
    let path = colorStyle.getAttribute("href").split("/")
    path = path.slice(0, path.length - 1)
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css")

    if (document.querySelector(".js-theme-color-item.active")) {
      document.querySelector(".js-theme-color-item.active").classList.remove("active")
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active")
  }
  if (localStorage.getItem("color") !== null) {
    setColor()
  } else {
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift()
    document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active")
  }
}
themeColor()

function LightDark() {
  const darkMode = document.querySelector(".js-dark-mode")

  darkMode.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("theme-dark", "true")
    }
    else {
      localStorage.setItem("theme-dark", "false")
    }
    themeMode()
  })

  function themeMode() {
    if (localStorage.getItem("theme-dark") === "false") {
      document.body.classList.remove("dark")
    }
    else {
      document.body.classList.add("dark")
    }
  }
  if (localStorage.getItem("theme-dark") !== null) {
    themeMode()
  }
  if (document.body.classList.contains("dark")) {
    darkMode.checked = true
  }
}
LightDark()

// back to top
const topBtn = document.querySelector('.to-top-btn')
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    topBtn.classList.add('active')
  } else {
    topBtn.classList.remove('active')
  }
})