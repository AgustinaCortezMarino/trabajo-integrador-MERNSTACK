const Joi = require("joi");

const LugarSchema = Joi.object({
  name: Joi.string(),
  map: Joi.string().required(),
  lat: Joi.number().required(),
  long: Joi.number().required(),
  images: Joi.array().items(
    Joi.string().uri({ allowRelative: true, relativeOnly: true })
  ),
});
module.exports = LugarSchema;
