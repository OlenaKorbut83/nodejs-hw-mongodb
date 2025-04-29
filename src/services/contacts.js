import ContactsCollection from '../db/models/Contact.js';

import { calcPaginationData } from '../utils/calcPaginationData.js';

import { sortList } from '../constants/index.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = sortList[0],
}) => {
  const skip = (page - 1) * perPage;
  const data = await ContactsCollection.find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await ContactsCollection.find().countDocuments();

  const paginationData = calcPaginationData({ page, perPage, totalItems });
  return {
    data,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};
export const getContactById = (id) => ContactsCollection.findOne({ _id: id });
export const addContact = (payload) => ContactsCollection.create(payload);

export const updateContact = (id, payload) =>
  ContactsCollection.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

export const deleteContactById = (id) =>
  ContactsCollection.findOneAndDelete({ _id: id });
