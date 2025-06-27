import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Wallet } from "lucide-react";

const TransactionHistory = () => {
  return (
    <Card className="flex-1">
      <CardHeader className="flex items-center justify-between mb-2">
        <CardTitle className="font-bold">Transaction History</CardTitle>
        <Link href="/" className="text-purple-500">
          View All
        </Link>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            {/*  day */}
            <h5 className="text-muted-foreground">Today</h5>
            {/*  Expense Details*/}
            <div className="flex items-center justify-between gap-2 mt-4">
              {/*  Icon and transaction Details*/}
              <div className="flex items-center gap-4">
                <div>
                  <Wallet />
                </div>
                <div className="text-xs">
                  {/*type of transaction*/}
                  <h5 className="font-bold">Income</h5>
                  {/*  tiempo*/}
                  <p className="text-xs text-muted-foreground">02:00 PM</p>
                </div>
              </div>
              {/*  amount*/}
              <div>
                <h5 className="font-bold">Ksh 100,000.00</h5>
              </div>
            </div>
            {/*  Expense Details*/}
            <div className="flex items-center justify-between gap-2 mt-4">
              {/*  Icon and transaction Details*/}
              <div className="flex items-center gap-4">
                <div>
                  <Wallet />
                </div>
                <div className="text-xs">
                  {/*type of transaction*/}
                  <h5 className="font-bold">Income</h5>
                  {/*  tiempo*/}
                  <p className="text-xs text-muted-foreground">02:00 PM</p>
                </div>
              </div>
              {/*  amount*/}
              <div>
                <h5 className="font-bold">Ksh 100,000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TransactionHistory;
