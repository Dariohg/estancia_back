const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Comenta todas las llamadas a `use()` excepto una
// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5000'); // Reemplaza esto con el origen adecuado de tu aplicación
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// app.use('/api/contrato', require('./src/routes/contrato.route'));

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running at port ' + (process.env.PORT || 5000));
});
