# Notes Markdown App

This repository contains **Notes Markdown App**, a desktop application built with Electron. The app provides an elegant and robust platform for users to create, edit, and manage notes. Notes can be written in markdown format and are saved locally on the user's system, ensuring quick access and privacy.

![notes-markdown-app](https://github.com/user-attachments/assets/da4f7ce0-b592-4f12-87c7-f69f4d52b8b8)

## Features

- **Markdown Support**: Write notes in markdown format with a live preview.
- **Offline Access**: Fully functional without an internet connection.
- **Cross-Platform**: Works seamlessly on Windows, macOS, and Linux.
- **User-Friendly Interface**: A clean and responsive design for enhanced user experience.

## Live Preview

Download the application from the repository: [Notes Markdown App](https://github.com/Utkarsh-Singhal-26/notes-desktop-app)

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## Getting Started

To run this application locally or build it for distribution, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Utkarsh-Singhal-26/notes-desktop-app.git
    cd notes-desktop-app
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Run the application:**
    ```bash
    yarn dev
    ```
    This will start the application in development mode.

4. **Package the application (optional):**
    To build the app for distribution, run:
    ```bash
    yarn build
    ```
    The packaged app will be available in the `dist` folder.

## Technologies Used

- **Electron**: For building cross-platform desktop applications.
- **React**: A JavaScript library for building the user interface.
- **TypeScript**: Provides static typing for improved code quality.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Jotai**: A state management library for React.
- **MDXEditor**: A markdown parser and compiler for rendering markdown content.
- **Electron Builder**: A complete solution for packaging and building Electron apps.
- **fs-extra**: Extends the Node.js `fs` module with additional features.
- **Vite**: A build tool for faster development and optimized builds.

## Approach

The development process of this app included:

1. **Application Framework Setup**: Used Electron to set up a cross-platform desktop environment.
2. **UI Design and Development**: Built a clean and intuitive interface with React.
3. **Markdown Integration**: Added a markdown editor with a live preview pane using Marked.js.
4. **Local Storage Management**: Implemented local storage to save and retrieve notes efficiently.

## Known Issues and Limitations

- **File Management**: Currently, the app saves notes locally, but does not offer advanced file management features (e.g., folders, tags).
- **Markdown Edge Cases**: Certain advanced markdown syntax might not be fully supported.
- **Storage Constraints**: The app does not yet provide synchronization with cloud storage solutions.

---

Feel free to contribute, report issues, or suggest new features by opening an issue on the [GitHub repository](https://github.com/Utkarsh-Singhal-26/notes-desktop-app).

Happy coding! 📝
