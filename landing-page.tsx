'use client'
import Image from "next/image"
import Link from "next/link"
import { Users, DollarSign, Brain, Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import React from "react"
import { animate, stagger } from "animejs"

import WarriorsAidLogo from "./logo"

export default function WarriorsAidLandingPage() {
  React.useEffect(() => {
    animate(
      ".hero-animate",
      {
        translateY: [40, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: stagger(120),
      }
    )
    animate(
      ".cta-animate",
      {
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: "easeOutBack",
        duration: 1000,
        delay: 800,
      }
    )
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <WarriorsAidLogo />
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#mission" className="text-sm font-medium transition-colors hover:text-primary">
              Our Mission
            </Link>
            
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full ">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50  ">
          <div  >
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center pl-[12vw]">
              <div className="space-y-4 ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none hero-animate">
                  Supporting Those Who Served
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl italic hero-animate">
                  "Honoring Their Sacrifice, Rebuilding Their Future"
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl hero-animate">
                  Warriors Aid is dedicated to providing comprehensive support for veterans facing mental health
                  challenges, reintegration difficulties, and financial hardship after their service.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 cta-animate" asChild>
                    Join Our Mission
                  </Button>
                  <Button size="lg" variant="outline" className="cta-animate" asChild>
                    <Link href="#mission">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Veterans supporting each other"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statement of Purpose Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 pl-[9vw]">
          <div className="container px-4 md:px-6 ">
            <div className="mx-auto max-w-[800px] space-y-6 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Statement of Purpose</h2>
              <p className="text-xl text-muted-foreground">Why Warriors Aid deserves your support</p>
              <div className="space-y-4 text-left">
                <p className="text-lg">
                  Every single day, thousands of veterans struggle silently with the wounds of service. After
                  sacrificing for their nation, many return home to face battles with PTSD, depression, homelessness,
                  and unemployment. Warriors Aid was founded on the principle that{" "}
                  <strong>no veteran should fight these battles alone</strong>.
                </p>
                <p className="text-lg">
                  Our organization bridges the gaps in veteran support systems through three initiatives:
                </p>
                <ul className="space-y-4 pl-6 list-disc">
                  <li className="text-lg">
                    <strong>Mental Health Support:</strong> Providing access to specialized counseling, peer support
                    groups, and innovative therapies designed specifically for combat-related trauma.
                  </li>
                  <li className="text-lg">
                    <strong>Reintegration Programs:</strong> Offering job training, educational opportunities, and
                    community connection services to help veterans transition successfully to civilian life.
                  </li>
                  <li className="text-lg">
                    <strong>Financial Assistance:</strong> Delivering emergency financial aid, housing support, and
                    long-term financial planning to ensure stability for veterans and their families.
                  </li>
                </ul>
                <p className="text-lg">
                  By joining Warriors Aid, you become part of a movement that recognizes the true cost of
                  service. Support directly impacts veterans in your community, providing them with the resources,
                  dignity, and respect they&#39;ve earned through their sacrifice. Together, we can ensure that those who
                  defended our freedom can fully enjoy the liberties they helped protect.
                </p>
                <p className="text-lg font-semibold">
                  The time to act is now. Our veterans stood for us, so now it&#39;s time we stand for them.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Visual Rhetoric 1: Infographic */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 pl-[9vw]">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Veteran Crisis</h2>
              <p className="text-xl text-muted-foreground">Understanding the challenges our veterans face</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                <Card className="border-red-200 bg-white">
                  <CardHeader className="pb-2">
                    <Brain className="h-12 w-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-center text-2xl">Mental Health</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-red-600">-17%</p>
                    <p className="text-muted-foreground">Decrease in veteran suicide rate</p>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center">
                    <Link
                      href="https://news.va.gov/137221/va-2024-suicide-prevention-annual-report/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Source: VA <ExternalLink className="h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-blue-200 bg-white">
                  <CardHeader className="pb-2">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-center text-2xl">Homelessness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-blue-600">38,000</p>
                    <p className="text-muted-foreground">Veterans experience homelessness</p>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center">
                    <Link
                      href="https://endhomelessness.org/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Source: National Alliance to End Homelessness <ExternalLink className="h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-green-200 bg-white">
                  <CardHeader className="pb-2">
                    <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-center text-2xl">Unemployment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-green-600">4.7%</p>
                    <p className="text-muted-foreground">Veteran unemployment rate</p>
                  </CardContent>
                  <CardFooter className="pt-0 justify-center">
                    <Link
                      href="https://endhomelessness.org/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Source: National Alliance to End Homelessness <ExternalLink className="h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Rationale for Infographic Design</h3>
                <p className="text-left">
                  This infographic shows statistics and iconography to create an immediate emotional impact. The use
                  of red for the suicide statistics deliberately create a sense of urgency, while a minimalist design
                  keeps the gravity of these numbers isn&#39;t lost in visual clutter. By presenting these statistics in
                  isolation, we force the viewer to confront the reality of veteran struggles without distraction. The
                  progression from mental health to homelessness to unemployment creates a narrative of cause and effect
                  that educated viewers will immediately comprehend, making a logical appeal while
                  simultaneously creating an emotional response. This visual rhetoric serves to makes 
                  statistics into real stories, compelling action through testimonies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Rhetoric 2: Before/After Transformation */}
        <section className="w-full py-12 md:py-24 lg:py-32 pl-[9vw]">
          <div className="container px-4 md:px-6 ">
            <div className="mx-auto max-w-[800px] space-y-6 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Warriors Aid Impact</h2>
              <p className="text-xl text-muted-foreground">Transforming lives through comprehensive support</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                <div className="space-y-4">
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Veteran struggling before Warriors Aid support"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Before Warriors Aid</h3>
                  <ul className="text-left space-y-2 pl-6 list-disc">
                    <li>Isolated and struggling with PTSD</li>
                    <li>Difficulty finding employment</li>
                    <li>Financial instability</li>
                    <li>Disconnected from community</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Veteran thriving after Warriors Aid support"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">After Warriors Aid</h3>
                  <ul className="text-left space-y-2 pl-6 list-disc">
                    <li>Connected to specialized mental health resources</li>
                    <li>Employed in a fulfilling career</li>
                    <li>Financially secure</li>
                    <li>Engaged with supportive community</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Rationale for Transformation Visual</h3>
                <p className="text-left">
                  This before/after visual employs a powerful rhetorical technique known as "juxtaposition" to
                  illustrate the transformative impact of Warriors Aid&#39;s programs. The stark contrast between the
                  "before" and "after" scenarios creates a compelling narrative arc that resonates with viewers on both
                  emotional and logical levels. The visual establishes ethos (credibility) by showing concrete, tangible
                  outcomes of our work rather than making abstract claims. The parallel structure of the images and
                  bullet points creates a clear cause-and-effect relationship that educated viewers will immediately
                  comprehend. By focusing on the human transformation rather than organizational processes, this visual
                  rhetoric centers the veteran experience, making the impact personal and relatable while still
                  maintaining the dignity and agency of those we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multimedia Piece: Video Concept */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 pl-[9vw]">
          <div className="container px-4 md:px-6 ">
            <div className="mx-auto max-w-[800px] space-y-6 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear Their Stories</h2>
              <p className="text-xl text-muted-foreground">Veterans sharing their journey with Warriors Aid</p>

              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
                <div className="absolute inset-0 opacity-60">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Video thumbnail of veteran testimonial"
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-white text-xl font-medium">Watch: "My Journey Home"</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Rationale for Video Testimonial</h3>
                <p className="text-left">
                  This multimedia piece leverages the power of first-person narrative to create an immersive emotional
                  experience that static visuals alone cannot achieve. By featuring real veterans telling their own
                  stories in their own voices, we establish unassailable authenticity (ethos) while creating a direct
                  emotional connection with viewers (pathos). The video format allows for a complete narrative, showing
                  the challenges, the intervention, and the transformation, which builds a compelling logical case for
                  our effectiveness (logos). The cinematic quality and professional production values signal respect for
                  both the subject matter and the audience, acknowledging the sophistication of educated viewers while
                  still making the content accessible and emotionally resonant. The title "My Journey Home" frames the
                  veteran experience as an ongoing process rather than a fixed state, inviting viewers to see themselves
                  as potential participants in that journey rather than mere observers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan Rationale */}
        <section className="w-full py-12 md:py-24 lg:py-32 pl-[9vw]">
          <div className="container px-4 md:px-6 ">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Slogan</h2>
              <p className="text-3xl italic font-medium text-blue-700">
                "Honoring Their Sacrifice, Rebuilding Their Future"
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Slogan Rationale</h3>
                <p className="text-left">
                  Our slogan "Honoring Their Sacrifice, Rebuilding Their Future" employs rhetorical techniques to show
                  our mission while resonating with multiple audiences. The parallel structure creates a rhythm that
                  makes the phrase memorable. The first half, "Honoring Their Sacrifice," acknowledges the debt society
                  owes to veterans, appealing to the values and establishing common ground with the audience. The second
                  half, "Rebuilding Their Future," shifts from passive recognition to active intervention, signaling our
                  organization&#39;s commitment to tangible action and forward-looking solutions. This is a call to action
                  provided by a short, memorable slogan.
                </p>
                <p className="text-left mt-4">
                  The use of "Their" rather than "Your" creates a collective responsibility, inviting all audience
                  members, whether veterans themselves or civilian supporters, to see themselves as stakeholders in this
                  mission. The verb choices are equally deliberate: "Honoring" suggests ongoing, active respect rather
                  than passive acknowledgment, while "Rebuilding" implies both damage that needs repair and the
                  constructive, hopeful work of creating something new and better. This slogan effectively bridges the
                  emotional appeal of honoring sacrifice with the practical appeal of concrete action, making it
                  rhetorically effective for an educated audience that values both sentiment and substance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="join" className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission Today</h2>
                <p className="text-xl opacity-90">
                  Together, we can make a difference in the lives of those who served.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  
                </div>
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
