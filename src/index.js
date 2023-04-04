import {homePage} from "./home.js";
import {adventures} from "./adventures.js";
import {contact} from "./contact.js";
import './style.css'
import background from './assets/images/homeBackground.jpg'

homePage()


function hyperlinks () {
    const home = document.querySelector('.homeLink')
    const adventures = document.querySelector('.adventuresLink')
    const contact = document.querySelector('.contactLink')

    home.addEventListener('click', () => 
    clearPage(),
    home())
    adventures.addEventListener('click', () => 
    clearPage(),
    adventures())
    contact.addEventListener('click', () =>
    clearPage(),
    contact())
}


// function clearPage(){
//     const content = document.querySelector('#content')
//     while (content.firstChild) {
//         document.removeChild(content.firstChild)
//     }
// }




// paragliding site with home/adventures/contact us 