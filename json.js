const portfolioPages = document.querySelector('.portfolio-projects')
const birthstonePage = document.querySelector('.birthstone')
const featured = document.querySelector('.featured')


fetch('pages.json').then(function(response) {
    return response.json() 
})

.then(function (pages) {
    console.log(pages)
    pages.items.forEach(function(page) {
        console.log(page.title)

        if (portfolioPages) {
            portfolioPages.innerHTML += `<div class="container">
            <a class="project-link" href="${page.pageLink}"><img src=${page.coverImage} alt="project"></img></a>
            <h3>${page.name}</h3>
            <h3 class="category">${page.category}</h3>
            </div>`
        } else {
        }

        if (page.featured == true && featured) {

            featured.innerHTML += `<div class="container">
            <a class="project-link" href="${page.pageLink}"> <img src=${page.coverImage} alt="project"></img></a>
            <h3>${page.name}</h3>
            <h3 class="category">${page.category}</h3>
            </div>`
            
        } else {
        } 
    }) 
}) 


document.querySelector('.burger').addEventListener("click", toggleOpen)

function toggleOpen() {
    const list = document.querySelector(".nav-links")
    list.classList.add("active")
    console.log("active")
}

document.querySelector('.close').addEventListener("click", toggleClosed)

function toggleClosed() {
    const listClose = document.querySelector(".nav-links")
    listClose.classList.remove("active")
    console.log("closed")
}
