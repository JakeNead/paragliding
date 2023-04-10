export { homeContent }

const homeContent = [
    {tag: 'header', attr: 'header', content: '', parent: 'content'},
    {tag: 'div', attr: 'navLinks', content: '', parent: 'header'},
    {tag: 'p', attr: 'homeLink', content: 'Home', parent: 'navLinks'},
    {tag: 'p', attr: 'adventuresLink', content: 'Adventures', parent: 'navLinks'},
    {tag: 'p', attr: 'contactLink', content: 'Contact Us', parent: 'navLinks'},
    {tag: 'div', attr: 'headerInfo', content: '', parent: 'header' },
    {tag: 'p', attr: 'headerPhone', content: '555-123-4567', parent:'headerInfo' },
    {tag: 'p', attr: 'headerAddress', content: '123 45th St. Anchorage, AK', parent:'headerInfo' },
    {tag: 'main', attr: 'main', content: '', parent: 'content'},
    {tag: 'div', attr: 'homeMain', content: '', parent: 'main'},
    {tag: 'h1', attr: 'h1Home', content: 'Paraglide Alaska', parent: 'homeMain'},
    {tag: 'h2', attr: 'cta', content: 'Come see Fairbanks from a whole new perspective!', parent: 'homeMain'},
    {tag: 'button', attr: 'contactButton', content: 'Book a flight!', parent: 'homeMain'},
]