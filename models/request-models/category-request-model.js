import Joi from 'joi';

const schema = Joi.object().keys({
    parent_id: Joi.string().required(),
    name: Joi.string().min(5).max(50).required(),
    slug: Joi.string().min(5).max(50).required(),
    index: Joi.string().empty(0),
});

const validate = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

export default validate;
