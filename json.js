const portfolioPages = document.querySelector('.portfolio-projects')

fetch('pages.json').then(function(response) {
    return response.json() 
})

.then(function (pages) {
    console.log(pages)
    pages.items.forEach(function(page) {
        console.log(page.title)
        portfolioPages.innerHTML += `<div class="portfolio-pages-info container">
        <a href="${page.pageLink}"> <img src=${page.image}></img></a>
        <h3>${page.title}</h3>
        <p class="category">${page.category}</p>
        <p>${page.description}</p>
        <a href=${page.github}>View on Github</a>
        </div>
        `
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