export { contactContent }

const contactContent = [
    {tag: 'header', attr: {class:'header'}, content: '', parent: '.content'},
    {tag: 'div', attr: {class:'navLinks'}, content: '', parent: '.header'},
    {tag: 'p', attr: {class:'homeLink'}, content: 'Home', parent: '.navLinks'},
    {tag: 'p', attr: {class:'adventuresLink'}, content: 'Adventures', parent: '.navLinks'},
    {tag: 'p', attr: {class:'contactLink'}, content: 'Contact Us', parent: '.navLinks'},
    {tag: 'div', attr: {class:'headerInfo'}, content: '', parent: '.header' },
    {tag: 'p', attr: {class:'headerPhone'}, content: '555-123-4567', parent:'.headerInfo' },
    {tag: 'p', attr: {class:'headerAddress'}, content: '123 45th St. Anchorage, AK', parent:'.headerInfo' },
    {tag: 'main', attr: {class:'main'}, content: '', parent: '.content'},

    {tag: 'div', attr: {class:'formContainer'}, content: '', parent: '.main'},
    {tag: 'form', content: '', parent:  '.formContainer'},

    {tag: 'label', attr: {for:'full-name'}, content: 'Full Name', parent: 'form'},
    {tag: 'input', attr: {type:'text', id:'full-name', name:'full-name', required: 'required'}, content: '', parent: 'form'},

    {tag: 'label', attr: {for:'email'} , content: 'Email', parent: 'form'},
    {tag: 'input', attr: {type: 'text', id:'email', name:'email', required: ''}, content: '', parent: 'form'}, 
    // {tag: , attr: , content: , parent: },
]


// contactus 
// leave us a message and we'll get back to you as soon as we can. 

// full name 
// email address
//message
// submit 

// map of the area