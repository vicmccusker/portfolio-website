const portfolioPages = document.querySelector('.portfolio-projects')
const birthstonePage = document.querySelector('.birthstone')

fetch('pages.json').then(function(response) {
    return response.json() 
})

.then(function (pages) {
    console.log(pages)
    pages.items.forEach(function(page) {
        console.log(page.title)

        if (portfolioPages) {
            portfolioPages.innerHTML += `<div class="portfolio-pages-info container">
            <a class="project-link" href="${page.pageLink}"> <img src=${page.image} alt="project"></img></a>
            <h3>${page.title}</h3>
            <h3 class="category">${page.category}</h3>
            <a id="githubLink" href=${page.github}>View on Github</a>
            </div>`
        } else {}
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