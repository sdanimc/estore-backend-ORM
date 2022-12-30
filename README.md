# E-commerce Back End Code
## Description
  Back end code for a store website that uses MySQL, Sequelize and object-realtional mapping to navigate a database of the store's products
  
  ## Installation
  To download this application, copy the https code link, clone the code to your computer and open in a coding studio. Then use 'npm init -y' to load the neccessary packages. You must create a .env similar to the .env example file in order to connect with you MySQL database. 

  ## Usage
![Walkthrough Video](https://github.com/sdanimc/sql-employee-tracker/blob/main/Untitled_%20Dec%2021%2C%202022%202_01%20PM.webm)
 With MySQL, run the code in the schema.sql file found in the db folder to create the initial database. To seed the database, run 'npm run seed' in the integrated terminal. Then run 'node server.js' to open your server. The console will log the port number that the server is listening at. In insomnia you can now run get, put, post, and delete requests using localhost:portNumber/api/+ chosen endpoint (ex. products, tags/2, etc.). To exit the application and stop the server, press ctrl + c in the integrated terminal


  ## Credits
  Initial code provided by UCI Bootcamps
  Models and routes coded by S. D. McMillan
