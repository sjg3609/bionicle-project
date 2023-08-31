const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const bionicleRouter = require('./routes/bionicle.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/bionicle/:id', (req, res) => {
  axios.get(`/api/v3.asmx/getSets?apiKey=${process.env.BIONICLE_API_KEY}&userHash=${process.env.USER_HASH}&params=${req.params.id}`).then((response) => {
    console.log("This should be my data", response.data);
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
})

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/bionicle', bionicleRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5009;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
