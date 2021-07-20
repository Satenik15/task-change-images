const arr = [
    {
        url: "https://blogimage.vantagecircle.com/vcblogimages/2020/08/social-media-in-the-workplace-1.png",
        title: "Insights and Reports",
        subtitle: "Insights and Reports: Deep dive into metrics customized for your business and measure goals.",
    },
    {
        url: "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-22151.jpg?size=626&ext=jpg",
        title: "Manage Leads and Deals",
        subtitle: "Get more hot leads fed straight into your sales pipelines around the clock",
    },
    {
        url: "https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8-%D1%81%D0%B5%D1%82%D0%B8-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82%D0%B0-144566628.jpg",
        title: "Track Communications",
        subtitle: "Track Communications: Track calls, emails and contact history exactly where you need.",
    },
    {
        url: "https://kissflow.com/wp-content/uploads/2021/02/work-from-home-pros-and-cons.png",
        title: "Automate and Grow",
        subtitle: "Automate and Grow: Eliminate busywork by automating repetitive administrative tasks.",
    }
];

const menu = document.getElementById("menu");
const images = document.getElementById("images");
const imageDiv = document.createElement("div");
imageDiv.className = "img";
images.appendChild(imageDiv);

let i = 0;
let Timer = setInterval(() => {
        if(i === arr.length || i === 0) {
                 i = 0;
                 menu.children[arr.length-1].children[1].classList.remove("display");
                 menu.children[arr.length-1].classList.remove("display-color");
        } else {
                 menu.children[i-1].children[1].classList.remove("display");
                 menu.children[i-1].classList.remove("display-color");
        }
        menu.children[i].classList.add("display-color");
        menu.children[i].children[1].classList.add("display");
        imageDiv.style.backgroundImage = `url(${arr[i].url})`;  
        i++;
   }, 3000)


arr.map(obj => {
    let menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    menuDiv.addEventListener("click", () => {
        clearInterval(Timer);
        images.children[0].style.backgroundImage = `url(${obj.url})`;  

           for(let i = 0; i < arr.length; i++) {
               menu.children[i].classList.remove("display-color");
               menu.children[i].children[1].classList.remove("display");
            }
        menuDiv.classList.add("display-color");
        menuDiv.children[1].classList.add("display");
       })

    let header = document.createElement("h3");
    header.innerHTML = obj.title;
    header.className = "menu-header";
    let description = document.createElement("p");
    description.className = "menu-description";
    description.innerHTML = obj.subtitle;
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("little-image");
    imageDiv.style.backgroundImage = `url(${obj.url})`;
    
    menuDiv.appendChild(header);
    menuDiv.appendChild(description);
    menuDiv.appendChild(imageDiv);
    menu.appendChild(menuDiv); 
})

// -------open/close modal window

let modal = document.getElementById("myModal");
let modal_img = document.getElementById("modal-img");
let span = document.getElementById("close");

imageDiv.onclick = function(){
    modal.style.display = "block";
    modal_img.style.backgroundImage = images.children[0].style.backgroundImage;
}

span.onclick = function() { 
modal.style.display = "none";
}







   

