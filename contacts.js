const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
    try {
       const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return contacts;
    }
    catch (error) {
     error.message = "Cannot read contacts file";
    }
};

async function getContactById(contactId) {
  try {
      const contacts = await listContacts();
    const findContacts = contacts.find((item) => item.id === contactId);
        if (!findContacts) {
          throw new Error("Id incorrect");
        }
    return findContacts;
  } catch (error) {
  console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
      const filterContact = contacts.filter(item => item.id !== contactId);
      return filterContact;
  } catch (error) {
     console.log(error.message);
  }
}

async function addContact({name, email, phone}) {
  
    const newContact = { id: v4(), name, email, phone };
  
    try {
        const contacts = await listContacts();
        const newContacts = [...contacts, newContact];
        return newContacts;
    } catch (error) {
       console.log(error.message);
    }
}

module.exports = { listContacts, getContactById, addContact, removeContact };

