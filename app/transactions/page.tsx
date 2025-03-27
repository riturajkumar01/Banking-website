"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight, 
  BarChart3, 
  Settings, 
  LogOut, 
  Bell, 
  User, 
  Filter, 
  Download,
  Plus,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import BankLogo from "@/components/images/BankLogo"

// Sample transaction data
const initialTransactions = [
  {
    id: "t1",
    title: "Grocery Store",
    date: "Mar 2, 2025",
    amount: -85.24,
    account: "Checking",
    type: "expense",
    category: "Groceries"
  },
  {
    id: "t2",
    title: "Payroll Deposit",
    date: "Mar 1, 2025",
    amount: 2450.00,
    account: "Checking",
    type: "income",
    category: "Salary"
  },
  {
    id: "t3",
    title: "Electric Bill",
    date: "Feb 28, 2025",
    amount: -124.75,
    account: "Checking",
    type: "expense",
    category: "Utilities"
  },
  {
    id: "t4",
    title: "Coffee Shop",
    date: "Feb 27, 2025",
    amount: -5.50,
    account: "Credit Card",
    type: "expense",
    category: "Food & Dining"
  },
  {
    id: "t5",
    title: "Phone Bill",
    date: "Feb 26, 2025",
    amount: -45.00,
    account: "Checking",
    type: "expense",
    category: "Utilities"
  },
  {
    id: "t6",
    title: "Gas Station",
    date: "Feb 25, 2025",
    amount: -35.75,
    account: "Credit Card",
    type: "expense",
    category: "Transportation"
  },
  {
    id: "t7",
    title: "Amazon",
    date: "Feb 24, 2025",
    amount: -67.32,
    account: "Credit Card",
    type: "expense",
    category: "Shopping"
  },
  {
    id: "t8",
    title: "Interest Payment",
    date: "Feb 23, 2025",
    amount: 12.47,
    account: "Savings",
    type: "income",
    category: "Interest"
  },
  {
    id: "t9",
    title: "Restaurant",
    date: "Feb 22, 2025",
    amount: -52.30,
    account: "Credit Card",
    type: "expense",
    category: "Food & Dining"
  },
  {
    id: "t10",
    title: "Movie Tickets",
    date: "Feb 21, 2025",
    amount: -28.50,
    account: "Credit Card",
    type: "expense",
    category: "Entertainment"
  },
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [searchQuery, setSearchQuery] = useState("")
  const [accountFilter, setAccountFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [newTransfer, setNewTransfer] = useState({
    fromAccount: "Checking",
    toAccount: "Savings",
    amount: "",
    description: ""
  })
  
  // Filter transactions based on filters
  const filteredTransactions = transactions.filter(transaction => {
    // Search filter
    if (searchQuery && !transaction.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    // Account filter
    if (accountFilter !== "all" && transaction.account !== accountFilter) {
      return false
    }
    
    // Category filter
    if (categoryFilter !== "all" && transaction.category !== categoryFilter) {
      return false
    }
    
    // Type filter
    if (typeFilter !== "all" && transaction.type !== typeFilter) {
      return false
    }
    
    return true
  })
  
  // Handle transfer submission
  const handleTransfer = () => {
    const amount = parseFloat(newTransfer.amount)
    if (isNaN(amount) || amount <= 0) return
    
    const transferDate = new Date()
    const dateStr = transferDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
    
    // Create withdrawal transaction
    const withdrawalTransaction = {
      id: `t${Date.now()}-1`,
      title: `Transfer to ${newTransfer.toAccount}`,
      date: dateStr,
      amount: -amount,
      account: newTransfer.fromAccount,
      type: "expense",
      category: "Transfer"
    }
    
    // Create deposit transaction
    const depositTransaction = {
      id: `t${Date.now()}-2`,
      title: `Transfer from ${newTransfer.fromAccount}`,
      date: dateStr,
      amount: amount,
      account: newTransfer.toAccount,
      type: "income",
      category: "Transfer"
    }
    
    // Add new transactions
    setTransactions(prev => [withdrawalTransaction, depositTransaction, ...prev])
    
    // Reset form
    setNewTransfer({
      fromAccount: "Checking",
      toAccount: "Savings",
      amount: "",
      description: ""
    })
  }

  // Get unique categories for filter
  const categories = [...new Set(initialTransactions.map(t => t.category))]
  
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/accounts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <CreditCard className="h-4 w-4" />
                Accounts
              </Link>
              <Link
                href="/transactions"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all"
              >
                <ArrowUpRight className="h-4 w-4" />
                Transactions
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Transactions</h1>
                <p className="text-gray-500">View and manage your transaction history</p>
              </div>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Transfer
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Transfer Money</DialogTitle>
                      <DialogDescription>
                        Move money between your accounts instantly.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="from-account" className="text-right">
                          From
                        </Label>
                        <Select 
                          value={newTransfer.fromAccount}
                          onValueChange={(value) => setNewTransfer({...newTransfer, fromAccount: value})}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Checking">Checking Account</SelectItem>
                            <SelectItem value="Savings">Savings Account</SelectItem>
                            <SelectItem value="Credit Card">Credit Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="to-account" className="text-right">
                          To
                        </Label>
                        <Select 
                          value={newTransfer.toAccount}
                          onValueChange={(value) => setNewTransfer({...newTransfer, toAccount: value})}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Checking">Checking Account</SelectItem>
                            <SelectItem value="Savings">Savings Account</SelectItem>
                            <SelectItem value="Credit Card">Credit Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                          Amount
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          min="0.01"
                          step="0.01"
                          placeholder="0.00"
                          value={newTransfer.amount}
                          onChange={(e) => setNewTransfer({...newTransfer, amount: e.target.value})}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Input
                          id="description"
                          placeholder="Transfer description"
                          value={newTransfer.description}
                          onChange={(e) => setNewTransfer({...newTransfer, description: e.target.value})}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleTransfer}>Transfer Funds</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search transactions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <Select 
                  value={accountFilter} 
                  onValueChange={setAccountFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Accounts</SelectItem>
                    <SelectItem value="Checking">Checking</SelectItem>
                    <SelectItem value="Savings">Savings</SelectItem>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select 
                  value={categoryFilter} 
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select 
                  value={typeFilter} 
                  onValueChange={setTypeFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  {filteredTransactions.length} transactions found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map(transaction => (
                      <div key={transaction.id} className="flex items-center gap-4 border-b pb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                          {transaction.amount > 0 ? (
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center">
                            <p className="font-medium">{transaction.title}</p>
                            <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                              {transaction.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">{transaction.account}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No transactions found matching your filters</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
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