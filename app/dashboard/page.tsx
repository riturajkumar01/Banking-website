import Link from "next/link"
import { CreditCard, ArrowUpRight, ArrowDownRight, BarChart3, Settings, LogOut, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BankLogo from "@/components/images/BankLogo"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <BankLogo />
            <span className="text-xl font-bold">SecureBank</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Rest of the dashboard code remains the same */}
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">Premium Account</p>
            </div>
            <nav className="grid gap-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/accounts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <CreditCard className="h-4 w-4" />
                Accounts
              </Link>
              <Link
                href="/transactions"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <ArrowUpRight className="h-4 w-4" />
                Transactions
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John</h1>
              <p className="text-gray-500">Here's an overview of your accounts</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Checking Account</CardTitle>
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345.67</div>
                  <p className="text-xs text-gray-500">Account ending in 1234</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/accounts/checking">
                      View details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Savings Account</CardTitle>
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,678.90</div>
                  <p className="text-xs text-gray-500">Account ending in 5678</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/accounts/savings">
                      View details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Credit Card</CardTitle>
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,345.67</div>
                  <p className="text-xs text-gray-500">Balance • Due in 15 days</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="/accounts/credit">
                      View details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="transactions">
              <TabsList>
                <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
              </TabsList>
              <TabsContent value="transactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your recent account activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Grocery Store</p>
                          <p className="text-sm text-gray-500">Mar 2, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$85.24</p>
                          <p className="text-sm text-gray-500">Checking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Payroll Deposit</p>
                          <p className="text-sm text-gray-500">Mar 1, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">+$2,450.00</p>
                          <p className="text-sm text-gray-500">Checking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Electric Bill</p>
                          <p className="text-sm text-gray-500">Feb 28, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$124.75</p>
                          <p className="text-sm text-gray-500">Checking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Coffee Shop</p>
                          <p className="text-sm text-gray-500">Feb 27, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$5.50</p>
                          <p className="text-sm text-gray-500">Credit Card</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <Link href="/transactions">
                        View all transactions <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="upcoming" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Payments</CardTitle>
                    <CardDescription>Scheduled payments and bills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Rent Payment</p>
                          <p className="text-sm text-gray-500">Due Mar 5, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$1,200.00</p>
                          <p className="text-sm text-gray-500">Checking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Phone Bill</p>
                          <p className="text-sm text-gray-500">Due Mar 10, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$85.99</p>
                          <p className="text-sm text-gray-500">Credit Card</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">Internet Bill</p>
                          <p className="text-sm text-gray-500">Due Mar 15, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-$75.00</p>
                          <p className="text-sm text-gray-500">Checking</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <Link href="/payments">
                        Manage payments <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 md:text-left">&copy; 2025 SecureBank. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

