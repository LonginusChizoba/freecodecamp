# Calculator Application

This project is a simple calculator application built with React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports other functionalities like percentage calculation and toggling between positive and negative values.

## Project Nextlify Link
https://fcc-project.netlify.app/js-calculator/

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
- **Percentage Calculation**: Convert a number to its percentage.
- **Toggle Sign**: Switch between positive and negative values.
- **Clear Function**: Reset the calculator.
- **Decimal Support**: Perform operations with decimal numbers.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS**: For styling the application.

## Installation

To get started with the Calculator Application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/calculator-application.git
   cd calculator-application

2. Install dependencies:

    npm install

3. Start the development server:
  
    npm start

4. Open the application:
    
    Open your browser and go to http://localhost:3000.


## Usage
Once the application is running:

Use the buttons on the calculator to enter numbers and operators.
The display will show the current expression and the result of the calculations.
Click "C" to clear the current expression.
Click "+/-" to toggle the sign of the current number.
Click "%" to convert the current number to its percentage.
Click "=" to calculate the result of the expression.

## Code Overview
Here is a brief overview of the main logic:

State Management: The application uses React's useState to manage the state of the answer and the expression.
Button Press Handling: The buttonPress function handles the logic for different button presses.
Calculation Logic: The calculate function processes the expression and evaluates the result.

## Example
Here is an example of how to use the calculator:

Enter 5, click +, enter 3, and click =. The result 8 will be displayed.
Click C to clear the expression.
Enter 50, click %. The result 0.5 will be displayed.

## Contributions
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

This `README.md` file provides a detailed overview of your project, including its features, technologies used, installation steps, usage instructions, and a brief code overview. It also includes a section for contributions and mentions the license under which the project is distributed. Adjust the repository URL and any other specific details as needed.











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
