import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import WarriorsAidLogo from "../../logo"

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <WarriorsAidLogo />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#mission" className="text-sm font-medium transition-colors hover:text-primary">
              Our Mission
            </Link>
            <Link href="/#impact" className="text-sm font-medium transition-colors hover:text-primary">
              Our Impact
            </Link>
            <Link href="/#join" className="text-sm font-medium transition-colors hover:text-primary">
              Join Us
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#join">Donate Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Volunteer</h1>
              <p className="text-xl text-muted-foreground">
                Join our team of dedicated volunteers making a difference in veterans' lives
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">
                Volunteer Opportunities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Peer Support</CardTitle>
                    <CardDescription>Connect with veterans in need</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Provide companionship and emotional support to veterans through regular visits or calls.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Event Coordination</CardTitle>
                    <CardDescription>Help organize community events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Assist in planning and executing fundraisers, awareness campaigns, and veteran gatherings.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <Heart className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Resource Navigation</CardTitle>
                    <CardDescription>Guide veterans to services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Help veterans navigate available resources and connect them with appropriate support services.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Volunteer Form */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Volunteer Application</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your street address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          {/* Add more states as needed */}
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="ZIP Code" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Are you a veteran?</Label>
                    <RadioGroup defaultValue="no" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="veteran-yes" />
                        <Label htmlFor="veteran-yes" className="cursor-pointer">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="veteran-no" />
                        <Label htmlFor="veteran-no" className="cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>I'm interested in volunteering for:</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="peer-support" />
                        <Label htmlFor="peer-support" className="cursor-pointer">
                          Peer Support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="event-coordination" />
                        <Label htmlFor="event-coordination" className="cursor-pointer">
                          Event Coordination
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="resource-navigation" />
                        <Label htmlFor="resource-navigation" className="cursor-pointer">
                          Resource Navigation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fundraising" />
                        <Label htmlFor="fundraising" className="cursor-pointer">
                          Fundraising
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="administrative" />
                        <Label htmlFor="administrative" className="cursor-pointer">
                          Administrative Support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="availability">Availability</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekday-mornings" />
                        <Label htmlFor="weekday-mornings" className="cursor-pointer">
                          Weekday Mornings
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekday-afternoons" />
                        <Label htmlFor="weekday-afternoons" className="cursor-pointer">
                          Weekday Afternoons
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekday-evenings" />
                        <Label htmlFor="weekday-evenings" className="cursor-pointer">
                          Weekday Evenings
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekends" />
                        <Label htmlFor="weekends" className="cursor-pointer">
                          Weekends
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Special Skills or Qualifications</Label>
                    <Textarea
                      id="skills"
                      placeholder="Please list any special skills, qualifications, or experiences that may benefit our organization"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with Warriors Aid?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us why you're interested in volunteering with us"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm">
                      I understand that by submitting this application, I am committing to uphold the values and mission
                      of Warriors Aid. I agree to undergo any necessary background checks and training required for
                      volunteer positions.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full md:w-auto bg-blue-700 hover:bg-blue-800">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer FAQ */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">How much time do I need to commit?</h3>
                  <p className="text-muted-foreground">
                    We appreciate any time you can give. Most volunteers commit to 4-8 hours per month, but we have
                    opportunities for both occasional and regular volunteering.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Do I need special training?</h3>
                  <p className="text-muted-foreground">
                    Warriors Aid provides all necessary training for our volunteer positions. Some roles may require
                    additional background checks or specialized training, which we will coordinate.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Do I need to be a veteran to volunteer?</h3>
                  <p className="text-muted-foreground">
                    No, we welcome volunteers from all backgrounds. While some veterans find volunteering with us
                    particularly meaningful, non-veterans bring valuable perspectives and skills to our organization.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What locations do you serve?</h3>
                  <p className="text-muted-foreground">
                    Warriors Aid operates in communities across the country. We try to match volunteers with
                    opportunities in their local area, and we also offer remote volunteering options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-8">
                Our volunteer coordinator is here to help you find the perfect opportunity.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-700" />
                  <span>123 Veterans Way, Washington, DC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <span>Mon-Fri: 9am-5pm ET</span>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="mailto:volunteer@warriorsaid.org">Contact Volunteer Coordinator</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <WarriorsAidLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Warriors Aid. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
