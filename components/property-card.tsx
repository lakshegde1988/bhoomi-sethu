'use client'

import { formatDistanceToNow } from 'date-fns'

interface Property {
  id: number
  title: string
  description?: string
  address: string
  city: string
  state: string
  price?: number
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  propertyType: string
  status: string
  imageUrl?: string
  createdAt: Date
}

interface PropertyCardProps {
  property: Property
  onDelete: (id: number) => void
  onStatusChange: (id: number, status: string) => void
  isLoading: boolean
}

export default function PropertyCard({
  property,
  onDelete,
  onStatusChange,
  isLoading,
}: PropertyCardProps) {
  const statusColors: Record<string, string> = {
    active: 'bg-green-900/30 text-green-300 border-green-700',
    pending: 'bg-yellow-900/30 text-yellow-300 border-yellow-700',
    sold: 'bg-blue-900/30 text-blue-300 border-blue-700',
    rented: 'bg-purple-900/30 text-purple-300 border-purple-700',
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition">
      <div className="flex flex-col md:flex-row gap-4 p-6">
        {property.imageUrl && (
          <div className="md:w-48 h-40 rounded overflow-hidden flex-shrink-0">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        )}

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-white">{property.title}</h3>
              <p className="text-slate-400 text-sm">
                {property.address}, {property.city}, {property.state}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded text-xs font-medium border whitespace-nowrap ${
                statusColors[property.status] ||
                'bg-slate-700 text-slate-300 border-slate-600'
              }`}
            >
              {property.status}
            </span>
          </div>

          {property.description && (
            <p className="text-slate-300 text-sm mb-3 line-clamp-2">
              {property.description}
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 text-sm">
            {property.price && (
              <div>
                <p className="text-slate-400">Price</p>
                <p className="text-white font-semibold">
                  ${(property.price / 1000).toFixed(0)}k
                </p>
              </div>
            )}
            {property.bedrooms !== undefined && (
              <div>
                <p className="text-slate-400">Beds</p>
                <p className="text-white font-semibold">{property.bedrooms}</p>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div>
                <p className="text-slate-400">Baths</p>
                <p className="text-white font-semibold">{property.bathrooms}</p>
              </div>
            )}
            {property.squareFeet && (
              <div>
                <p className="text-slate-400">Sq Ft</p>
                <p className="text-white font-semibold">
                  {(property.squareFeet / 1000).toFixed(1)}k
                </p>
              </div>
            )}
            <div>
              <p className="text-slate-400">Type</p>
              <p className="text-white font-semibold capitalize">
                {property.propertyType}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Added {formatDistanceToNow(new Date(property.createdAt), { addSuffix: true })}
            </p>

            <div className="flex gap-2">
              <select
                value={property.status}
                onChange={(e) => onStatusChange(property.id, e.target.value)}
                disabled={isLoading}
                className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-sm text-white focus:outline-none focus:border-blue-500 disabled:opacity-50"
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
                <option value="rented">Rented</option>
              </select>

              <button
                onClick={() => onDelete(property.id)}
                disabled={isLoading}
                className="px-3 py-1 bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-700 rounded text-sm transition disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
