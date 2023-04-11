export { adventuresContent }

const adventuresContent = [
    {tag: 'header', attr: {class:'header'}, content: '', parent: 'content'},
    {tag: 'div', attr: {class:'navLinks'}, content: '', parent: 'header'},
    {tag: 'p', attr: {class:'homeLink'}, content: 'Home', parent: 'navLinks'},
    {tag: 'p', attr: {class:'adventuresLink'}, content: 'Adventures', parent: 'navLinks'},
    {tag: 'p', attr: {class:'contactLink'}, content: 'Contact Us', parent: 'navLinks'},
    {tag: 'div', attr: {class:'headerInfo'}, content: '', parent: 'header' },
    {tag: 'p', attr: {class:'headerPhone'}, content: '555-123-4567', parent:'headerInfo' },
    {tag: 'p', attr: {class:'headerAddress'}, content: '123 45th St. Anchorage, AK', parent:'headerInfo' },
    {tag: 'main', attr: {class:'main'}, content: '', parent: 'content'},
     
    {tag: 'div', attr: {class:'adventuresMain'}, content: '', parent: 'main'},

    {tag: 'article', attr: {class:'articleOne'}, content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: {class:'img1'}, content: '', parent: 'articleOne'},
    {tag: 'div', attr: {class:'textContainerOne'}, content: '', parent: 'articleOne'},
    {tag: 'h3', attr: {class:'articleTitle'}, content: 'Tandem Flights', parent: 'textContainerOne'},
    {tag: 'p', attr: {class:'info'}, content: 'For those who want to experience the thrill of paragliding without the responsibility of flying themselves, a tandem flight is a great option.', parent: 'textContainerOne'},
    {tag: 'p', attr: {class:'price'}, content: '$280', parent: 'textContainerOne'},

    {tag: 'article', attr: {class:'articleTwo'}, content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: {class:'img2'}, content: '', parent: 'articleTwo'},
    {tag: 'div', attr: {class:'textContainerTwo'}, content: '', parent: 'articleTwo'},
    {tag: 'h3', attr: {class:'articleTitle'}, content: 'Solo Flights', parent: 'textContainerTwo'},
    {tag: 'p', attr: {class:'info'}, content: 'If you\'re interested in learning how to safely paraglide on your own, we\'ll teach you how to launch, control, and land the paraglider in our two-day intro course.', parent: 'textContainerTwo'},
    {tag: 'p', attr: {class:'price'}, content: '$900', parent: 'textContainerTwo'},

    {tag: 'article', attr: {class:'articleThree'}, content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: {class:'img3'}, content: '', parent: 'articleThree'},
    {tag: 'div', attr: {class:'textContainerThree'}, content: '', parent: 'articleThree'},
    {tag: 'h3', attr: {class:'articleTitle'}, content: 'Backcountry Tours', parent: 'textContainerThree'},
    {tag: 'p', attr: {class:'info'}, content: 'If you\'re an experienced paraglider and want to explore the beautiful Chugach mountains, our experienced guides will show you why this is a world class destination.', parent: 'textContainerThree'},
    {tag: 'p', attr: {class:'price'}, content: '$600 per day', parent: 'textContainerThree'},

    {tag: 'article', attr: {class:'articleFour'}, content: '', parent: 'adventuresMain'},
    {tag: 'img', attr: {class:'img4'}, content: '', parent: 'articleFour'},
    {tag: 'div', attr: {class:'textContainerFour'}, content: '', parent: 'articleFour'},
    {tag: 'h3', attr: {class:'articleTitle'}, content: 'Rentals', parent: 'textContainerFour'},
    {tag: 'p', attr: {class:'info'}, content: 'If you\'re an experienced paraglider traveling to Anchorage, you might just need to rent equipment for your next adventure. Contact us and we can outfit you for any adventure.', parent: 'textContainerFour'},
    {tag: 'p', attr: {class:'price'}, content: 'Variable Price', parent: 'textContainerFour'},
]


// {tag: , attr: , content: , parent: }