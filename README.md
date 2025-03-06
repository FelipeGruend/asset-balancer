# Asset Balancer

## Overview

**Asset Balancer** is a simple web application built with **Next.js** and **React** to help users rebalance their investment portfolio. Users can enter their current portfolio distribution, define their target allocation, and calculate the required investments to achieve the desired distribution.

## Features

- Input current investment allocation
- Define target allocation percentages
- Specify additional available investment funds
- Calculate the required investment in each asset to achieve the target allocation
- Responsive and user-friendly interface

## Technologies Used

- **Next.js** (React framework)
- **Tailwind CSS** (for styling)
- **JavaScript** (core programming language)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/asset-balancer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd asset-balancer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

To start the development server, run:

```sh
npm run dev
```

This will launch the application at `http://localhost:3000/`.

## Configuration

### Tailwind CSS Setup

Make sure Tailwind CSS is correctly configured:

- Check `tailwind.config.js` for the content paths:
  ```js
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
- Ensure `styles/globals.css` contains the Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## Deployment

To deploy the project using **Vercel**, run:

```sh
npm run build
vercel deploy
```

## Contributing

Feel free to fork the repository, make improvements, and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

[Felipe Gruendemann]

