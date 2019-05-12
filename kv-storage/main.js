import {storage} from '/kv/kv-polyfill.js';

const main = async () => {
  const name = await storage.get('name');
  console.log(name);
  await storage.set('name', "Suman bogati");
};

main();