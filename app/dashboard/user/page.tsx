import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UserDashboard() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have no current bookings.</p>
            <Button className="mt-4">Book a Field</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Games</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No upcoming games scheduled.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}