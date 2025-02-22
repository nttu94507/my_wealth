// src/app/components/ResultSummary.js
"use client";
export function ResultSummary({ totalIncome, totalExpenses, netIncome, totalAssets, totalLiabilities, netWorth }) {
    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">試算結果</h2>
            <p className="text-gray-700">總收入: <span className="font-bold">{totalIncome}</span> 元</p>
            <p className="text-gray-700">總支出: <span className="font-bold">{totalExpenses}</span> 元</p>
            <p className="text-gray-700">淨收入: <span className="font-bold">{netIncome}</span> 元</p>
            <p className="text-gray-700">總資產: <span className="font-bold">{totalAssets}</span> 元</p>
            <p className="text-gray-700">總負債: <span className="font-bold">{totalLiabilities}</span> 元</p>
            <p className="text-gray-700">淨資產: <span className="font-bold">{netWorth}</span> 元</p>
        </div>
    );
}