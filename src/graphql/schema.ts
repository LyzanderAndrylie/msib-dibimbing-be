import { Resolvers } from './resolvers-types';
import { db } from '@/drizzle/db';
import { desc, eq } from 'drizzle-orm';
import { notes } from '@/drizzle/schema';
import { Order } from './resolvers-types';
import { asc } from 'drizzle-orm';
import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from 'graphql-constraint-directive';

export const typeDefs = `#graphql
  type Note {
    id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  type Query {
    notes(orderBy: NoteOrderByInput): [Note!]!
    note(id: ID!): Note
  }

  input NoteOrderByInput {
    createdAt: Order
  }

  enum Order {
    asc
    desc
  }

  type Mutation {
    createNote(input: NoteInput!): Note
    updateNote(id: ID!, input: NoteInput!): Note
    deleteNote(id: ID!): Note
  }

  input NoteInput {
    title: String! @constraint(minLength: 1)
    body: String! @constraint(minLength: 1)
  }
`;

export const resolvers: Resolvers = {
  Query: {
    async notes(_, { orderBy }) {
      let order;
      if (orderBy?.createdAt === Order.Asc) order = [asc(notes.createdAt)];
      if (orderBy?.createdAt === Order.Desc) order = [desc(notes.createdAt)];

      return await db.query.notes.findMany({
        orderBy: order,
      });
    },
    async note(_, { id }) {
      const note = await db.query.notes.findFirst({ where: eq(notes.id, id) });

      if (!note) throw new Error('Note not found');

      return note;
    },
  },
  Mutation: {
    async createNote(_, { input: { title, body } }) {
      const [newNote] = await db
        .insert(notes)
        .values({
          title: title,
          body: body,
        })
        .returning();

      return newNote;
    },
    async updateNote(_, { id, input: { title, body } }) {
      const [updatedNode] = await db
        .update(notes)
        .set({
          title,
          body,
        })
        .where(eq(notes.id, id))
        .returning();

      if (!updatedNode) throw new Error('Note not found');

      return updatedNode;
    },
    async deleteNote(_, { id }) {
      const [deletedNote] = await db
        .delete(notes)
        .where(eq(notes.id, id))
        .returning();

      if (!deletedNote) throw new Error('Note not found');

      return deletedNote;
    },
  },
};

export let schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, typeDefs],
  resolvers,
});
schema = constraintDirective()(schema);
