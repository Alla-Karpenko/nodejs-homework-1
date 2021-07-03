const contacts = require("./contacts");
const { program } = require("commander");

// (async () => {
//     try {
//         const listContacts = await contacts.listContacts();
        
      

//         const getContactById = await contacts.getContactById(9);
       
        

//         
       
//         const resultNewContact = await contacts.addContact(newContacts);
//          console.log(resultNewContact)
                   
  
//         const removeContact = await contacts.removeContact(9)
//         console.log(removeContact);

//   } catch (error) {
//     console.log(error.message);
//   }
// })()
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

  program.parse(process.argv);

  const argv = program.opts();
   
// index.js
// const argv = require('yargs').argv;

// TODO: рефакторить
  async function invokeAction({ action, id, name, email, phone }) {
   
        switch (action) {
          case "list":
            const listContacts = await contacts.listContacts();
            console.table(listContacts);
            // contacts.listContacts().then((data) => console.table(data));
            break;

          case "get":
            const getContactById = await contacts.getContactById(id);
            console.table(getContactById);
            // contacts
            //   .getContactById(id)
            //   .then((data) => console.table(data));
            break;

          case "add":
            const resultNewContact = await contacts.addContact(
              name,
              email,
              phone
            );
            console.log(resultNewContact);
            // contacts
            //   .addContact(name, email, phone)
            //   .then((data) => console.table(data));
            break;

          case "remove":
            const removeContact = await contacts.removeContact(id);
                console.log(removeContact);
          // contacts.removeContact(id).then((data) => console.table(data));
          // break;

          default:
            console.warn("\x1B[31m Unknown action type!");
        }
    }

invokeAction(argv);