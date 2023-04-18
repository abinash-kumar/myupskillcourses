// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from '../../lib/mongo';

let client;
let db;
let collection;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
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
  }
}
