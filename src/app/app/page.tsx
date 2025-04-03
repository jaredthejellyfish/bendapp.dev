import React from "react";
import {
  ArrowUpRight,
  LineChart,
  Users,
  CreditCard,
  Calendar,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export default function DashboardPage() {
  return (
    <main className="p-6 min-h-screen dark">
      <div className="rounded-lg shadow mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your dashboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Users"
          value="1,204"
          change="+8.2%"
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard
          title="Active Sessions"
          value="312"
          change="+12.5%"
          icon={<LineChart className="h-4 w-4" />}
        />
        <StatCard
          title="Revenue"
          value="$12,504"
          change="+4.3%"
          icon={<CreditCard className="h-4 w-4" />}
        />
        <StatCard
          title="Events"
          value="54"
          change="+2.1%"
          icon={<Calendar className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="col-span-2 rounded-lg shadow p-6 bg-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Activity Overview</h2>
            <button className="text-sm text-accent hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed rounded-md text-gray-400">
            Chart Placeholder
          </div>
        </div>

        <div className="rounded-lg shadow p-6 bg-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Activities</h2>
            <button className="text-sm text-accent hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex gap-3 pb-3 border-b last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-accent">
                  U{item}
                </div>
                <div>
                  <div className="font-medium">Activity {item}</div>
                  <div className="text-sm text-gray-500">Just now</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow p-6 bg-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-sm text-accent hover:underline flex items-center gap-1">
            View All <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Transaction ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b last:border-0">
                  <td className="py-3">#INV-{1000 + item}</td>
                  <td className="py-3">Customer {item}</td>
                  <td className="py-3">April {item}, 2024</td>
                  <td className="py-3">${(Math.random() * 1000).toFixed(2)}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card className="bg-[#19191B]">
      <CardContent className="">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-foreground">{value}</h3>
            <p className="text-xs text-green-600 mt-1 flex items-center">
              {change}
            </p>
          </div>
          <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
