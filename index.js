let express = require('express');

let app = express();

app.use(express.json());

let catDatabase = ['Sparkles', 'Jumpy', 'Macy', 'Gogi', 'Barry', 'Banjo', 'Messi', 'Binx', 'Comet'];

/*
 we are going to use express.static()
 it takes the path to a folder in my project as a param
 - makes it so there are GET endpoints associated with every file in that folder 
 there will be a GET endpoint '/index.html' that serves as an html file as a response
 - a GET endpoint '/main.js' that serves the js file as a response
 - a GET endpoint '/styles.css' that serves the css file as a response
 - a GET endpoint '/' that serves the index.html's html as a response\
 app.use(express.static());

*/

app.use(express.static(__dirname + '/public'));


app.get('/cat', (req, res) => {
    let randomIndex = Math.floor(Math.random() * catDatabase.length + 1);

    res.status(200).send(catDatabase[randomIndex]);
})

app.listen(4000, () => {
    console.log('server is up on port 4000');
})