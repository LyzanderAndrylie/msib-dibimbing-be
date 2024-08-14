import 'dotenv/config';
import { db } from './db';
import { notes } from './schema';

async function main() {
  await insertNotes();
}

async function insertNotes() {
  const notesData = Array.from({ length: 4 }, (_, i) => ({
    title: `Title ${i}`,
    body: `${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  }));

  await db.insert(notes).values(notesData).onConflictDoNothing();
}

main()
  .then(() => {
    console.log('Seed complete');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
