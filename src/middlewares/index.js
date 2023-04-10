import { BadRequest, GeneralError } from '../utilities/errors';

export const handleError = async (err, req, res) => {
    let code = 500;
    if (err instanceof GeneralError) {
        code = err.getCode();
    }

    const correlationId = req.headers['x-correlation-id'];
    return res.status(code).json({
        correlationId,
        status: code,
        message: err.message,
    });
};

export const handleRequest = async (req, res, next) => {
    let correlationId = req.headers['x-correlation-id'];
    if (!correlationId) {
        correlationId = Date.now().toString();
        req.headers['x-correlation-id'] = correlationId;
    }

    res.set('x-correlation-id', correlationId);

    return next();
};

export const handleValidation = (validate) => (req, res, next) => {
    const result = validate(req.body);
    const isValid = result.error == null;
    if (isValid) {
        return next();
    }

    const { details } = result.error;
    const messages = details.map((e) => e.message);
    const msg = messages.join(',');
    throw new BadRequest(msg);
};
