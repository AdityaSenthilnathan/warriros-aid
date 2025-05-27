import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

import WarriorsAidLogo from "../../logo"

export default function PrivacyPolicyPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: May 22, 2025</p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Introduction</h2>
                  <p>
                    Warriors Aid (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through
                    our compliance with this policy. This policy describes the types of information we may collect from
                    you or that you may provide when you visit our website and our practices for collecting, using,
                    maintaining, protecting, and disclosing that information.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                  <p>We collect several types of information from and about users of our website, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Personal information such as name, postal address, email address, telephone number, and donation
                      information when you make a donation or volunteer with us.
                    </li>
                    <li>
                      Information about your internet connection, the equipment you use to access our website, and usage
                      details.
                    </li>
                    <li>
                      Non-personal information such as browser type, language preference, referring site, and the date
                      and time of each visitor request.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                  <p>We use information that we collect about you or that you provide to us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To present our website and its contents to you.</li>
                    <li>To process donations and provide receipts.</li>
                    <li>To coordinate volunteer activities.</li>
                    <li>To send periodic emails regarding your donation or volunteer activities.</li>
                    <li>To improve our website and user experience.</li>
                    <li>To fulfill any other purpose for which you provide it.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Disclosure of Your Information</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to others. We may disclose aggregated
                    information about our users, and information that does not identify any individual, without
                    restriction.
                  </p>
                  <p>We may disclose personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To comply with any court order, law, or legal process.</li>
                    <li>To protect the rights, property, or safety of Warriors Aid, our users, or others.</li>
                    <li>With your consent.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Data Security</h2>
                  <p>
                    We have implemented measures designed to secure your personal information from accidental loss and
                    from unauthorized access, use, alteration, and disclosure. All donation information is encrypted
                    using secure socket layer technology (SSL).
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Changes to Our Privacy Policy</h2>
                  <p>
                    We may update our privacy policy from time to time. If we make material changes to how we treat our
                    users&#39; personal information, we will notify you through a notice on the website home page.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p>
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                    privacy@warriorsaid.org
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
