const urlParams = new URLSearchParams(window.location.search); // Gets the data from the URL
const requestedProject = urlParams.get('project');  
const content = document.querySelector('.content');
const header = document.querySelector('.header-project-pages')
const videoContainer = document.querySelector('.video-container')
const fullWidth = document.querySelector('.full-width')



fetch('pages.json').then(function(response) {
    return response.json()
})


    .then(function (data) {

        data.items.forEach(function (project) {    
            if (project.title === requestedProject) {
                console.log("win")  
                header.innerHTML += 
                `<h1>${project.name}</h1>`

                fullWidth.innerHTML +=
                `<img class="main-image-project-page" src="${project.image[1]}"></img>
                <a id="githubLink" href=${project.github}>View on Github</a>
                `

                content.innerHTML += 
                `<div><img class="main-image-project-page" src="${project.image[0]}"></img></div>
                <p>${project.pageDescription}</p>
                <p>${project.description}</p>
                <div><img class="main-image-project-page" src="${project.image[0]}"></img></div>
                `

            } else {
                console.log("fail")           
            }
        })
    
    }) 
    

