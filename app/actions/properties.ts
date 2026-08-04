'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { properties } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function createProperty(data: {
  title: string
  description: string
  address: string
  city: string
  state: string
  zipCode: string
  price: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  propertyType: string
  imageUrl?: string
}) {
  const userId = await getUserId()

  const result = await db
    .insert(properties)
    .values({
      ...data,
      userId,
      price: data.price ? parseFloat(data.price) : null,
    })
    .returning({ id: properties.id })

  revalidatePath('/admin/properties')
  return result[0]
}

export async function updateProperty(
  id: number,
  data: {
    title?: string
    description?: string
    address?: string
    city?: string
    state?: string
    zipCode?: string
    price?: string
    bedrooms?: number
    bathrooms?: number
    squareFeet?: number
    propertyType?: string
    status?: string
    imageUrl?: string
  }
) {
  const userId = await getUserId()

  const updateData: any = { ...data }
  if (data.price) {
    updateData.price = parseFloat(data.price)
  }
  updateData.updatedAt = new Date()

  await db
    .update(properties)
    .set(updateData)
    .where(and(eq(properties.id, id), eq(properties.userId, userId)))

  revalidatePath('/admin/properties')
}

export async function deleteProperty(id: number) {
  const userId = await getUserId()

  await db
    .delete(properties)
    .where(and(eq(properties.id, id), eq(properties.userId, userId)))

  revalidatePath('/admin/properties')
}

export async function getProperties() {
  const userId = await getUserId()

  return db
    .select()
    .from(properties)
    .where(eq(properties.userId, userId))
    .orderBy(desc(properties.createdAt))
}

export async function getPropertyById(id: number) {
  const userId = await getUserId()

  const result = await db
    .select()
    .from(properties)
    .where(and(eq(properties.id, id), eq(properties.userId, userId)))

  return result[0]
}

export async function updatePropertyStatus(id: number, status: string) {
  const userId = await getUserId()

  await db
    .update(properties)
    .set({ status, updatedAt: new Date() })
    .where(and(eq(properties.id, id), eq(properties.userId, userId)))

  revalidatePath('/admin/properties')
}
