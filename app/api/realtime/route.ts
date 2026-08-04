import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const clients = new Set<ReadableStreamDefaultController>()

export async function GET(request: Request) {
  const headersList = await headers()
  const session = await auth.api.getSession({ headers: headersList })

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const stream = new ReadableStream({
    start(controller) {
      clients.add(controller)

      controller.enqueue(`: connected\n\n`)

      return () => {
        clients.delete(controller)
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}

export function broadcastUpdate(event: any) {
  const message = `data: ${JSON.stringify(event)}\n\n`
  clients.forEach((client) => {
    try {
      client.enqueue(message)
    } catch {
      clients.delete(client)
    }
  })
}
