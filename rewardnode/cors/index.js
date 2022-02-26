/***
 * Using Cross-Origin Resource Sharing (CORS)
 * to allow the front-end to access the server
 */

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
