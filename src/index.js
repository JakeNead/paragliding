import {homeContent} from "./home.js";
import {adventuresContent} from "./adventures.js";
import {contactContent} from "./contact.js";
import './home-style.css'
import './adventures-style.css'
import './contact-style.css'

renderPage(adventuresContent)

function renderPage (page) {
    page.forEach(obj => elementBuilder(obj))
    tabEvents()
}

function elementBuilder({tag, attr, content, parent}) {
    const el = document.createElement(tag);
    if (attr !== ''){
        for (const key in attr){
            el.setAttribute(key, attr[key])
        }
        // el.classList.add(attr)
    }
    if (content !== ''){
        el.textContent = content
    }
    const parentEl = document.querySelector(`.${parent}`)
    parentEl.append(el)
}

function tabEvents () {
    const home = document.querySelector('.homeLink')
    const adventures = document.querySelector('.adventuresLink')
    const contact = document.querySelector('.contactLink')

    home.addEventListener('click', () => {
    clearPage()
    renderPage(homeContent)
    })

    adventures.addEventListener('click', () => {
    clearPage()
    renderPage(adventuresContent)
    })
    
    contact.addEventListener('click', () => {
    clearPage()
    renderPage(contactContent)
    })
}

function clearPage(){
    const content = document.querySelector('.content')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}