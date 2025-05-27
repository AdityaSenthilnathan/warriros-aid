import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import WarriorsAidLogo from "../../logo"

export default function TermsPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="mx-auto max-w-[800px] space-y-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-muted-foreground">Last Updated: May 22, 2025</p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                  <p>
                    These Terms of Service constitute a legally binding agreement made between you and Warriors Aid
                    concerning your access to and use of the website as well as any other media form, media channel,
                    mobile website or mobile application related, linked, or otherwise connected thereto.
                  </p>
                  <p>
                    You agree that by accessing the Site, you have read, understood, and agree to be bound by all of
                    these Terms of Service. If you do not agree with all of these terms, you are prohibited from using
                    the site and must discontinue use immediately.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Donations</h2>
                  <p>
                    Warriors Aid is a registered 501(c)(3) nonprofit organization. All donations are tax deductible to
                    the extent allowed by law. By making a donation, you acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your donation is voluntary and non-refundable.</li>
                    <li>
                      You are donating to Warriors Aid, and your donation will be used to further our mission of
                      supporting veterans.
                    </li>
                    <li>
                      For recurring donations, you authorize Warriors Aid to automatically charge your payment method on
                      a recurring basis until you notify us to stop.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                  <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
                    functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
                    and the trademarks, service marks, and logos contained therein are owned or controlled by us or
                    licensed to us, and are protected by copyright and trademark laws.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">User Representations</h2>
                  <p>By using the Site, you represent and warrant that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>
                      You will maintain the accuracy of such information and promptly update such registration
                      information as necessary.
                    </li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You are not a minor in the jurisdiction in which you reside.</li>
                    <li>
                      You will not access the Site through automated or non-human means, whether through a bot, script
                      or otherwise.
                    </li>
                    <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and defined following the laws of the United States. Warriors Aid
                    and yourself irrevocably consent that the courts of the United States shall have exclusive
                    jurisdiction to resolve any dispute which may arise in connection with these terms.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Changes to Terms</h2>
                  <p>
                    We reserve the right to change these terms at any time. We will provide notice of any changes by
                    updating the &quot;Last Updated&quot; date at the top of these Terms of Service.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use
                    of the Site, please contact us at: terms@warriorsaid.org
                  </p>
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
