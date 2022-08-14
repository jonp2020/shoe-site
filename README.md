# E-commerce shoe shop site

This is a front end and backend app for an e-commerce website protoype for a shoe shop company.

Built using RESTful principals, the backend, built in Node with an express js server, accepts get, post and put requests to retrieve, add and update data on shoes and orders customers have placed. Dummy data is accessed from a MongoDB Atlas database. 

The front end is built with Vue 3 using the create Vue app client. It enables users to navigate the site to easily view different shoes, filter by preferences and go through a simple ordering process. Users can then track their order via a track order page. The front end is designed to be responsive and accessible to users on mobile, tablet and desktop devices.

A version of the web app is deployed [here](https://rocky-waters-20841.herokuapp.com/).

## Tools used
- Node
- Express
- MongoDB
- Mongoose
- Vue 3
- Bootstrap for styling forms
- Jest for some backend api route testing

## Getting Started

Follow the instructions below to get a local version up and running.


1. To begin with, (fork and) clone this repo by entering the following command in your terminal:

```
git clone https://github.com/jonp2020/shoe-site.git
```

2. Next, navigate into the folder where you have cloned the repo and install the dependencies at the root level :
```
npm install
```

3. Then cd into the Client folder and also install any dependencies, too, with the same command: 
```
npm install
```

4. You will need to set up a MongoDB database with dummy data. In the backend folder in the repo you have cloned above, there is an example of data for a list of shoes objects in the Data folder which you can use by adding to a MongoDB cluster you have set up.

5. These instructions from MongoDB's website are useful in setting up a database: https://www.mongodb.com/developer/products/atlas/use-atlas-on-heroku/. In addition you will need to add a connection string to the MongoDB in your .env file in order to connect to the database.

6. In order to run the app on your machine, run the following commands in separate terminal windows which will start the backend server and front end server respectively:

```
npm run dev
```
```
npm run serve
```
7. Enjoy!
