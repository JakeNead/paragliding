export { adventuresContent }

const adventuresContent = [
    {tag: 'header', attr: 'header', content: '', parent: 'content'},
    {tag: 'div', attr: 'navLinks', content: '', parent: 'header'},
    {tag: 'p', attr: 'homeLink', content: 'Home', parent: 'navLinks'},
    {tag: 'p', attr: 'adventuresLink', content: 'Adventures', parent: 'navLinks'},
    {tag: 'p', attr: 'contactLink', content: 'Contact Us', parent: 'navLinks'},
    {tag: 'div', attr: 'headerInfo', content: '', parent: 'header' },
    {tag: 'p', attr: 'headerPhone', content: '555-123-4567', parent:'headerInfo' },
    {tag: 'p', attr: 'headerAddress', content: '123 45th St. Anchorage, AK', parent:'headerInfo' },
    {tag: 'main', attr: 'main', content: '', parent: 'content'},

]