import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { getProperties } from '@/app/actions/properties'
import PropertyList from '@/components/property-list'
import AddPropertyForm from '@/components/add-property-form'

export default async function AdminPropertiesPage() {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session?.user) {
    redirect('/sign-in')
  }

  const properties = await getProperties()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Real Estate Admin Portal
          </h1>
          <p className="text-slate-300">Manage your property listings in real-time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AddPropertyForm />
          </div>

          <div className="lg:col-span-2">
            <PropertyList initialProperties={properties} />
          </div>
        </div>
      </div>
    </div>
  )
}
