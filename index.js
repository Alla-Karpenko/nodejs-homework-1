const contacts = require("./contacts.js");
const { Command } = require("commander");
const program = new Command();

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



  async function invokeAction({ action, id, name, email, phone }) {
   
        switch (action) {
          case "list":
            const listContacts = await contacts.listContacts();
            console.table(listContacts);
            break;

          case "get":
            const getContactById = await contacts.getContactById( id );
            console.table(getContactById);
            break;

          case "add":
            const resultNewContact = await contacts.addContact({
              name,
              email,
              phone
            });
            console.table(resultNewContact);
            break;

          case "remove":
            const removeContact = await contacts.removeContact(id);
              console.table(removeContact);
          default:
            console.warn("\x1B[31m Unknown action type!");
        }
};

invokeAction(argv);