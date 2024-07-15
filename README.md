# Telegram Clone

This project is a pixel-perfect replica of the Telegram messaging app, built using React.js. It features a responsive design that adapts seamlessly to both desktop and mobile views and includes functionalities like dark mode and profile view toggling.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can check out the live demo of the project [here](https://your-live-demo-link.com).

## Features

- **Responsive Design**: Adapts to both desktop and mobile views.
- **Dark Mode**: Toggle between light and dark themes.
- **Chat List**: Displays a list of chats.
- **Messages**: Fetch and display messages for a selected chat.
- **Profile View**: Slide-in profile view with options.
- **Search Functionality**: Search through chats.
- **Mobile-Friendly**: Designed to be fully functional on mobile devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sasikumar1301/telegram-r.git
   cd telegram-r
2. Install dependencies:
    npm install

3. Start the development server:
  ```bash
    npm start

Usage

Open your browser and navigate to http://localhost:3000.
Use the search bar to find chats.
Click on a chat to view messages.
Toggle dark mode using the profile view.
On mobile devices, the chat list will hide when a chat is selected and reappear when tapping the overlay.
API Endpoints
The project uses the following API endpoints to fetch data:

Fetch Chats: GET https://devapi.beyondchats.com/api/get_all_chats?page=1
Fetch Messages: GET https://devapi.beyondchats.com/api/get_chat_messages?chat_id={chatId}

Technologies

React.js: Frontend library for building user interfaces.
Axios: Promise-based HTTP client for the browser and Node.js.
React Icons: Popular icons as React components.
CSS: For styling the application.


Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
  git checkout -b feature/your-feature-name
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
6. Open a pull request.


License
This project is licensed under the MIT License. See the LICENSE file for details.


To add this file to your GitHub repository:

1. Navigate to your project directory.
2. Create a new file named `README.md`.
3. Paste the content above into this file.
4. Save and commit the file to your repository:
   ```bash
   git add README.md
   git commit -m "Add README file"
   git push origin main





