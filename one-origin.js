const cors = require('cors')

const corsOptions = {
  origin: 'https://yourdomain.com',
}

app.get('/products/:id', cors(corsOptions), (req, res, next) => {
  //...
})