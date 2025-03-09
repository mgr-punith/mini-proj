import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  MessageSquare, 
  CalendarClock, 
  ClipboardCheck, 
  Stethoscope, 
  Pill, 
  Brain, 
  Heart, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Consultation",
      description: "Connect with doctors face-to-face through our secure video platform for personalized medical advice.",
      features: [
        "HD quality video calls",
        "End-to-end encryption",
        "Screen sharing for medical reports",
        "Digital prescriptions",
        "Follow-up scheduling"
      ],
      price: "$50",
      duration: "30 minutes"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Chat Consultation",
      description: "Text-based consultations for quick medical advice, follow-ups, and non-emergency situations.",
      features: [
        "Instant messaging",
        "Image sharing",
        "Medical history access",
        "Digital prescriptions",
        "7-day chat history"
      ],
      price: "$30",
      duration: "Unlimited for 24 hours"
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-primary" />,
      title: "Appointment Booking",
      description: "Schedule in-person or virtual appointments with your preferred doctors at convenient times.",
      features: [
        "Real-time availability",
        "Instant confirmation",
        "Reminder notifications",
        "Easy rescheduling",
        "Pre-appointment questionnaires"
      ],
      price: "Free",
      duration: "Booking service"
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: "Health Records",
      description: "Secure storage and management of your medical history, reports, and prescriptions in one place.",
      features: [
        "Unlimited storage",
        "Secure encryption",
        "Easy sharing with doctors",
        "Organized categorization",
        "Document scanning"
      ],
      price: "Free",
      duration: "With any consultation"
    }
  ];

  const specialtyServices = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "General Medicine",
      description: "Consultations for common illnesses, preventive care, and general health concerns."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Mental Health",
      description: "Professional support for anxiety, depression, stress management, and other mental health issues."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Cardiology",
      description: "Specialized care for heart conditions, hypertension, and cardiovascular health."
    },
    {
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Dermatology",
      description: "Expert advice for skin conditions, allergies, and cosmetic dermatology concerns."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                Our Healthcare Services
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Comprehensive medical solutions designed to provide quality care from the comfort of your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Expert Doctors</h3>
                    <p className="text-muted-foreground">Access to board-certified specialists across multiple disciplines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Convenient Access</h3>
                    <p className="text-muted-foreground">24/7 availability for consultations from anywhere</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Personalized Care</h3>
                    <p className="text-muted-foreground">Tailored medical advice based on your unique health profile</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" size="lg" asChild>
                <Link href="/book-appointment">Book a Service</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Doctor providing consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet your medical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="text-xl font-bold text-primary">{service.price}</p>
                    <p className="text-xs text-muted-foreground">{service.duration}</p>
                  </div>
                  <Button asChild>
                    <Link href="/book-appointment">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Specialty Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert care across various medical specialties
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="mental">Mental Health</TabsTrigger>
                <TabsTrigger value="cardio">Cardiology</TabsTrigger>
                <TabsTrigger value="derma">Dermatology</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1666214280391-8b54a75def7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="General medicine consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">General Medicine</h3>
                  <p className="text-muted-foreground">
                    Our general medicine services cover a wide range of common health concerns, from colds and flu to chronic disease management. Our primary care physicians provide comprehensive care for patients of all ages.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Preventive Care</h4>
                        <p className="text-sm text-muted-foreground">Regular check-ups and screenings to maintain good health</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Acute Illness Treatment</h4>
                        <p className="text-sm text-muted-foreground">Diagnosis and treatment for sudden illnesses and infections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Chronic Disease Management</h4>
                        <p className="text-sm text-muted-foreground">Ongoing care for conditions like diabetes, hypertension, and asthma</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Health Education</h4>
                        <p className="text-sm text-muted-foreground">Guidance on maintaining a healthy lifestyle and preventing disease</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/find-doctors">Find a General Physician</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mental" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mental health consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Mental Health Services</h3>
                  <p className="text-muted-foreground">
                    Our mental health professionals provide compassionate care for a range of psychological and emotional concerns, helping you achieve better mental wellbeing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Therapy Sessions</h4>
                        <p className="text-sm text-muted-foreground">Individual counseling with licensed therapists</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Anxiety & Depression</h4>
                        <p className="text-sm text-muted-foreground">Specialized treatment for mood and anxiety disorders</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Stress Management</h4>
                        <p className="text-sm text-muted-foreground">Techniques and strategies to cope with life stressors</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Psychiatric Consultation</h4>
                        <p className="text-sm text-muted-foreground">Medication management with board-certified psychiatrists</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/find-doctors">Find a Mental Health Professional</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cardio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Cardiology consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Cardiology Services</h3>
                  <p className="text-muted-foreground">
                    Our cardiology specialists provide expert care for heart conditions, helping you maintain cardiovascular health and manage heart-related issues.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Heart Health Assessment</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive evaluation of cardiovascular risk factors</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Hypertension Management</h4>
                        <p className="text-sm text-muted-foreground">Monitoring and treatment for high blood pressure</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">ECG Interpretation</h4>
                        <p className="text-sm text-muted-foreground">Analysis of electrocardiogram results</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Post-Cardiac Event Care</h4>
                        <p className="text-sm text-muted-foreground">Follow-up care after heart attacks or procedures</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/find-doctors">Find a Cardiologist</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="derma" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317328-4922e464170d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Dermatology consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Dermatology Services</h3>
                  <p className="text-muted-foreground">
                    Our dermatologists provide expert care for all skin, hair, and nail conditions, helping you maintain healthy skin and address cosmetic concerns.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Skin Condition Treatment</h4>
                        <p className="text-sm text-muted-foreground">Diagnosis and care for acne, eczema, psoriasis, and more</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Skin Cancer Screening</h4>
                        <p className="text-sm text-muted-foreground">Evaluation of suspicious moles and lesions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Cosmetic Dermatology</h4>
                        <p className="text-sm text-muted-foreground">Advice on anti-aging treatments and skin care</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Hair and Nail Disorders</h4>
                        <p className="text-sm text-muted-foreground">Treatment for hair loss and nail conditions</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/find-doctors">Find a Dermatologist</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* More Specialties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">More Medical Specialties</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer consultations across a wide range of medical fields
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Pediatrics",
              "Gynecology",
              "Orthopedics",
              "Neurology",
              "Endocrinology",
              "Ophthalmology",
              "Urology",
              "Gastroenterology",
              "Pulmonology",
              "Nephrology",
              "Rheumatology",
              "Oncology"
            ].map((specialty, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <h3 className="font-medium">{specialty}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/find-doctors" className="flex items-center">
                Find Specialists <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">How Our Services Work</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process to get the care you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose a Service</h3>
              <p className="text-muted-foreground">
                Select the type of consultation or service you need from our comprehensive offerings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Find a Doctor</h3>
              <p className="text-muted-foreground">
                Browse through our network of specialists and choose based on expertise and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
              <p className="text-muted-foreground">
                Select a convenient time slot and confirm your appointment with a simple booking process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Care</h3>
              <p className="text-muted-foreground">
                Connect with your doctor through video, chat, or in-person and receive quality healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book an appointment with a specialist today and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}