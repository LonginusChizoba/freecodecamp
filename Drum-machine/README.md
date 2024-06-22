#  Drum Machine

A simple drum machine application built with React. The application allows users to play drum sounds by clicking on the corresponding buttons or by pressing specific keys on the keyboard.

## Table of Contents

- [Installation](#installation)
- [Technology Used] (#Technology-Used)
- [Usage](#usage)
- [Components](#components)
- [Audio Clips](#audio-clips)
- [Keyboard Interaction](#keyboard-interaction)
- [Contributing](#contributing)
- [License](#license)


## Project Netlify Link
https://fcc-project.netlify.app/drum-machine/


## Installation

To get started with the FCC Drum Machine, follow these steps:

## Technology Used

1. React

2. TypeScript

3. CSS

4. HTML


HTML: HyperText Markup Language, the standard language for creating web pages, used within the JSX of React components.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/drum-machine.git
   cd drum-machine

2. npm install

3. npm run dev

4. Open the application:
Open your browser and go to http://localhost:3000.


## Usage
Click on the drum pads to play the corresponding sound.
Press the keys Q, W, E, A, S, D, Z, X, C to play the corresponding sound.

## Components
#### App Component
The App component is the main component of the application. It handles the keyboard events and renders the drum pads.

 #### Drum Component:
The Drum component renders individual drum pads.

## Audio Clips
The audioClips array contains the details of the drum sounds, including the key trigger, URL, and description.

## Keyboard Interaction
The playAudio function in the App component handles keyboard events to play the corresponding drum sound and update the display with the description.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

This `README.md` file provides an overview of the project, installation and usage instructions, descriptions of key components, and contribution guidelines. Adjust the content as necessary to match the specifics of your project.










<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
