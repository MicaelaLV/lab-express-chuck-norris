const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.use(express.static('public'));


app.set("views", __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (request, response, next) => {
    console.log("There are dead people here too");
    response.send(`
    <!doctype html>
        <html>
          <head>
              <link rel="stylesheet" href="css/style.css">
          </head>
      <body>
        <h1>I see dead people</h1> 
      </body>
    </html> 
    `)
})

app.get('/random', (request, response, next) => {
    console.log("There are dead people in random too");
    response.send(`
    <!doctype html>
        <html>
          <head>
              <link rel="stylesheet" href="css/style.css">
          </head>
      <body>
        <h1>random dead people here</h1> 
      </body>
    </html> 
    `)
})


app.get('/categories', (request, response, next) => {
    console.log("There are dead people in random too");
    response.send(`
    <!doctype html>
        <html>
          <head>
              <link rel="stylesheet" href="css/style.css">
          </head>
      <body>
        <h1>categories dead people here</h1> 
      </body>
    </html> 
    `)
})



app.get('/search', (request, response, next) => {
    console.log("There are dead people in random too");
    response.send(`
    <!doctype html>
        <html>
          <head>
              <link rel="stylesheet" href="css/style.css">
          </head>
      <body>
        <h1>categories dead people here</h1> 
      </body>
    </html> 
    `)
})

app.listen(3000, () => {
    console.log("I see dead people");
})