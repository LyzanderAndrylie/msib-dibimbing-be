import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  body: text('body').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
});
