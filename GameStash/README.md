<div id="top"></div>

# GameStash - Game Explorer

<details>
<summary>Table of contents</summary>

-   [Overview](#overview)
-   [Technology Stack](#technology-stack)
-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Screenshots](#screenshots)
-   [Link](#link)

</details>

## Overview

Welcome to GameStash, a MERN-based website that lets users explore and save their favorite games. The website uses the RAWG Video Games Database API to provide a vast collection of games for users to discover.

## Technology Stack

- MongoDB
- Express
- React
- Node
- HTML
- CSS
- JS
- RAWG Video Games Database API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/hemanth110702/GameStash.git
   cd GameStash
   ```

2. Set up the backend:

    - Navigate to the backend folder:
    ```bash
    cd backend
    ```

   - Create a `.env` file and add the following environment variables:
   ```bash
   PORT=5000
   RAWG_API_KEY=YOUR_RAWG_API_KEY
   SECRET=YOUR_SECRET_KEY
   MONGODB_URL=YOUR_MONGODB_URL
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

4. Set up the frontend:

    - Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

   - Install the necessary dependencies:
   ```bash
   npm install
   ```

5. Start the frontend server:
   ```bash
   npm run dev
   ```

## Features

- **Game Exploration:** Browse a wide range of games sorted by genres using the sidebar.
- **MyGames Section:** Save and manage your liked games for easy access.
- **Responsive Design:** Enjoy a seamless experience on various devices.

## Screenshots

<table>
    <tr>
        <th>Desktop View</th>
        <th>Mobile View</th>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Home Page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - home.png" width="100%" title="Desktop view - Home Page"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - home.jpg" width="100%" title="Mobile view - Home Page"/>
        </td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Login Page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - login.png" width="100%" title="Desktop view - Login Page"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - login.jpg" width="100%" title="Mobile view - Login Page"/>
        </td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Signup Page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - signup.png" width="100%" title="Desktop view - Signup Page"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - signup.jpg" width="100%" title="Mobile view - Signup Page"/>
        </td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Logged in home page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - logged in.png" width="100%" title="Desktop view - Logged in home page"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - logged in.jpg" width="100%" title="Mobile view - Logged in home page"/>
        </td>
    </tr> 
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Logged in display page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - display.png" width="100%" title="Desktop view - Logged in display page"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - display.jpg" width="100%" title="Mobile view - Logged in display page"/>
        </td>
    </tr> 
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">MyGames page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - mygames.png"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - mygames.jpg" width="100%" title="Mobile view - MyGames page"/>
        </td>
    </tr> 
    <tr>
      <td colspan="3" style="text-align: left;font-weight: bold;">Light Theme page</td>
    </tr>
    <tr>
        <td>
            <img src="./screenshots preview/Desktop - light.png" width="100%" title="Desktop view - Light theme"/>
        </td>
        <td>
            <img src="./screenshots preview/Mobile - light.jpg" width="100%" title="Mobile view - Light theme"/>
        </td>
    </tr> 
</table>

## Link
[🚀 Live Page](https://gamestash-frontend.vercel.app/)

<p align="right"><a href="#top">⬆️ Back to Top</a></p>
