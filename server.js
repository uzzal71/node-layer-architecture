import app from './app';
import config from './config';
import connect from './db';
import { infoLogger } from './logger';
import { handleError, handleRequest } from './middlewares/index';

const PORT = config.APP_PORT || 3000;

app.use(handleRequest);

if (config.APP_ENV !== 'development') {
    app.use(infoLogger());
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

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
