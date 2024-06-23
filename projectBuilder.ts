import { ProjectForge } from "project-forge";

const builder = new ProjectForge(`
cd Clock && npm install && npm run build && cd ..
cd Drum-machine && npm install && npm run build && cd ..
cd Js-calculator && npm install && npm run build && cd ..
cd Markdown-previewer && npm install && npm run build && cd ..
cd Random-quote-machine && npm install && npm run build && cd ..
mkdir -p master-dist/Clock && mv Clock/dist/* master-dist/Clock/ && rm -rf Clock/dist &&
mkdir -p master-dist/Drum-machine && mv Drum-machine/dist/* master-dist/Drum-machine/ && rm -rf Drum-machine/dist &&
mkdir -p master-dist/Js-calculator && mv Js-calculator/dist/* master-dist/Js-calculator/ && rm -rf Js-calculator/dist &&
mkdir -p master-dist/Markdown-previewer && mv Markdown-previewer/dist/* master-dist/Markdown-previewer/ && rm -rf Markdown-previewer/dist &&
mkdir -p master-dist/Random-quote-machine && mv Random-quote-machine/dist/* master-dist/Random-quote-machine/ && rm -rf Random-quote-machine/dist
`, "./master-dist");
builder.build();
