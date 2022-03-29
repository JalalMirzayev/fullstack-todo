# What is this repository about?

This repository contains a basic template for a [PERN-stack](https://www.youtube.com/watch?v=ldYcgPKEZC8) (PostgreSQL, Express, React and Node) based fullstack webapp. The content is closely following the

<img src="image" alt="Webapp" title="Webapp" width="300"/>

## Requirements for the application

### Database setup

You need to install PostgreSQL and remember the path. I will refer to this path as `POSTGRESQL_PATH` (e.g. `C:\Program Files\PostgreSQL\14`). After installation make sure to add `POSTGRESQL_PATH\bin` to your path variable (e.g. `C:\Program Files\PostgreSQL\14\bin`). This will allow you to run the `psql` command from your terminal.

The PostgreSQL installation will create a `postgres` user by default. This is what I used for my implementation.

```bash
psql -U postgres
```

Entering the password should lead in an active connection. If you type `\l` you should see a list of all database. To create a new database `newDatabase` you can type `CREATE DATABASE newDatabase;`. Then connect to the database with `\c newDatabase`. After connecting to the database copy and paste the following content into the terminal

```bash
CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

After setting the database up open the `db.js` inside the `server` folder and adapt the JSON object which is passed into the Pool constructor.

### Install node modules

Open the terminal and browse into the server folder and type `npm install` to install all necessary node modules for the server.
After the installation type `npm install -g nodemon` into the terminal to install nodemon. This packages will change the server as soon as a code
file is changed by saving changes. If you type `nodemon index` your server will fire up. The server will run under port `5000`.

Open the terminal and browse into the client folder and type `npm install` to install all necessary node modules for the React frontend.
After the installation is complete you can type `npm start` to start the frontend application. You can view the frontend by opening a browser and by navigating to `http://localhost:3000/`.
