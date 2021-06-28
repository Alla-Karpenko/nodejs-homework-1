const fs = require("fs").promises;
const path = require("path");
// const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");


async function listContacts() {
    try {
       const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        console.log(contacts);
    }
    catch (error) {
    //  error.message = "Cannot read contacts file";
    //  console.log(error);
     throw error;
    }
};

module.exports = listContacts;
// async function getContactById(contactId) {
//     try {
//         const contacts = await listContacts();
//         const findContacts = contacts.find(
//             (item) => item.contactId === contactId);
//         if (!findContacts) {
//             throw new Error("ContactId incorrect");
//         }
//         return findContacts;
//     } catch (error) {
//         throw error;
//     }
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// async function addContact(obj) {
//     const newContacts = { ...obj, id: v4(), name: "", email: "", phone:""};
// }


// module.exports = getContactById;
//   // removeContact,
// module.exports = addContact;

// module.exports = {
//     listContacts,
//     // getContactById,
//     // addContact,
// }