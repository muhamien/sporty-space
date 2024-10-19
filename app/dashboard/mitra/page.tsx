import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MitraDashboard() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Mitra Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Fields</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have no fields listed.</p>
            <Button className="mt-4">Add New Field</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No current bookings for your fields.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}