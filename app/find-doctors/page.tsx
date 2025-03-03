import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Video,
  MessageSquare,
  Clock,
  ChevronRight
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function FindDoctors() {
  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      location: "New York, NY",
      experience: "15 years",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Today", "Tomorrow"],
      consultationFee: "$100",
      education: "Harvard Medical School",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      location: "Boston, MA",
      experience: "12 years",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Tomorrow"],
      consultationFee: "$120",
      education: "Johns Hopkins University",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      location: "Chicago, IL",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Today", "Tomorrow"],
      consultationFee: "$90",
      education: "Stanford University",
      languages: ["English", "Spanish"],
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Dermatologist",
      location: "Los Angeles, CA",
      experience: "8 years",
      rating: 4.7,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Tomorrow"],
      consultationFee: "$110",
      education: "UCLA Medical School",
      languages: ["English"],
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Endocrinologist",
      location: "San Francisco, CA",
      experience: "14 years",
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Today"],
      consultationFee: "$130",
      education: "UCSF School of Medicine",
      languages: ["English", "Hindi"],
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialty: "Orthopedic Surgeon",
      location: "Seattle, WA",
      experience: "20 years",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      availability: ["Today", "Tomorrow"],
      consultationFee: "$150",
      education: "University of Washington",
      languages: ["English"],
    },
  ];

  // Sample specialties
  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Dermatology",
    "Endocrinology",
    "Orthopedics",
    "Gynecology",
    "Ophthalmology",
    "Psychiatry",
    "Urology",
    "Oncology",
    "Gastroenterology",
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Find Doctors</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Search for specialists, check their availability, and book appointments with top healthcare professionals.
          </p>

          <div className="bg-card shadow-sm rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by doctor name, specialty, or condition"
                  className="pl-10"
                />
              </div>
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Location" className="pl-10" />
              </div>
              <Button className="flex items-center gap-2">
                <Search className="h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" className="text-sm">
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Specialties</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`specialty-${index}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor={`specialty-${index}`}
                          className="ml-2 text-sm text-muted-foreground"
                        >
                          {specialty}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Availability</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="available-today"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="available-today"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Available Today
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="available-tomorrow"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="available-tomorrow"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Available Tomorrow
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="available-weekend"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="available-weekend"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Available on Weekend
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Consultation Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="video-consultation"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="video-consultation"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Video Consultation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="chat-consultation"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="chat-consultation"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Chat Consultation
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Experience</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="exp-0-5"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="exp-0-5"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        0-5 years
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="exp-5-10"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="exp-5-10"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        5-10 years
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="exp-10-plus"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="exp-10-plus"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        10+ years
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Languages</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lang-english"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="lang-english"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        English
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lang-spanish"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="lang-spanish"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Spanish
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lang-mandarin"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="lang-mandarin"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Mandarin
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lang-hindi"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="lang-hindi"
                        className="ml-2 text-sm text-muted-foreground"
                      >
                        Hindi
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Doctor Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{doctors.length}</span> doctors
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded-md p-1">
                  <option>Relevance</option>
                  <option>Rating: High to Low</option>
                  <option>Experience: High to Low</option>
                  <option>Fee: Low to High</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-4 flex flex-col items-center justify-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(doctor.rating)
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {doctor.reviews} reviews
                        </p>
                      </div>
                    </div>

                    <div className="md:w-2/4 p-4 border-t md:border-t-0 md:border-l md:border-r border-border">
                      <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                      <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {doctor.location}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {doctor.experience} exp
                        </Badge>
                        {doctor.languages.map((language, index) => (
                          <Badge key={index} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-sm mb-3">
                        <span className="font-medium">Education:</span> {doctor.education}
                      </p>
                      
                      <Tabs defaultValue="appointment">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="appointment" className="text-xs">Appointment</TabsTrigger>
                          <TabsTrigger value="consultation" className="text-xs">Consultation</TabsTrigger>
                        </TabsList>
                        <TabsContent value="appointment" className="pt-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-1 text-primary" />
                            <span className="font-medium mr-2">Available:</span>
                            <div className="flex gap-1">
                              {doctor.availability.map((day, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {day}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="consultation" className="pt-2">
                          <div className="flex items-center text-sm">
                            <div className="flex gap-2">
                              <Badge variant="outline" className="flex items-center">
                                <Video className="h-3 w-3 mr-1" />
                                Video
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                Chat
                              </Badge>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="md:w-1/4 p-4 bg-muted/20 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Consultation Fee</p>
                        <p className="text-xl font-semibold text-primary mb-4">
                          {doctor.consultationFee}
                        </p>
                        <div className="space-y-2">
                          <Button className="w-full" asChild>
                            <Link href="/book-appointment">Book Appointment</Link>
                          </Button>
                          <Button variant="outline" className="w-full">
                            View Profile
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">
                        <p>Next available: Today, 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}