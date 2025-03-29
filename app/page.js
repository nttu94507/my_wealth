"use client"
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";
import './globals.css'
export default function LotteryAnalyzer() {
  const [searchNums, setSearchNums] = useState(["", "", "", "", ""]);
  const data1 = [
    [1, 12, 23, 34, 35],
    [5, 11, 19, 23, 37],
    [3, 8, 14, 23, 32],
    [7, 12, 18, 27, 31],
    [2, 9, 21, 23, 30],
  ]; // 模擬的開獎數據

  const handleInputChange = (index, value) => {
    const newSearchNums = [...searchNums];
    newSearchNums[index] = value;
    setSearchNums(newSearchNums);
  };

  // 計算號碼出現頻率
  const numberFrequency = {};
  data.flat().forEach((num) => {
    numberFrequency[num] = (numberFrequency[num] || 0) + 1;
  });
  const frequencyData = Object.entries(numberFrequency).map(([num, count]) => ({
    number: num,
    count,
  }));

  // 找出熱號 & 冷號
  const sortedNumbers = Object.entries(numberFrequency).sort((a, b) => b[1] - a[1]);
  const hotNumbers = sortedNumbers.slice(0, 3).map(([num]) => num);
  const coldNumbers = sortedNumbers.slice(-3).map(([num]) => num);

  // 連續號碼分析
  const consecutivePairs = {};
  data.forEach((row) => {
    row.sort((a, b) => a - b);
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] + 1 === row[i + 1]) {
        const pair = `${row[i]}-${row[i + 1]}`;
        consecutivePairs[pair] = (consecutivePairs[pair] || 0) + 1;
      }
    }
  });
  const consecutiveData = Object.entries(consecutivePairs)
    .map(([pair, count]) => ({ pair, count }))
    .sort((a, b) => b.count - a.count); // 排序：出現次數從高到低

  return (
    <div className="p-4">
      <nav className="bg-blue-600 p-4 text-white flex space-x-4">
        <Link href="/">
          <div className="hover:underline">首頁</div>
        </Link>
        <Link href="/539">
          <div className="hover:underline">開獎結果</div>
        </Link>
        {/* <Link href="/stats">
          <div className="hover:underline">統計分析</div>
        </Link> */}
      </nav>
      <h1 className="text-xl font-bold mb-4">539 彩票數據分析</h1>
      <Link href="/539">
        <button>539</button>
      </Link>
      {/* 號碼出現頻率長條圖 */}
      <h2 className="text-lg font-semibold mb-2">號碼出現頻率</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={frequencyData}>
          <XAxis dataKey="number" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* 熱號 & 冷號顯示 */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">🔥 熱門號碼</h2>
        <p className="text-red-500 text-xl">{hotNumbers.join(", ")}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">❄️ 冷門號碼</h2>
        <p className="text-blue-500 text-xl">{coldNumbers.join(", ")}</p>
      </div>

      {/* 連續號碼分析 */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">🔗 連續號碼分析</h2>
        {consecutiveData.length > 0 ? (
          <ul className="list-disc pl-6">
            {consecutiveData.map(({ pair, count }, index) => (
              <li key={index} className="text-gray-700">
                {pair} 出現 {count} 次
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">沒有連續號碼</p>
        )}
      </div>
    </div>
  );
}