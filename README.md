# MAST5112-PART3
# Project Setup and Installation Guide

Welcome to the Golden Pallete Resturant! Follow the steps below to set up and run the application locally. This README also includes the changelog for recent updates and refactoring.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Changelog](#changelog)
- [Contributors](#contributors)
- [License](#license)

---

## Setup Instructions

To get started with the project, follow these steps:

```bash
# Clone the repository
git clone github.com/ST10450068/MAST5112-PART3

# Navigate to the project directory
cd project_directory

# Install the dependencies
npm install
# Open the AddedItems.js file to ensure assets such as the chef hat icon are correctly linked


```
**Important**: Make sure all dependencies are installed before running the app.
*Note*: If you encounter any issues, feel free to open an issue.
---
## Screenshots:
![Screenshot 2024-11-22 103510](https://github.com/user-attachments/assets/917bcd4d-473f-4000-8448-ddcc41ecd2b8)
![Screenshot 2024-11-22 103536](https://github.com/user-attachments/assets/c5c23cf9-f4e2-44ab-b0e7-fbfdb4d081f7)
![Screenshot 2024-11-22 103716](https://github.com/user-attachments/assets/64f608b1-6a72-4c7a-95aa-73350a43f7ea)
![Screenshot 2024-11-22 103810](https://github.com/user-attachments/assets/da20a359-9b07-4e46-a64f-5f741ec622b3)
---




## Changelog
Part 3 Changes (Refactoring and Updates)
Here’s a list of all the changes made since Part 2 and the additional refactorings:
---

### New Features:
- **Dark Mode Toggle**: Added a toggle button to switch between light and dark modes.
- **Add/Remove Menu Items**: Implemented functionality to dynamically add and remove items from the menu.
- **Password Protected Deletion**: Added password protection when deleting menu items (password: `1234`).

### Refactoring:
- **Code Structure**: Improved code modularity by separating concerns, especially in state management.
- **Optimized Rendering**: Enhanced performance by reducing unnecessary re-renders in the menu list using React hooks.
- **UI Updates**: Updated button styles and layout for better user experience, including clearer visual feedback on actions.

### Bug Fixes:
- **Asset Path Fixes**: Fixed issues with incorrect asset paths for images in the menu list (e.g., the chef hat icon).
- **State Management**: Corrected some issues where the state was not updating correctly when deleting or adding menu items.

---
## Contributors


- **Griffin (aka Kabelo Kgosana)**: Lead Developer & Contributor

I truly appreciate ymy efforts in making this project better!

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for more details.

---
## Styling Summary

This README utilizes various Markdown styles to ensure clarity and enhance the presentation:

- **Code Blocks**: Used to display commands or code snippets (e.g., `git clone`, `npm install`).
- **Headers**: Organize content into clearly defined sections (e.g., `## Setup Instructions`, `## Changelog`).
- **Bold Text**: Highlights important information such as warnings or key actions.
- **Italic Text**: Adds emphasis to specific details or notes.
- **Lists**: Both ordered and unordered lists for step-by-step instructions and features.
- **Blockquotes**: Used to emphasize important notes, warnings, or quotes.
- **Images**: Included to showcase visual elements of the project (e.g., the chef hat icon).
- **Task Lists**: Track completed and pending tasks for project progress.

---

## YouTube Link

[Click here to view the video tutorial](https://youtu.be/w2ldt9baY-A)

