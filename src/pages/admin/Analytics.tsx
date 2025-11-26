import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Home, DollarSign } from "lucide-react";

const AdminAnalytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
        <p className="text-muted-foreground mt-2">Track your business performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₹28.5L</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+23%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">156</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unique Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Occupancy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">78%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">Chart visualization will be displayed here</p>
          </div>
        </CardContent>
      </Card>

      {/* Popular Destinations */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Villas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Luxury Beach Villa", bookings: 42, revenue: "₹6.3L" },
                { name: "Heritage Villa Udaipur", bookings: 38, revenue: "₹6.84L" },
                { name: "Backwater Villa Kerala", bookings: 35, revenue: "₹4.2L" },
                { name: "Mountain Villa Manali", bookings: 32, revenue: "₹4.48L" },
              ].map((villa, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{villa.name}</p>
                    <p className="text-sm text-muted-foreground">{villa.bookings} bookings</p>
                  </div>
                  <p className="font-semibold text-foreground">{villa.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: "November", bookings: 52, growth: "+12%" },
                { month: "October", bookings: 48, growth: "+8%" },
                { month: "September", bookings: 45, growth: "+15%" },
                { month: "August", bookings: 39, growth: "+5%" },
              ].map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{trend.month}</p>
                    <p className="text-sm text-muted-foreground">{trend.bookings} bookings</p>
                  </div>
                  <span className="text-green-600 font-semibold">{trend.growth}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
