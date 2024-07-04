import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
        const array=[];
        for(let i=0; i<=number; i++){
          
          const contact = JSON.stringify(createFakeContact(number));
          array.push(contact);
          console.log(array);
        }

        try {
          await fs.appendFile(PATH_DB, array, 'utf8');
          console.log('Дані успішно додані до файлу.');
        } catch (err) {
          console.error('Помилка додавання даних до файлу:', err);
        }
      };

generateContacts(5);
