## FreeCodeCamp Project 
This is a freeCodeCamp project, which contains individual sub projects.

- [Clock](https://fcc-project.netlify.app/clock)
- [Drum Machine](https://fcc-project.netlify.app/drum-machine/)
- [Js Calculator](https://fcc-project.netlify.app/js-calculator/)
- [Markdown Previewer](https://fcc-project.netlify.app/markdown-previewer/)
- [Random Qoute Machine](https://fcc-project.netlify.app/random-quote-machine/)

All sub-projects were developed individually using Vite.

### Project Build
To build all projects, I needed to generate the dist build for each project with their names, move them to master-dist directory and deploy the master-dist to Netlify.

- Step 1: 
Create a netlify.toml file, configure project publish step and redirect settings.

- Step 2:
Use Project-Forge package to automate the build process. This includes running the build, moving the builds to master-dist. This package helped me run multiple commands at once.

For more information on the individual projects, visit the readme file attached to each project.