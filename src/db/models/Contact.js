import { Schema, model } from 'mongoose';
import { typeList } from '../../constants/contacts.js';
// import { json } from 'express';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    email: String,

    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      require: true,
      default: typeList[2],
    },
  },
  { versionKey: false, timestamps: true },
);

export const contactSortField = [
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
];

const ContactsCollection = model('contacts', contactsSchema);
export default ContactsCollection;
