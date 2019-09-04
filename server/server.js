const express = require('express');

// create instance of express by calling the function returned above
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// start up our server
app.listen(port, () => {
    console.log('listening on port:', port);
})
