// src/app/page.js
"use client";
// import { useState } from "react";
import Layout from "./layout";
import { CategoryBlock } from "../../components/CategoryBlock"
import { ResultSummary } from "../../components/ResultSummary";

export default function FinancialCalculator() {
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [assetItems, setAssetItems] = useState([]);
  const [liabilityItems, setLiabilityItems] = useState([]);

  const calculateTotal = (items) => items.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalIncome = calculateTotal(incomeItems);
  const totalExpenses = calculateTotal(expenseItems);
  const totalAssets = calculateTotal(assetItems);
  const totalLiabilities = calculateTotal(liabilityItems);
  const netIncome = totalIncome - totalExpenses;
  const netWorth = totalAssets - totalLiabilities;

  return (
    // <h1 className="text-2xl font-bold underline">Hello, Next.js!</h1>

    <Layout>
      <div className="max-w-4xl mx-auto p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">財務試算工具</h1>
        {/* <div className="grid grid-cols-2 gap-6"> */}
        <CategoryBlock title="收入" items={incomeItems} setItems={setIncomeItems} total={totalIncome} color="bg-green-200" />
        <CategoryBlock title="支出" items={expenseItems} setItems={setExpenseItems} total={totalExpenses} color="bg-red-200" />
        <CategoryBlock title="資產" items={assetItems} setItems={setAssetItems} total={totalAssets} color="bg-blue-200" />
        <CategoryBlock title="負債" items={liabilityItems} setItems={setLiabilityItems} total={totalLiabilities} color="bg-yellow-200" />
        {/* </div> */}
        <ResultSummary totalIncome={totalIncome} totalExpenses={totalExpenses} netIncome={netIncome} totalAssets={totalAssets} totalLiabilities={totalLiabilities} netWorth={netWorth} />
      </div>
    </Layout>
  );
}
