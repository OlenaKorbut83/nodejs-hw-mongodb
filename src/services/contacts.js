import ContactsCollection from '../db/models/Contact.js';

export const getContacts = () => ContactsCollection.find();
export const getContactById = (id) => ContactsCollection.findOne({ _id: id });
