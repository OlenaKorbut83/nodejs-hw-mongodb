import ContactsCollection from '../db/models/Contact.js';

export const getContacts = () => ContactsCollection.find();
export const getContactById = (id) => ContactsCollection.findOne({ _id: id });
export const addContact = (payload) => ContactsCollection.create(payload);

export const updateContact = (id, payload) =>
  ContactsCollection.findOneAndUpdate({ _id: id }, payload, { new: true });

export const deleteContactById = (id) =>
  ContactsCollection.findOneAndDelete({ _id: id });
