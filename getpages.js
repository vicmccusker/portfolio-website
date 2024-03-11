const urlParams = new URLSearchParams(window.location.search); // Gets the data from the URL
const requestedProject = urlParams.get('project');  
const content = document.querySelector('.content');
const header = document.querySelector('.header-project-pages')
const videoContainer = document.querySelector('.video-container')
const fullWidth = document.querySelector('.full-width')
const fullWidth02 = document.querySelector('.full-width02')



fetch('pages.json').then(function(response) {
    return response.json()
})


    .then(function (data) {

        data.items.forEach(function (project) {    
            if (project.title === requestedProject) {
                header.innerHTML += 
                `<h1 class=half>${project.name}</h1>`


                if (project.showOnGithub == true && fullWidth) {

                    ` <a id="githubLinkPortfolio" href=${project.github}>View on Github</a>`
        
                } else {
        
                }  

                content.innerHTML += 
                `<div>
                <p>${project.description}</p>
                <p>${project.pageDescription}</p></div>
                
                <img class="image-project-page" src="${project.image[0]}"></img></div>
                <div></div>
                <div><img class="image-project-page" src="${project.image[1]}"></img></div>
                <div></div>
                <div><img class="image-project-page" src="${project.image[2]}"></img>
                <div></div>
                <div><img class="image-project-page" src="${project.image[3]}"></img>
                `

                fullWidth02.innerHTML +=
                `<div><h4>Skills Used</h4>
                <p class="skills-used">${project.skills}</p></div>
                <h4>Acknowledgements</h4>
                <p>${project.acknowledgements[0]}</p>
                <p>${project.acknowledgements[1]}</p>
                <p>${project.acknowledgements[2]}</p>
                `


            } else {
            
            }
        })
    
    }) 
    

