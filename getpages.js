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

                    fullWidth.innerHTML += 

                    
                    `<div></div><div><a id="githubLink" target=”_blank” href=${project.github}>View on Github</a>
                    <a id="githubLink" target=”_blank” href=${project.link}>View Live</a></div>`
                    
        
                } else {
        
                }  

                content.innerHTML += 
                `
                <div class="left-container">
                <p>${project.pageDescription}</p></div>
            
                <div>
                <img class="image-project-page" src="${project.image[0]}"></img>
                <img class="image-project-page" src="${project.image[1]}"></img>
                <img class="image-project-page" src="${project.image[2]}"></img>
                <img class="image-project-page" src="${project.image[3]}"></img></div>

                
                `

                fullWidth02.innerHTML +=
                `

                <table>
                  <tr>
                    <td><h4>Skills Used</h4></td>
                  </tr>
                  <tr>
                    <td><p>${project.skills}</p></td>
                  </tr>
                </table>

                <table>
                <tr>
                  <td><h4>Acknowledgements<h4></td>
                </tr>
                <tr>
                  <td><p>${project.acknowledgements[0]}</p></td>
                </tr>
              </table>
                `


            } else {
            
            }
        })
    
    }) 
    

