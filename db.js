import mongoose from 'mongoose';
import config from './config';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connect = async () => {
    try {
        await mongoose.connect(config.DB_URL, options);
    } catch (error) {
        throw new Error(error.message);
    }
};

export default connect;
