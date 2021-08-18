let express = require('express');
let app = express();
let path = require('path');
let morgan = require('morgan');
let dotenv = require('dotenv');
app.use('/', require('./routes/index'));
dotenv.config({ path: './config/config.env' });

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${(PORT)}`)
)