const urlParams = new URLSearchParams(window.location.search); // Gets the data from the URL
const requestedProject = urlParams.get('project');
const content = document.querySelector('.content');
const content02 = document.querySelector('.content02');
const leftContainer = document.querySelector('.left-container');
const header = document.querySelector('.header-project-pages')
const videoContainer = document.querySelector('.video-container')
const fullWidth = document.querySelector('.full-width')
const fullWidth02 = document.querySelector('.full-width02')

const nextContainer = document.querySelector('.next-project');


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

                    `<div></div><div><a id="githubLink" target="_blank" href="${project.github}">View on Github</a>
                    <a id="githubLink" target="_blank" href="${project.link}">View Live</a></div>`

                } else {

                }

                leftContainer.innerHTML +=

                `<div class="left-container">
                <p>${project.pageDescription}</p></div>`

                for (let i = 0; i < project.image.length; i++) {
                    const caption = project.captions && project.captions[i]
                    ? `<figcaption>${project.captions[i]}</figcaption>`
                    : '';

                    content02.innerHTML += `
                    <figure class="project-figure">
                    <img class="image-project-page" src="${project.image[i]}" alt="${project.captions && project.captions[i] ? project.captions[i] : project.name}">${caption}
                    </figure>`;
                }

               if (project.video && videoContainer) {
    videoContainer.innerHTML = `
        <video class="project-video" controls playsinline preload="metadata"
               ${project.poster ? `poster="${project.poster}"` : ''}>
            <source src="${project.video}" type="video/mp4">
            Your browser doesn't support video playback.
        </video>`;
} 

            } else {

            }
        })

        // ---- NEXT PROJECT BUTTON ----
        const currentIndex = data.items.findIndex(function (project) {
            return project.title === requestedProject;
        });

        if (currentIndex !== -1 && nextContainer) {
            // The % makes the last project loop back to the first
            const nextProject = data.items[(currentIndex + 1) % data.items.length];

            nextContainer.innerHTML = `
                <a class="next-project-link" href="${nextProject.pageLink}">
                    <span class="next-project-label">Next project</span>
                    <span class="next-project-name">${nextProject.name} &rarr;</span>
                </a>`;
        }

        

    })

