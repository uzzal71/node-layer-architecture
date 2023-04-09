import app from './app';
import config from './config';
import connect from './db';
import { handleError, handleRequest } from './middlewares/index';

const PORT = config.APP_PORT || 3000;

app.use(handleRequest);

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
