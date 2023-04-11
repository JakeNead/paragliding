export { homeContent }

const homeContent = [
    {tag: 'header', attr: {class:'header'}, content: '', parent: '.content'},
    {tag: 'div', attr: {class:'navLinks'}, content: '', parent: '.header'},
    {tag: 'p', attr: {class:'homeLink'}, content: 'Home', parent: '.navLinks'},
    {tag: 'p', attr: {class:'adventuresLink'}, content: 'Adventures', parent: '.navLinks'},
    {tag: 'p', attr: {class:'contactLink'}, content: 'Contact Us', parent: '.navLinks'},
    {tag: 'div', attr: {class:'headerInfo'}, content: '', parent: '.header' },
    {tag: 'p', attr: {class:'headerPhone'}, content: '555-123-4567', parent:'.headerInfo' },
    {tag: 'p', attr: {class:'headerAddress'}, content: '123 45th St. Anchorage, AK', parent:'.headerInfo' },
    {tag: 'main', attr: {class:'main'}, content: '', parent: '.content'},
    {tag: 'div', attr: {class:'homeMain'}, content: '', parent: '.main'},
    {tag: 'h1', attr: {class:'h1Home'}, content: 'Paraglide Alaska', parent: '.homeMain'},
    {tag: 'h2', attr: {class:'cta'}, content: 'Come see Fairbanks from a whole new perspective!', parent: '.homeMain'},
    {tag: 'button', attr: {class:'contactButton'}, content: 'Book a flight!', parent: '.homeMain'},
]