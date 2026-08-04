'use client'

import { useState } from 'react'
import { createProperty } from '@/app/actions/properties'
import { useRouter } from 'next/navigation'

export default function AddPropertyForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zipCode: formData.get('zipCode') as string,
      price: formData.get('price') as string,
      bedrooms: parseInt(formData.get('bedrooms') as string),
      bathrooms: parseInt(formData.get('bathrooms') as string),
      squareFeet: parseInt(formData.get('squareFeet') as string),
      propertyType: formData.get('propertyType') as string,
      imageUrl: formData.get('imageUrl') as string,
    }

    try {
      await createProperty(data)
      e.currentTarget.reset()
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add property')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Property</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-700 rounded text-red-300 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Property Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            placeholder="e.g., Modern Downtown Apartment"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            placeholder="Property details..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            placeholder="Street address"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              required
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            placeholder="0.00"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Bedrooms
            </label>
            <input
              type="number"
              name="bedrooms"
              min="0"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              min="0"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Sq Ft
            </label>
            <input
              type="number"
              name="squareFeet"
              min="0"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Property Type
          </label>
          <select
            name="propertyType"
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Image URL (optional)
          </label>
          <input
            type="url"
            name="imageUrl"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            placeholder="https://..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition disabled:opacity-50"
        >
          {isLoading ? 'Adding...' : 'Add Property'}
        </button>
      </form>
    </div>
  )
}
