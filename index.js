// const contacts = require("./contacts");

const contacts = require("./contacts");
// const getContactById = require("./contacts");


(async () => {
    try {
        const listContacts = await contacts.listContacts;
        console.log(listContacts);
    }
    catch (error) {
        console.log(error.message);
    }
})

// module.exports = {
//   contacts,
// //   getContactById,
// //   addContact,
// };

// fs.readFile("db/contacts.json")
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log(err.message));

