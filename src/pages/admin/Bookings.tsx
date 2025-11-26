import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Eye } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminBookings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const bookings = [
    {
      id: "BK001",
      villa: "Luxury Beach Villa",
      guest: "Amit Kumar",
      email: "amit@example.com",
      checkIn: "2025-12-01",
      checkOut: "2025-12-05",
      guests: 6,
      amount: "₹60,000",
      status: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: "BK002",
      villa: "Heritage Villa Udaipur",
      guest: "Priya Sharma",
      email: "priya@example.com",
      checkIn: "2025-12-05",
      checkOut: "2025-12-08",
      guests: 4,
      amount: "₹54,000",
      status: "Pending",
      paymentStatus: "Pending"
    },
    {
      id: "BK003",
      villa: "Mountain Villa Manali",
      guest: "Rahul Singh",
      email: "rahul@example.com",
      checkIn: "2025-12-10",
      checkOut: "2025-12-13",
      guests: 5,
      amount: "₹42,000",
      status: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: "BK004",
      villa: "Backwater Villa Kerala",
      guest: "Neha Patel",
      email: "neha@example.com",
      checkIn: "2025-12-15",
      checkOut: "2025-12-18",
      guests: 8,
      amount: "₹36,000",
      status: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: "BK005",
      villa: "Royal Villa Jaipur",
      guest: "Sanjay Gupta",
      email: "sanjay@example.com",
      checkIn: "2025-12-20",
      checkOut: "2025-12-24",
      guests: 6,
      amount: "₹80,000",
      status: "Cancelled",
      paymentStatus: "Refunded"
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.villa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.guest.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || booking.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "refunded":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bookings Management</h1>
          <p className="text-muted-foreground mt-2">Track and manage all property bookings</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by booking ID, villa, or guest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Booking ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Villa</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Guest</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Check-in</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Check-out</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Payment</th>
                  <th className="text-right py-4 px-6 font-semibold text-foreground">Amount</th>
                  <th className="text-right py-4 px-6 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-4 px-6">
                      <span className="font-mono font-semibold text-foreground">{booking.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-foreground">{booking.villa}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-foreground">{booking.guest}</p>
                        <p className="text-sm text-muted-foreground">{booking.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{booking.checkIn}</td>
                    <td className="py-4 px-6 text-muted-foreground">{booking.checkOut}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-foreground">{booking.amount}</td>
                    <td className="py-4 px-6 text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No bookings found</p>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
