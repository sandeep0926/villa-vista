import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Calendar, TrendingUp, Users, DollarSign, Star } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Properties",
      label: "Total Properties",
      value: "156",
      change: "+12%",
      icon: Home,
      trend: "up"
    },
    {
      title: "Active Bookings",
      label: "Active Bookings",
      value: "89",
      change: "+8%",
      icon: Calendar,
      trend: "up"
    },
    {
      title: "Total Revenue",
      label: "Total Revenue",
      value: "₹28.5L",
      change: "+23%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Avg. Rating",
      label: "Avg. Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      trend: "up"
    }
  ];

  const recentBookings = [
    { id: 1, villa: "Luxury Beach Villa", guest: "Amit Kumar", checkIn: "2025-12-01", status: "Confirmed", amount: "₹45,000" },
    { id: 2, villa: "Heritage Villa Udaipur", guest: "Priya Sharma", checkIn: "2025-12-05", status: "Pending", amount: "₹54,000" },
    { id: 3, villa: "Mountain Villa Manali", guest: "Rahul Singh", checkIn: "2025-12-10", status: "Confirmed", amount: "₹42,000" },
    { id: 4, villa: "Backwater Villa Kerala", guest: "Neha Patel", checkIn: "2025-12-15", status: "Confirmed", amount: "₹36,000" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Villa</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Guest</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Check-in</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 text-foreground">{booking.villa}</td>
                    <td className="py-3 px-4 text-muted-foreground">{booking.guest}</td>
                    <td className="py-3 px-4 text-muted-foreground">{booking.checkIn}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === "Confirmed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-foreground">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
