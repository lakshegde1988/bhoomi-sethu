import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  decimal,
  integer,
  varchar,
  index,
} from 'drizzle-orm/pg-core'

// Better Auth Tables
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified'),
  name: text('name'),
  image: text('image'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
  userId: text('userId').notNull(),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId').notNull(),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  expiresAt: timestamp('expiresAt'),
  password: text('password'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// Real Estate Properties Table
export const properties = pgTable(
  'properties',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    address: text('address').notNull(),
    city: text('city'),
    state: text('state'),
    zipCode: text('zipCode'),
    price: decimal('price', { precision: 12, scale: 2 }),
    bedrooms: integer('bedrooms'),
    bathrooms: integer('bathrooms'),
    squareFeet: integer('squareFeet'),
    propertyType: varchar('propertyType', { length: 50 }),
    status: varchar('status', { length: 50 }).default('active'),
    imageUrl: text('imageUrl'),
    userId: text('userId').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
  },
  (table) => ({
    userIdIdx: index('idx_properties_userId').on(table.userId),
    statusIdx: index('idx_properties_status').on(table.status),
    createdAtIdx: index('idx_properties_createdAt').on(table.createdAt),
  })
)

export const propertyViews = pgTable('property_views', {
  id: serial('id').primaryKey(),
  propertyId: integer('propertyId').notNull(),
  viewCount: integer('viewCount').default(0),
  lastViewedAt: timestamp('lastViewedAt'),
  createdAt: timestamp('createdAt').defaultNow(),
})
