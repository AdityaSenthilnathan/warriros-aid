'use client'
import Image from "next/image"
import Link from "next/link"
import { Users, DollarSign, Brain, Play, ExternalLink, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import React from "react"
import { animate, stagger } from "animejs"
import WarriorsAidLogo from "./logo"

// Add initial animation state via CSS to prevent hydration mismatch
const initialAnimationStyles = `
  .hero-animate, .cta-animate {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
    will-change: opacity, transform;
  }
`;

export default function WarriorsAidLandingPage() {
  React.useEffect(() => {
    // Inject initial animation styles only once on mount
    const style = document.createElement('style');
    style.innerHTML = initialAnimationStyles;
    document.head.appendChild(style);
    // Animate in
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
    return () => {
      document.head.removeChild(style);
    }
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
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none hero-animate"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}
                >
                  Supporting Those Who Served
                </h1>
                <p
                  className="text-xl text-muted-foreground md:text-2xl italic hero-animate"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}
                >
                  "Honoring Their Sacrifice, Rebuilding Their Future"
                </p>
                <p
                  className="max-w-[600px] text-muted-foreground md:text-xl hero-animate"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}
                >
                  Warriors Aid is dedicated to providing comprehensive support for veterans facing mental health
                  challenges, reintegration difficulties, and financial hardship after their service.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 cta-animate"
                    asChild
                    style={{ opacity: 0, transform: 'scale(0.8)' }}
                  >
                    Join Our Mission
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="cta-animate"
                    asChild
                    style={{ opacity: 0, transform: 'scale(0.8)' }}
                  >
                    <Link href="#mission">Learn More</Link>
                  </Button>
                </div>
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
        
                  <strong>Every single day, thousands of veterans carry invisible scars from their time in service.</strong>.
                  While the uniform may come off, the mental, emotional, and physical toll of military duty often remains. These men and women who once stood in harm&#39;s way to protect our nation too often return home only to face new, silent battles: post-traumatic stress disorder (PTSD), depression, homelessness, substance abuse, unemployment, and social isolation. Despite their sacrifices, many veterans are left to navigate these challenges alone, without the consistent support they deserve.
                  According to the U.S. Department of Veterans Affairs, an estimated
                  {" "}<strong>11% to 20% of veterans </strong> 
                  who served in Operations Iraqi Freedom and Enduring Freedom experience PTSD in a given year, while
                  {" "}<strong>over 37,000 veterans remain homeless on any given night</strong> {" "}
                   (U.S. Department of Housing and Urban Development, 2023). These numbers reflect not only suffering, but also a systemic failure to uphold our obligation to those who served.

                </p>
                <p className="text-lg">
                  <strong>Warriors Aid was founded on a simple yet powerful belief: no veteran should ever be left to fight their battles without support.</strong>
               {" "}
               Our mission is rooted in compassion, respect, and a deep commitment to those who have served. We are not just another organization we are a lifeline. Warriors Aid aims to close the critical gaps in care by offering services that empower veterans to rebuild their lives with dignity, purpose, and hope.

               </p> 

               <p className="text-lg">
                Our organization operates through <strong>three comprehensive initiatives</strong> designed to address the multifaceted needs of our veteran community:
                  
               </p> 
                <ul className="space-y-4 pl-6 list-disc">
                  <li className="text-lg">
                    <strong>Mental Health Support:</strong> Combat takes a toll that often goes unseen. Access ro trauma-informed care, connecting veterans with licensed counselors, peer support networks, and holistic treatment options should be normalized and provided. Mental health programs are not one-size-fits-all; they are veteran-led, trauma-aware, and rooted in trust. Research shows that peer-led mental health interventions improve engagement and outcomes for veterans with PTSD (National Academies of Sciences, Engineering, and Medicine, 2018).

                  </li>
                  <li className="text-lg">
                    <strong>Reintegration Programs</strong> The transition to civilian life can be daunting. Our reintegration initiatives guide veterans through this complex journey by offering job readiness training, mentorship opportunities, higher education resources, resume development workshops, and social reintegration events. The goal is clear: build lasting pathways toward independence, purpose, and community connection.


                  </li>
                  <li className="text-lg">
                    <strong>Financial Assistance:</strong> Too many veterans face immediate and long-term financial instability. Whether it&#39;s emergency rent assistance, help with utility bills, or long-term financial literacy and planning, Warriors Aid is there to offer a steady hand. We work to prevent homelessness, reduce debt, and empower veterans and their families to build sustainable futures. Our support isn&#39;t just about dollars it&#39;s about restoring peace of mind. Studies show that financial instability is a key contributor to veteran homelessness, and targeted aid significantly reduces housing insecurity (HUD Annual Homeless Assessment Report, 2023).
                    
                     </li>
                 
                </ul>
                <p className="text-lg" ><strong>When you support Warriors Aid, you are doing more than donating to a cause you are standing beside a veteran. </strong>Involvement directly impacts lives. Critical resources can be provided to ensure veterans are treated with the respect they&#39;ve earned, and reaffirm the promise that their sacrifices will not be forgotten.
</p>                  <p className="text-lg"><strong>Now is the time to act.</strong> We owe our freedoms to those who served. Let us ensure that their return home is met with open arms, not closed doors. Join Warriors Aid, and together, we will create a future where every veteran is seen, supported, and never left behind.
</p>
              </div>

              <div className="text-sm text-muted-foreground mt-8 text-left space-y-2">
                <div>
                  <span className="align-baseline">
                    <sub>1</sub>
                  </span>{" "}
                  U.S. Department of Veterans Affairs. PTSD: National Center for PTSD Statistics.{" "}
                  <a
                    href="https://www.ptsd.va.gov/understand/common/common_veterans.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 hover:text-blue-900"
                  >
                    https://www.ptsd.va.gov/understand/common/common_veterans.asp
                  </a>
                </div>
                <div>
                  <span className="align-baseline">
                    <sub>2</sub>
                  </span>{" "}
                  U.S. Department of Housing and Urban Development (HUD). 2023 Annual Homeless Assessment Report to Congress.{" "}
                  <a
                    href="https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 hover:text-blue-900"
                  >
                    https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf
                  </a>
                </div>
                <div>
                  <span className="align-baseline">
                    <sub>3</sub>
                  </span>{" "}
                  National Academies of Sciences, Engineering, and Medicine. Evaluation of the Department of Veterans Affairs Mental Health Services. Washington, DC: The National Academies Press, 2018.{" "}
                  <a
                    href="https://doi.org/10.17226/24915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 hover:text-blue-900"
                  >
                    https://doi.org/10.17226/24915
                  </a>
                </div>
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
                    <p className="text-4xl font-bold text-red-600">17%</p>
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
                    <img src="/warriros-aid/Screenshot%202025-05-27%20212010.png"></img> 
                    
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
                      src="/warriros-aid/a.png"
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
                      src="/warriros-aid/b.png"
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
                  This before/after visual shows the rhetorical technique of juxtaposition to
                  illustrate the impact of Warriors Aid&#39;s programs. The contrast between the
                  "before" and "after" scenarios creates an impactful narrative that resonates with viewers on both
                  emotional and logical levels. The visual establishes credibility by showing the tangible
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
            <div className="mx-auto max-w-[800px] max-h-[800px] space-y-6 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear Their Stories</h2>
              <p className="text-xl text-muted-foreground">Veterans sharing their journey with Warriors Aid</p>

              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
                <div className="absolute inset-0 opacity-60">
                    <video
                    src="/warriros-aid/VID_20250527_213013_387.mp4"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full object-[center_35%]"
                    controls
                    >
                    Sorry, your browser doesn't support embedded videos.
                    </video>
                  
                </div>
                
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Rationale for Video Testimonial</h3>
                <p className="text-left">
                  This multimedia piece leverages the power of first-person narrative to create and emotional
                  experience that static visuals alone cannot achieve. By featuring a veteran telling their own
                  story in their own voice, we establish their authenticity while creating a direct
                  emotional connection with viewers. The video format allows for a strong narrative, showing
                  the challenges, the intervention, and the transformation, which builds a compelling logical case for
                  our effectiveness. The more grounded production style, with less polished images, values signal respect for
                  both the subject matter and the audience, acknowledging the value of each person, beyond just an image alone. The video frames the
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
                  Our slogan "Honoring Their Sacrifice, Rebuilding Their Future" uses rhetorical techniques to show
                  our mission while grabbing with multiple audiences. The structure creates a rhythm that
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

      <footer className="w-full border-t ">
        <div className=" flex flex-col  justify-between  md:h-24 md:flex-row mx-auto">
          <WarriorsAidLogo />
          
        </div>
      </footer>
    </div>
  )
}
