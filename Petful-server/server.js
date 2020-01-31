const express = require('express');
const cors = require('cors');
const dogRoute = require('./src/dog-router');
const catRoute = require('./src/cat-router');

const app = express();
app.use(cors(/*{
  origin: CLIENT_ORIGIN
}*/));

app.use('/api/dog', dogRoute);
app.use('/api/cat', catRoute);

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});