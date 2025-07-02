"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import ActionCard from "@/components/ActionCard";
import { ArrowDown, ArrowUpIcon, PiggyBankIcon, Wallet } from "lucide-react";
import OverviewCard from "@/components/OverviewCard";
import TransactionHistory from "@/components/TransactionHistory";
import AppLineChart from "@/components/AppLineChart";

export default function Home() {
  return (
    <div>
      {/*  welcome message*/}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-purple-500">
          Good Morning, Mariam
        </h1>
        <p>Continue your journey to financial success</p>
      </div>
      {/*    Action card container*/}
      <ActionCard />
      {/* overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        <OverviewCard
          icon={PiggyBankIcon}
          amount="1,234"
          title="Total Balance"
          iconBg="bg-blue-100"
          iconColor="text-blue-500"
        />
        <OverviewCard
          icon={Wallet}
          amount="$12,345"
          title="Revenue"
          iconBg="bg-blue-100"
          iconColor="text-blue-500"
        />
        <OverviewCard
          icon={ArrowUpIcon}
          amount="76%"
          title="Engagement"
          iconBg="bg-green-100"
          iconColor="text-green-500"
        />
        <OverviewCard
          icon={ArrowDown}
          amount="76%"
          title="Engagement"
          iconBg="bg-red-100"
          iconColor="text-red-500"
        />
      </div>
      {/*  Transaction History*/}
      <div className="my-8 flex justify-between gap-12">
        <TransactionHistory />
        <AppLineChart />
      </div>
    </div>
  );
}
