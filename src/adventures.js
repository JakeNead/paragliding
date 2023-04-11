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
    {tag: 'img', attr: 'img1', content: '', parent: 'articleOne'},
    {tag: 'div', attr: 'textContainerOne', content: '', parent: 'articleOne'},
    {tag: 'h3', attr: 'articleTitle', content: 'Tandem Flights', parent: 'textContainerOne'},
    {tag: 'p', attr: 'info', content: 'For those who want to experience the thrill of paragliding without the responsibility of flying themselves, a tandem flight is a great option.', parent: 'textContainerOne'},
    {tag: 'p', attr: 'price', content: '$280', parent: 'textContainerOne'},

    {tag: 'article', attr: 'articleTwo', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img2', content: '', parent: 'articleTwo'},
    {tag: 'div', attr: 'textContainerTwo', content: '', parent: 'articleTwo'},
    {tag: 'h3', attr: 'articleTitle', content: 'Solo Flights', parent: 'textContainerTwo'},
    {tag: 'p', attr: 'info', content: 'If you\'re interested in learning how to safely paraglide on your own, we\'ll teach you how to launch, control, and land the paraglider in our two-day intro course.', parent: 'textContainerTwo'},
    {tag: 'p', attr: 'price', content: '$900', parent: 'textContainerTwo'},

    {tag: 'article', attr: 'articleThree', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img3', content: '', parent: 'articleThree'},
    {tag: 'div', attr: 'textContainerThree', content: '', parent: 'articleThree'},
    {tag: 'h3', attr: 'articleTitle', content: 'Backcountry Tours', parent: 'textContainerThree'},
    {tag: 'p', attr: 'info', content: 'If you\'re an experienced paraglider and want to explore the beautiful Chugach mountains, our experienced guides will show you why this is a world class destination.', parent: 'textContainerThree'},
    {tag: 'p', attr: 'price', content: '$600 per day', parent: 'textContainerThree'},

    {tag: 'article', attr: 'articleFour', content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: 'img4', content: '', parent: 'articleFour'},
    {tag: 'div', attr: 'textContainerFour', content: '', parent: 'articleFour'},
    {tag: 'h3', attr: 'articleTitle', content: 'Rentals', parent: 'textContainerFour'},
    {tag: 'p', attr: 'info', content: 'If you\'re an experienced paraglider traveling to Anchorage, you might just need to rent equipment for your next adventure. Contact us and we can outfit you for any adventure.', parent: 'textContainerFour'},
    {tag: 'p', attr: 'price', content: 'Variable Price', parent: 'textContainerFour'},
]
// {tag: , attr: , content: , parent: }