# 🚀 Node.js TypeScript Starter

This is a basic template for a Node.js backend application using TypeScript and Express. It's intended to help beginners get started with building backend applications in Node.js.

## Prerequisites

Before you begin, make sure your development environment includes Node.js and NPM. You can download Node.js from the [official website](https://nodejs.org/en/download/) and follow the installation instructions.

## Getting Started

To get started, you can clone this repository and install the required dependencies:

```sh
git clone https://github.com/AbdouAbarchiAboubacar/nodejs_restapi_get-started.git
cd nodejs_restapi_get-started
npm install
```

Then, you can start the development server:

This will start the server and restart it automatically when any changes are made to the source code.

## Project Structure

This template has the following project structure:

```sh
├── dist
├── node_modules
├── src
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── app.ts
│ └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

- `dist`: The directory where the compiled TypeScript files will be stored.
- `node_modules`: The directory where the dependencies will be installed.
- `src/controllers`: The directory where the controllers for the API routes will be stored.
- `src/models`: The directory where the database models will be stored.
- `src/routes`: The directory where the API routes will be defined.
- `src/app.ts`: The main application file that initializes the server and middleware.
- `src/server.ts`: The file that starts the server.
- `.env.example`: An example environment variables file.
- `.gitignore`: The file that specifies which files and directories to ignore when committing changes to Git.
- `package.json`: The file that specifies the project dependencies and scripts.
- `README.md`: The file that contains the project documentation.
- `tsconfig.json`: The file that specifies the TypeScript configuration for the project.
- `tslint.json`: The file that specifies the TypeScript linting rules.

## Contributing

Contributions are welcome! If you find any issues or have any suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AbdouAbarchiAboubacar/nodejs_restapi_get-started/blob/master/LICENCE) file for more information.
