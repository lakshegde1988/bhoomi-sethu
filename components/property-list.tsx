'use client'

import { useEffect, useState } from 'react'
import { getProperties, deleteProperty, updatePropertyStatus } from '@/app/actions/properties'
import PropertyCard from './property-card'

export default function PropertyList({ initialProperties }: { initialProperties: any[] }) {
  const [properties, setProperties] = useState(initialProperties)
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const connectToRealtime = () => {
      try {
        const eventSource = new EventSource('/api/realtime')

        eventSource.onopen = () => {
          setIsConnected(true)
        }

        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data)
            if (data.type === 'property-updated') {
              refreshProperties()
            }
          } catch (err) {
            console.error('[v0] Failed to parse realtime message:', err)
          }
        }

        eventSource.onerror = () => {
          setIsConnected(false)
          eventSource.close()
          setTimeout(connectToRealtime, 3000)
        }

        return () => eventSource.close()
      } catch (err) {
        console.error('[v0] Realtime connection failed:', err)
      }
    }

    const unsubscribe = connectToRealtime()
    return () => unsubscribe?.()
  }, [])

  async function refreshProperties() {
    try {
      const updated = await getProperties()
      setProperties(updated)
    } catch (err) {
      console.error('[v0] Failed to refresh properties:', err)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to delete this property?')) return

    try {
      setIsLoading(true)
      await deleteProperty(id)
      setProperties(properties.filter((p) => p.id !== id))
    } catch (err) {
      console.error('[v0] Delete failed:', err)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleStatusChange(id: number, status: string) {
    try {
      setIsLoading(true)
      await updatePropertyStatus(id, status)
      setProperties(
        properties.map((p) => (p.id === id ? { ...p, status } : p))
      )
    } catch (err) {
      console.error('[v0] Status update failed:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-2xl font-bold text-white">Your Listings</h2>
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className="text-sm text-slate-300">
          {isConnected ? 'Live' : 'Offline'}
        </span>
      </div>

      <div className="space-y-4">
        {properties.length === 0 ? (
          <div className="text-center py-8 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-slate-300">No properties yet. Add one to get started!</p>
          </div>
        ) : (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
              isLoading={isLoading}
            />
          ))
        )}
      </div>
    </div>
  )
}
