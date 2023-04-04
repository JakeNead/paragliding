import {homePage} from "./home.js";
import {adventuresPage} from "./adventures.js";
import {contactPage} from "./contact.js";
import './style.css'

homePage()
tabSwitch()

function tabSwitch () {
    const home = document.querySelector('.homeLink')
    const adventures = document.querySelector('.adventuresLink')
    const contact = document.querySelector('.contactLink')

    home.addEventListener('click', () => {
    clearPage()
    homePage()
    })
    adventures.addEventListener('click', () => {
    clearPage()
    adventuresPage()
    })
    contact.addEventListener('click', () => {
    clearPage()
    contactPage()
    })
}

function clearPage(){
    const content = document.querySelector('.content')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}