"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by visiting our 'Book Appointment' page, selecting your preferred doctor, and choosing an available time slot that works for you."
    },
    {
      question: "What happens if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule your appointment up to 4 hours before the scheduled time without any penalty. Simply log in to your account and manage your appointments."
    },
    {
      question: "How do online consultations work?",
      answer: "Online consultations take place through our secure video platform. You'll receive a link to join the consultation at the scheduled time. Make sure you have a stable internet connection and a device with a camera and microphone."
    },
    {
      question: "Are my medical records secure?",
      answer: "Yes, we take data security very seriously. All your medical records and personal information are encrypted and stored securely in compliance with healthcare privacy regulations."
    },
    {
      question: "Can I get prescriptions through online consultations?",
      answer: "Yes, doctors can issue prescriptions during online consultations when medically appropriate. These prescriptions can be sent directly to your preferred pharmacy."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods like PayPal and Apple Pay. Payment is processed securely at the time of booking."
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have questions or need assistance? We&apos;re here to help. Reach out to our team through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">Call us for immediate assistance</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                <p className="font-medium">contact@deardoctors.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground mb-2">Visit our headquarters</p>
                <p className="font-medium">123 Healthcare Avenue, Medical District, NY 10001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Appointment Inquiry"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <Card className="overflow-hidden">
                <div className="relative h-[400px] w-full bg-muted">
                  {/* This would be replaced with an actual map component in a real implementation */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Dear Doctors Headquarters</h3>
                      <p className="text-muted-foreground">
                        123 Healthcare Avenue, Medical District, NY 10001
                      </p>
                      <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span>Saturday: 10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span>Sunday: Closed</span>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-6">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
            <Button asChild>
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for health tips, service updates, and special offers.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button variant="secondary">Subscribe</Button>
            </form>
            <p className="text-sm mt-2 opacity-80 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}