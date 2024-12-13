const burgerImage = document.querySelector(".burger-meny")
const burgerLink = document.querySelector(".main-header__link")

burgerImage.addEventListener("click", () => {
  burgerLink.classList.toggle("_active")
  burgerImage.classList.toggle("_active")
})
