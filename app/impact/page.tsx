import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import WarriorsAidLogo from "../../logo"

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <WarriorsAidLogo />
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#mission" className="text-sm font-medium transition-colors hover:text-primary">
              Our Mission
            </Link>
            <Link href="/impact" className="text-sm font-medium transition-colors hover:text-primary">
              Our Impact
            </Link>
            <Link href="/volunteer" className="text-sm font-medium transition-colors hover:text-primary">
              Join Us
            </Link>
          </nav>
          
        </div>
      </header>
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact</h1>
              <p className="text-xl text-muted-foreground">
                Real stories of veterans whose lives have been transformed through Warriors Aid
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1000px] space-y-16">
              {/* Story 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Portrait of James, a veteran who received mental health support"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-blue-700">
                    <Quote className="h-5 w-5" />
                    <h3 className="text-2xl font-bold">James&#39; Story</h3>
                  </div>
                  <h4 className="text-xl font-medium">Finding Hope After Combat</h4>
                  <p className="text-muted-foreground">
                    After three tours in Afghanistan, James returned home with severe PTSD that made civilian life seem
                    impossible. Nightmares, anxiety, and isolation became his daily reality.
                  </p>
                  <p className="text-muted-foreground">
                    Through Warriors Aid&#39;s specialized mental health program, James connected with therapists who
                    understood military trauma and fellow veterans who shared his experiences. The peer support group
                    became his lifeline.
                  </p>
                  <p className="font-medium">
                    &quot;For the first time since coming home, I didn&#39;t feel alone. Warriors Aid gave me the tools to
                    process what I&#39;d been through and showed me there was a path forward. Today, I&#39;m working as a
                    carpenter, sleeping through the night, and even mentoring other veterans.&quot;
                  </p>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/donate">Support Veterans Like James</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Portrait of Maria, a veteran who received career assistance"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 md:order-1">
                  <div className="inline-flex items-center gap-2 text-blue-700">
                    <Quote className="h-5 w-5" />
                    <h3 className="text-2xl font-bold">Maria&#39;s Story</h3>
                  </div>
                  <h4 className="text-xl font-medium">Building a New Career</h4>
                  <p className="text-muted-foreground">
                    Maria served as a logistics specialist in the Navy for eight years. Despite her extensive
                    experience, she struggled to translate her military skills to civilian employment.
                  </p>
                  <p className="text-muted-foreground">
                    Warriors Aid&#39;s career transition program helped Maria identify transferable skills, build a
                    professional network, and connect with employers who value military experience. She received resume
                    assistance, interview coaching, and professional certification funding.
                  </p>
                  <p className="font-medium">
                    &quot;The career counselors at Warriors Aid understood exactly what I was going through. They helped me
                    see that my military experience was valuable. Within three months, I landed a management position at
                    a logistics company. Now I&#39;m financially stable and building a career I love.&quot;
                  </p>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/volunteer">Volunteer to Help Veterans Like Maria</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Portrait of Robert and his family in their new home"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-blue-700">
                    <Quote className="h-5 w-5" />
                    <h3 className="text-2xl font-bold">Robert&#39;s Story</h3>
                  </div>
                  <h4 className="text-xl font-medium">A Place to Call Home</h4>
                  <p className="text-muted-foreground">
                    After being injured during his service, Robert faced mounting medical bills and eventually lost his
                    home. With a wife and two children, he found himself on the brink of homelessness.
                  </p>
                  <p className="text-muted-foreground">
                    Warriors Aid&#39;s emergency housing program provided temporary shelter for Robert&#39;s family while
                    connecting him with VA benefits he didn&#39;t know he qualified for. The financial counseling program
                    helped him create a sustainable budget and negotiate with creditors.
                  </p>
                  <p className="font-medium">
                    &quot;Warriors Aid stepped in when we had nowhere else to turn. They didn&#39;t just put a roof over our
                    heads—they gave us the support to get back on our feet. Today, we&#39;re in our own apartment, I&#39;m
                    managing my finances, and my kids have stability again.&quot;
                  </p>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/donate">Help Veterans Like Robert</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Reach</h2>
              <p className="text-xl text-muted-foreground">The numbers behind our mission</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-5xl font-bold text-blue-700">5,280</p>
                    <p className="text-lg mt-2">Veterans supported annually</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-5xl font-bold text-blue-700">42</p>
                    <p className="text-lg mt-2">Communities served nationwide</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-5xl font-bold text-blue-700">85%</p>
                    <p className="text-lg mt-2">Of funds directly support programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Be Part of Their Journey</h2>
              <p className="text-xl opacity-90">
                Every veteran deserves the chance to thrive after service. Join us in making that possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-800 bg-blue-800/40"
                  asChild
                >
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
          <WarriorsAidLogo />
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
