import expressWinston from 'express-winston';
import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const getMessage = (req) => {
    const obj = {
        correlationId: req.headers['x-correlation-id'],
        requestBody: req.body,
    };

    return JSON.stringify(obj);
};

const mongoErrorTransport = (uri) => {
    new winston.transports.MongoDB({
        db: uri,
        metaKey: 'meta',
    });
};

const HOST = process.env.ELASTICSEARCH_HOST || 'localhost';

const elasticsearchOptions = {
    level: 'info',
    clientOpts: { node: `http://${HOST}:9200` },
    indexPrefix: 'log',
};

const esTransport = new ElasticsearchTransport(elasticsearchOptions);

export const infoLogger = () => {
    expressWinston.logger({
        transports: [new winston.transports.Console(), esTransport],
        format: winston.format.combine(winston.format.colorize(), winston.format.json()),
        meta: false,
        msg: getMessage,
    });
};

export const errorLogger = (uri) => {
    expressWinston.errorLogger({
        transports: [new winston.transports.Console(), mongoErrorTransport(uri), esTransport],
        format: winston.format.combine(winston.format.colorize(), winston.format.json()),
        meta: true,
        msg: '{ "correlationId": "{{req.headers["x-correlation-id"]}}", "error": "{{err.message}}" }',
    });
};

export default {};
