import app from './app';
import connect from './db';
import routeConfiguration from './src/routes';
import config from './src/config';
import { handleError, handleRequest } from './src/middlewares/index';

const PORT = config.APP_PORT || 3000;

app.use(handleRequest);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: `Server running on port ${PORT}`,
        apiUrl: `${config.APP_URL}/api/v1`,
    });
});

routeConfiguration(app);

app.use(handleError);

connect()
    .then(() => {
        app.listen(PORT, () => {
            connect();
            console.log('Database connected');
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
