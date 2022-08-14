const browse = document.getElementById("browse-pro")
const browseTabs = document.getElementById("browse-tabs")

browse.addEventListener('mouseenter', () =>  {
    document.getElementById("browse-tabs").classList.remove("inactive")
})
browse.addEventListener('mouseleave', () =>  {
    document.getElementById("browse-tabs").classList.add("inactive")
})

browse.addEventListener('mouseover', () =>  {
    document.getElementById("browse-arrow").classList.add("arrow-sec")
    document.getElementById("browse-arrow").classList.remove("arrow")
    document.getElementById("browse-arrow").classList.remove("down")
})
browse.addEventListener('mouseleave', () =>  {
    document.getElementById("browse-arrow").classList.remove("arrow-sec")
    document.getElementById("browse-arrow").classList.add("arrow")
    document.getElementById("browse-arrow").classList.add("down")
})

browseTabs.addEventListener('mouseover', () => {
    document.getElementById("browse-tabs").classList.remove("inactive")
})
browseTabs.addEventListener('mouseleave', () => {
    document.getElementById("browse-tabs").classList.add("inactive")
})


const home = document.getElementById("logo")
const heroOne = document.getElementById("hero1")

const allSpecials = document.getElementById("all-specials")
const heroTwo = document.getElementById("hero2")

const checkersWorld = document.getElementById("checkers-world")
const heroThree = document.getElementById("hero3")

const xtraSavings = document.getElementById("xtra-savings")
const heroFour = document.getElementById("hero4")

const shopNow = document.getElementById("shop-now")
const heroFive = document.getElementById("hero5")

home.addEventListener('click', () => {
    heroOne.classList.remove("inactive")
    heroTwo.classList.add("inactive")
    heroThree.classList.add("inactive")
    heroFour.classList.add("inactive")
    heroFive.classList.add("inactive")
})

allSpecials.addEventListener('click', () => {
    heroTwo.classList.remove("inactive")
    heroOne.classList.add("inactive")
    heroThree.classList.add("inactive")
    heroFour.classList.add("inactive")
    heroFive.classList.add("inactive")
})

checkersWorld.addEventListener('click', () => {
    heroThree.classList.remove("inactive")
    heroOne.classList.add("inactive")
    heroTwo.classList.add("inactive")
    heroFour.classList.add("inactive")
    heroFive.classList.add("inactive")
})

xtraSavings.addEventListener('click', () => {
    heroFour.classList.remove("inactive")
    heroOne.classList.add("inactive")
    heroTwo.classList.add("inactive")
    heroThree.classList.add("inactive")
    heroFive.classList.add("inactive")
})


const signUp = document.querySelector(".sign-up")
const signUpSect = document.querySelector(".sign-up-section")
const modalBackground = document.querySelector(".modal-background")

signUp.addEventListener('click', () => {
    signUpSect.classList.toggle("inactive")
    modalBackground.classList.toggle("inactive")
})

// ------------------------------------------------Hero Section -----------------------------------------------------


const cancel = document.querySelector(".cancel-btn")

cancel.addEventListener('click', () => {
    signUpSect.classList.add("inactive")
    modalBackground.classList.add("inactive")
})
