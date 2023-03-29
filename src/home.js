export { homePage }


function homePage () {
    const content = document.getElementById('content')
    const header = document.createElement('header')
    header.classList.add('header')
    content.append(header)

    const navLinks = document.createElement('div')
    navLinks.classList.add('navLinks')
    header.append(navLinks)

        const homeLink = document.createElement('div')
        homeLink.classList.add('home')
        homeLink.textContent = 'Home'

        const menuLink = document.createElement('div')
        menuLink.classList.add('menu')
        menuLink.textContent = 'Menu'

        const contactLink = document.createElement('div')
        contactLink.classList.add('contact')
        contactLink.textContent = 'Contact Us'

        navLinks.append(homeLink, menuLink, contactLink)

    const h1 = document.createElement('h1')
    h1. textContent = 'Paragliding'
    header.append(h1)

    const headerInfo = document.createElement('div')
    headerInfo.classList.add('headerInfo')
    header.append(headerInfo)

    const phone = document.createElement('p')
    phone.classList.add('headerPhone')
    phone.textContent = '555-123-4567'
    const address = document.createElement('p')
    address.classList.add('headerAddress')
    address.textContent = "987 65th St. Sitka, AK"
    headerInfo.append(phone, address)

    const main = document.createElement('main')
    content.append(main)
}


// const newElement = (el, att, cont) => {
//     const element = document.createElement(el)
//     element.setAttribute('class', att)
//     element.textContent = cont
//     return element
// }