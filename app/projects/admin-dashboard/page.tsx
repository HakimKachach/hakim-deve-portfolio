"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, Users, TrendingUp, DollarSign, Activity, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+12.5%", icon: DollarSign, color: "text-green-600" },
    { label: "Active Users", value: "2,847", change: "+8.2%", icon: Users, color: "text-blue-600" },
    { label: "Total Orders", value: "1,234", change: "+23.1%", icon: TrendingUp, color: "text-purple-600" },
    { label: "System Health", value: "98.5%", change: "+2.1%", icon: Activity, color: "text-orange-600" },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "Ahmed Hassan", amount: "$234.50", status: "Completed", date: "2025-10-20" },
    { id: "ORD-002", customer: "Fatima Bennani", amount: "$567.80", status: "Pending", date: "2025-10-20" },
    { id: "ORD-003", customer: "Mohammed Alaoui", amount: "$123.45", status: "Processing", date: "2025-10-19" },
    { id: "ORD-004", customer: "Leila Mansouri", amount: "$890.20", status: "Completed", date: "2025-10-19" },
    { id: "ORD-005", customer: "Karim Boutaleb", amount: "$456.75", status: "Completed", date: "2025-10-18" },
  ]

  const users = [
    { id: 1, name: "Ahmed Hassan", email: "ahmed@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Fatima Bennani", email: "fatima@example.com", role: "User", status: "Active" },
    { id: 3, name: "Mohammed Alaoui", email: "mohammed@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Leila Mansouri", email: "leila@example.com", role: "Moderator", status: "Active" },
    { id: 5, name: "Karim Boutaleb", email: "karim@example.com", role: "User", status: "Active" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">AdminX Dashboard</h1>
          <Button variant="outline" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-2">{stat.change} from last month</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            )
          })}
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          {["overview", "orders", "users"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Revenue Chart</h3>
              <div className="h-64 bg-primary/5 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-muted-foreground" />
              </div>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">User Growth</h3>
              <div className="h-64 bg-primary/5 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-muted-foreground" />
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === "orders" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/5 border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Order ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Customer</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-primary/5 transition">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{order.customer}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.amount}</td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === "users" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/5 border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Role</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-border hover:bg-primary/5 transition">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{user.role}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="ghost" size="sm" className="text-primary">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
