import { Schema, model } from 'mongoose';

const contactsShema = new Schema(
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
      enum: ['work', 'home', 'personal'],
      require: true,
      default: 'personal',
    },
  },
  { timestamps: true },
);

const ContactsCollection = model('contacts', contactsShema);
export default ContactsCollection;
