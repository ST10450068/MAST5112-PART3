# MAST5112-PART3
AddedItems Module
This module provides functionality for managing menu items in the application, including listing, removing, and toggling themes.

Table of Contents
Overview
Features
Changelog
Changes Since Part 2
Refactoring Changes
Setup and Usage
Contributing
Overview
The AddedItems screen provides a user-friendly interface for managing menu items. The chef can view, delete, and customize the display mode using dark and light themes.

Features
Displays a list of menu items dynamically.
Allows deletion of menu items with a confirmation prompt.
Enables switching between dark and light themes.
Enhanced layout for a wider and cleaner interface.
Changelog
Changes Since Part 2
Added a FlatList for dynamic menu rendering:

Introduced a FlatList component to render the menu items dynamically.
Implemented deletion functionality:

Added the ability to delete menu items with a confirmation prompt.
Dark/Light Theme Toggle:

Introduced a theme toggle button allowing users to switch between dark and light modes.
Logout Button:

Added a logout button for user session management. (Currently displays a message; backend logic can be added.)
Back Navigation:

Implemented a back button to navigate to the Chef's home screen.
Refactoring Changes
Optimized Styles:

Reduced unnecessary padding and margins for better screen utilization.
Enhanced styles to support dynamic layout changes between themes.
Improved Header Layout:

Centered the header title and reduced padding around header components for a cleaner look.
Maximized Screen Space:

Adjusted contentContainerStyle in FlatList and minimized padding to make the interface appear wider.
Introduced Error Handling for Empty Lists:

Added logic to handle cases where menu items are empty or deletion attempts fail.
Dynamic Delete Confirmation:

Incorporated password verification before menu item deletion to add an extra layer of security.
Improved Component Structure:

Refactored and simplified redundant code for easier maintenance and readability.
Setup and Usage
Clone the repository and install dependencies:

bash
Copy code
git clone <repository_url>  
cd project_directory  
npm install  
Navigate to the AddedItems.js file and ensure assets such as the chef hat icon are correctly linked.

Run the app:

bash
Copy code
npm start  
Contributing
This module was developed by Griffin aka Kabelo Kgosana. Contributions and suggestions are welcome.


