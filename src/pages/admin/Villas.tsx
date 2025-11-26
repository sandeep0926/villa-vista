import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const AdminVillas = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const villas = [
    {
      id: 1,
      name: "Luxury Beach Villa",
      location: "North Goa, Goa",
      price: "₹15,000",
      status: "Active",
      bedrooms: 4,
      guests: 8,
      bookings: 24,
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=400"
    },
    {
      id: 2,
      name: "Heritage Villa Udaipur",
      location: "Udaipur, Rajasthan",
      price: "₹18,000",
      status: "Active",
      bedrooms: 3,
      guests: 6,
      bookings: 18,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400"
    },
    {
      id: 3,
      name: "Mountain Villa Manali",
      location: "Manali, Himachal Pradesh",
      price: "₹14,000",
      status: "Inactive",
      bedrooms: 3,
      guests: 6,
      bookings: 15,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=400"
    },
    {
      id: 4,
      name: "Backwater Villa Kerala",
      location: "Alleppey, Kerala",
      price: "₹12,000",
      status: "Active",
      bedrooms: 5,
      guests: 10,
      bookings: 32,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400"
    }
  ];

  const filteredVillas = villas.filter(villa =>
    villa.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    villa.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Villa Management</h1>
          <p className="text-muted-foreground mt-2">Manage your property listings</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Villa
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search villas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Villas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVillas.map((villa) => (
          <Card key={villa.id} className="overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-48 h-48 sm:h-auto">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{villa.name}</h3>
                    <p className="text-sm text-muted-foreground">{villa.location}</p>
                  </div>
                  <Badge variant={villa.status === "Active" ? "default" : "secondary"}>
                    {villa.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Price/night:</span>
                    <p className="font-semibold text-foreground">{villa.price}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Capacity:</span>
                    <p className="font-semibold text-foreground">{villa.guests} guests</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Bedrooms:</span>
                    <p className="font-semibold text-foreground">{villa.bedrooms}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total Bookings:</span>
                    <p className="font-semibold text-foreground">{villa.bookings}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminVillas;
