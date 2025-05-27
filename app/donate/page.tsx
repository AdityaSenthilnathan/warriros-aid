import Link from "next/link"
import { ArrowLeft, CreditCard, DollarSign, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import WarriorsAidLogo from "../../logo"

export default function DonatePage() {
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
          <Button asChild variant="outline">
            <Link href="/volunteer">Volunteer</Link>
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make a Donation</h1>
              <p className="text-xl text-muted-foreground">Your contribution directly supports veterans in need</p>
            </div>
          </div>
        </section>

        {/* Donation Impact */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">
                Your Donation Makes a Difference
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader className="pb-2">
                    <Heart className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>Mental Health Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      $50 provides one hour of specialized counseling for a veteran struggling with PTSD or depression.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Community Reintegration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      $100 funds job training workshops to help veterans transition to civilian careers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Financial Stability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      $250 provides emergency financial assistance for housing, utilities, or food for a veteran family.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Donation Form */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Support Our Veterans</h2>

                <Tabs defaultValue="one-time" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="one-time" className="space-y-6">
                    <div className="space-y-4">
                      <Label>Select Donation Amount</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-16 text-lg">
                          $25
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $50
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $100
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $250
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Label htmlFor="custom-amount">Custom Amount:</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="custom-amount" className="pl-8" placeholder="Enter amount" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Dedicate Your Donation (Optional)</Label>
                      <RadioGroup defaultValue="none" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="dedication-none" />
                          <Label htmlFor="dedication-none">No dedication</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="honor" id="dedication-honor" />
                          <Label htmlFor="dedication-honor">In honor of</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="memory" id="dedication-memory" />
                          <Label htmlFor="dedication-memory">In memory of</Label>
                        </div>
                      </RadioGroup>
                      <Input placeholder="Name of honoree (optional)" className="mt-2" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="relative">
                          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billing-zip">Billing Zip Code</Label>
                        <Input id="billing-zip" required />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-6">
                      Complete Donation
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      Your donation is tax-deductible to the extent allowed by law. Warriors Aid is a 501(c)(3)
                      nonprofit organization.
                    </p>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-6">
                    <div className="space-y-4">
                      <Label>Select Monthly Donation Amount</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-16 text-lg">
                          $10/mo
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $25/mo
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $50/mo
                        </Button>
                        <Button variant="outline" className="h-16 text-lg">
                          $100/mo
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Label htmlFor="custom-monthly">Custom Monthly Amount:</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="custom-monthly" className="pl-8" placeholder="Enter amount" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Dedicate Your Donation (Optional)</Label>
                      <RadioGroup defaultValue="none" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="dedication-none-monthly" />
                          <Label htmlFor="dedication-none-monthly">No dedication</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="honor" id="dedication-honor-monthly" />
                          <Label htmlFor="dedication-honor-monthly">In honor of</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="memory" id="dedication-memory-monthly" />
                          <Label htmlFor="dedication-memory-monthly">In memory of</Label>
                        </div>
                      </RadioGroup>
                      <Input placeholder="Name of honoree (optional)" className="mt-2" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name-monthly">First Name</Label>
                          <Input id="first-name-monthly" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name-monthly">Last Name</Label>
                          <Input id="last-name-monthly" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-monthly">Email</Label>
                        <Input id="email-monthly" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="card-number-monthly">Card Number</Label>
                        <div className="relative">
                          <Input id="card-number-monthly" placeholder="1234 5678 9012 3456" required />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry-monthly">Expiration Date</Label>
                          <Input id="expiry-monthly" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc-monthly">CVC</Label>
                          <Input id="cvc-monthly" placeholder="123" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billing-zip-monthly">Billing Zip Code</Label>
                        <Input id="billing-zip-monthly" required />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-6">
                      Start Monthly Donation
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      Your monthly donation will be processed automatically each month. You can cancel at any time.
                      Warriors Aid is a 501(c)(3) nonprofit organization.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Other Ways to Give</h2>
              <p className="text-xl text-center text-muted-foreground">
                There are many ways you can support our mission
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Corporate Matching</CardTitle>
                    <CardDescription>Double your impact through employer matching</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Many employers match charitable contributions made by their employees. Check with your HR
                      department to see if your company offers matching gifts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Planned Giving</CardTitle>
                    <CardDescription>Leave a lasting legacy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Include Warriors Aid in your estate planning to create a lasting impact for generations of
                      veterans to come.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Donor-Advised Funds</CardTitle>
                    <CardDescription>Recommend a grant from your DAF</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If you have a donor-advised fund, you can recommend a grant to Warriors Aid to support our
                      programs.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Details
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mail a Check</CardTitle>
                    <CardDescription>Send your donation by mail</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Make checks payable to &quot;Warriors Aid&quot; and mail to:
                      <br />
                      123 Veterans Way
                      <br />
                      Washington, DC 20001
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Print Form
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Donation FAQ */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Is my donation tax-deductible?</h3>
                  <p className="text-muted-foreground">
                    Yes, Warriors Aid is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible
                    to the extent allowed by law.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">How is my donation used?</h3>
                  <p className="text-muted-foreground">
                    85% of all donations go directly to programs supporting veterans, with the remaining 15% covering
                    essential administrative and fundraising costs.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I specify how my donation is used?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can designate your gift for a specific program area. Please contact us directly for major
                    gifts with specific designations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Will I receive a receipt for my donation?</h3>
                  <p className="text-muted-foreground">
                    Yes, you will receive an email receipt immediately after your online donation. For donations by
                    mail, a receipt will be sent within 2-3 weeks.
                  </p>
                </div>
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
