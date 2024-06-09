

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

## :outbox_tray: Set up

These are the steps required to install/run the project.

1. **Create a new branch:**

    ```bash
    git checkout -b your-branch-name
    ```

2. **Clone the repository into the new branch:**

    ```bash
    git clone https://github.com/your-username/your-repository.git .
    ```

3. **Navigate to the project directory:**

    ```bash
    cd your-repository
    ```

4. **Navigate to the client folder:**

    ```bash
    cd client
    ```

5. **Add this `.env` file in the client's root folder:**

    ```bash
     "REACT_APP_API_URL=<your_backend_url>" 
    ```

6. **Install frontend dependencies:**

    ```bash
    npm install
    ```

7. **Start the frontend server:**

    ```bash
    npm start
    ```

8. **Add this `.env` file in the server's root folder:**

    ```bash
    DB='mongodb+srv://Admin_364:admin@courseapp.yyiqalo.mongodb.net/?retryWrites=true&w=majority&appName=CourseApp'
    PORT=5000
    ```

9. **Open another terminal and navigate to the server folder:**

    ```bash
    cd ../server
    ```

10. **Install backend dependencies:**

    ```bash
    npm install
    ```

11. **Create a database in MongoDB Atlas and add the connection string to the `.env` file:**(you can skip as i have already provided connection string)

    - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and database.
    - Get the connection string.
    - Update the `.env` file in the `server` directory with your connection string.

12. **Start the backend server:**

    ```bash
    npm start
    ```

13. **Now you are all set to start working on this project and do some contributions:**

    - Make your changes.
    - Stage and commit your changes.
    - Push your changes to your branch:

        ```bash
        git push origin your-branch-name
        ```

## Work in Progress

This project is still under active development. Feel free to contribute or check back later for updates.
