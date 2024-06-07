

<h1>E-commerce application</h1>

<p>E-commerce websites require a tremendous amount of data. I searched for APIs online, but they were all priced services. Instead, I used browserless.io to fetch data from the e-commerce sites. Utilizing Puppeteer, I scraped data from different sites .</p>
<hr>

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Architecture:** MVC (Model-View-Controller)



## Setup and Contributions Guidelines

$~$

##  :outbox_tray: Set up
- These are the steps required to install/run the project.

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Navigate to the client folder:

    ```bash
    cd client
    ```
4. Add this .env file in client's root folder
   
   ```bash
      REACT_APP_API_URL=<your_backend_url>
   ```
 
6. Install frontend dependencies:

    ```bash
    npm install
    ```

7. Start the frontend server:

    ```bash
    npm start
    ```
8. Add this .env file in server's root folder

   ```bash
       DB="mongodb+srv://Admin_364:admin@courseapp.yyiqalo.mongodb.net/?retryWrites=true&w=majority&appName=CourseApp"
       PORT=5000
   ```
7. Open another terminal and navigate to the server folder:

    ```bash
    cd server
    ```

7. Install backend dependencies:

    ```bash
    npm install
    ```
8. Create a database in MongoDB Atlas and add the connection string to the `.env` file(I have already include mongo db connection string you can skip this step):

    - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and database.
    - Get the connection string.
    - Create a `.env` file in the `server` directory.
    - Add the following to the `.env` file, replacing `<your_connection_string>` with your actual connection string:

    ```
    MONGODB_URI=<your_connection_string>
    ```
9. Start the backend server:

    ```bash
    npm start
    ```

10. Now you are all set to start working on this project

## Work in Progress

This project is still under active development. Feel free to contribute or check back later for updates.


