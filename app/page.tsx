import Link from "next/link"
import { Shield, CreditCard, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBankingImage from "@/components/images/HeroBankingImage"
import MobileBankingImage from "@/components/images/MobileBankingImage"
import BankLogo from "@/components/images/BankLogo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <BankLogo />
            <span className="text-xl font-bold">SecureBank</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Personal
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Business
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Banking that puts you first
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Secure, simple, and smart banking solutions for your everyday needs. Join thousands of satisfied
                  customers today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Open an Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <HeroBankingImage />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need in one place</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our comprehensive banking platform offers a range of features designed to make your financial life
                  easier.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Banking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bank with confidence knowing your money and data are protected by industry-leading security
                    measures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Cards</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage your spending with our intelligent cards that provide real-time notifications and insights.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Financial Insights</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gain valuable insights into your spending habits and receive personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-900">
                  Mobile Banking
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Banking in your pocket</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Access your accounts, make transfers, pay bills, and more from our easy-to-use mobile app.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="gap-1" asChild>
                    <Link href="#">
                      Download App <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full">
                <MobileBankingImage />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied customers who trust us with their banking needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Open an Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/login">Existing Customer? Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-12">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">SecureBank</span>
            </Link>
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="font-medium">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Checking
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Savings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Loans
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      News
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline underline-offset-4">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 SecureBank. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

