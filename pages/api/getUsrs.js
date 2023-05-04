// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from '../../lib/mongo';

let collection;
let db;
const dbName = 'sales';


async function init() {
  if (db) return;
  try {
    await client.connect();
    db = await client.db(dbName);
    collection = await db.collection('sales_completed');
  } catch (eror) {
    throw new Error(eror)
  }
}

(async () => {
  await init();
})();

export default async function getUser(req, res) {
  try {
    if (!collection) await init();
    const result = await collection.find({}).map((el) => ({ ...el, _id: el._id.toString() })).toArray();
    res.send(result);
  } catch (error) {
    throw new Error(error)
  } finally {
    await client.close();
  }
}
