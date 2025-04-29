import Joi from 'joi';
import { typeList } from '../constants/contacts.js';

export const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must be at most 20 characters long',
  }),
  phoneNumber: Joi.string().required(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...typeList)
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must be at most 20 characters long',
  }),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});
