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
    {tag: 'div', attr: 'adventuresMain', content: '', parent: 'main'},

    {tag: 'article', attr: 'articleOne', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: '', content: '', parent: 'articleOne'},
    {tag: 'div', attr: 'textContainerOne', content: '', parent: 'articleOne'},
    {tag: 'h3', attr: 'articleTitle', content: 'something', parent: 'textContainerOne'},
    {tag: 'p', attr: 'info', content: 'Something about this deal. What to expect and who would enjoy this adventure.', parent: 'textContainerOne'},
    {tag: 'p', attr: 'price', content: '$280', parent: 'textContainerOne'},

    {tag: 'article', attr: 'articleTwo', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img1', content: '', parent: 'articleTwo'},
    {tag: 'div', attr: 'textContainerTwo', content: '', parent: 'articleTwo'},
    {tag: 'h3', attr: 'articleTitle', content: 'something', parent: 'textContainerTwo'},
    {tag: 'p', attr: 'info', content: 'Something about this deal. What to expect and who would enjoy this adventure.', parent: 'textContainerTwo'},
    {tag: 'p', attr: 'price', content: '$280', parent: 'textContainerTwo'},

    {tag: 'article', attr: 'articleThree', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img1', content: '', parent: 'articleThree'},
    {tag: 'div', attr: 'textContainerThree', content: '', parent: 'articleThree'},
    {tag: 'h3', attr: 'articleTitle', content: 'something', parent: 'textContainerThree'},
    {tag: 'p', attr: 'info', content: 'Something about this deal. What to expect and who would enjoy this adventure.', parent: 'textContainerThree'},
    {tag: 'p', attr: 'price', content: '$280', parent: 'textContainerThree'},

    {tag: 'article', attr: 'articleFour', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img1', content: '', parent: 'articleFour'},
    {tag: 'div', attr: 'textContainerFour', content: '', parent: 'articleFour'},
    {tag: 'h3', attr: 'articleTitle', content: 'something', parent: 'textContainerFour'},
    {tag: 'p', attr: 'info', content: 'Something about this deal. What to expect and who would enjoy this adventure.', parent: 'textContainerFour'},
    {tag: 'p', attr: 'price', content: '$280', parent: 'textContainerFour'},
]
// {tag: , attr: , content: , parent: }