const reviews = [
    {
    id:1,
    name: "Andrea Piacquadio",
    job: "ux designer", 
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    alt:"Profile picture of Andrea Piacquadio",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nesciunt quas vitae voluptatibus quos a sequi vero molestias perspiciatis possimus!",
    }, 
    {
    id:2, 
    name:"mentatdgt", 
    job:"web designer", 
    img:"https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    text:"dolor sit amet consectetur, adipisicing elit. Totam nesciunt quas vitae voluptatibus quos a sequi vero molestias perspiciatis possimus!",
    },
    {
    id:3, 
    name:"Moose Photos", 
    job:"intern", 
    img:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatibus quos a sequi vero molestias perspiciatis possimus!",
    }, 
    {
    id:4, 
    name:"Spencer Selover", 
    job:"teacher", 
    img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    text:" Ad nihilum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nesciunt quas vitae voluptatibus quos a sequi vero molestias perspiciatis possimus!",
},
];

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

// show person based on item
function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem > reviews.length - 1) {
    currentItem = 0
    }
    showPerson()
})

// show previous person
prevBtn.addEventListener('click', function(){
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1    
    }
    showPerson()
})

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})
