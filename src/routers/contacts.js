import { Router } from 'express';
import {
  addContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../utils/validateBody.js';

import {
  addContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

import { isValideId } from '../middleware/isValideId.js';

export const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:id', isValideId, ctrlWrapper(getContactByIdController));

contactsRouter.post(
  '/',
  validateBody(addContactSchema),
  ctrlWrapper(addContactController),
);

contactsRouter.patch(
  '/:id',
  isValideId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

contactsRouter.delete('/:id', isValideId, ctrlWrapper(deleteContactController));
