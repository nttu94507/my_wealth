"use client"
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './globals.css'

const data = [
  [3, 9, 27, 30, 33],
  [21, 22, 25, 30, 37],
  [1, 5, 21, 32, 37],
  [11, 27, 28, 29, 37],
  [10, 11, 14, 21, 33],
  [1, 16, 33, 37, 39],
  [7, 22, 35, 38, 39],
  [9, 17, 19, 23, 27],
  [3, 6, 15, 19, 24],
  [15, 23, 34, 36, 37],
  [1, 3, 12, 23, 31],
  [14, 20, 27, 33, 38],
  [1, 3, 10, 11, 35],
  [2, 5, 9, 27, 29],
  [10, 17, 32, 38, 39],
  [10, 27, 31, 32, 33],
  [2, 3, 13, 17, 35],
  [15, 20, 28, 36, 37],
  [3, 15, 17, 25, 36],
  [8, 16, 18, 19, 35],
  [4, 12, 29, 33, 36],
  [1, 14, 32, 34, 36],
  [6, 9, 12, 22, 31],
  [1, 8, 9, 30, 35],
  [1, 3, 18, 22, 28],
  [3, 11, 21, 23, 36],
  [6, 10, 21, 32, 38],
  [10, 17, 19, 29, 37],
  [10, 22, 26, 32, 33],
  [14, 20, 21, 23, 34],
  [12, 15, 16, 23, 28],
  [6, 13, 16, 32, 39],
  [6, 11, 15, 28, 31],
  [20, 25, 31, 35, 38],
  [6, 20, 22, 36, 37],
  [3, 18, 19, 21, 22],
  [6, 8, 22, 29, 38],
  [23, 24, 28, 30, 31],
  [4, 16, 27, 30, 37],
  [2, 4, 15, 17, 30],
  [7, 11, 16, 34, 36],
  [12, 18, 31, 38, 39],
  [5, 9, 17, 24, 25],
  [21, 26, 29, 30, 34],
  [1, 3, 4, 35, 37],
  [3, 5, 12, 15, 33],
  [1, 3, 15, 18, 35],
  [2, 7, 10, 15, 33],
  [23, 25, 29, 31, 32],
  [11, 27, 30, 31, 38],
  [7, 14, 28, 29, 38],
  [7, 15, 22, 26, 37],
  [5, 12, 13, 21, 36],
  [17, 19, 29, 36, 37],
  [1, 3, 5, 19, 38],
  [26, 34, 36, 37, 39],
  [9, 19, 23, 36, 38],
  [2, 6, 20, 23, 36],
  [8, 11, 15, 20, 36],
  [5, 10, 27, 37, 38],
  [2, 8, 16, 18, 36],
  [12, 21, 23, 38, 39],
  [8, 12, 22, 35, 36],
  [18, 19, 22, 26, 28],
  [7, 8, 9, 14, 34],
  [2, 6, 16, 27, 39],
  [11, 16, 18, 19, 25],
  [10, 16, 26, 38, 39],
  [5, 24, 29, 34, 35],
  [1, 2, 4, 13, 27],
  [7, 11, 12, 24, 38],
  [7, 17, 27, 28, 33],
  [4, 11, 20, 34, 36],
  [5, 7, 30, 35, 38],
  [10, 21, 23, 27, 30],
  [1, 10, 16, 26, 29],
  [11, 12, 18, 23, 24],
  [2, 12, 15, 24, 35],
  [5, 9, 14, 20, 33],
  [4, 10, 12, 23, 26],
  [1, 3, 6, 21, 27],
  [8, 14, 22, 27, 35],
  [1, 13, 31, 34, 35],
  [4, 7, 15, 22, 30],
  [3, 9, 21, 27, 36],
  [12, 21, 24, 25, 39],
  [2, 3, 21, 26, 30],
  [13, 15, 18, 19, 33],
  [1, 3, 10, 14, 31],
  [1, 2, 9, 19, 31],
  [3, 9, 10, 13, 17],
  [6, 17, 21, 26, 28],
  [15, 28, 35, 36, 39],
  [6, 13, 15, 25, 28]
]


export default function LotteryAnalyzer() {
  const [searchNums, setSearchNums] = useState(["", ""]);
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
      <h1 className="text-xl font-bold mb-4">539 彩票數據分析</h1>
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
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="輸入數字1"
          value={searchNums[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="輸入數字2"
          value={searchNums[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">期數</th>
            <th className="border p-2">開獎號碼</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                {row.map((num, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-8 h-8 mx-1 rounded-full leading-8 text-white ${searchNums.includes(num.toString())
                      ? "bg-red-500"
                      : "bg-gray-700"
                      }`}
                  >
                    {num}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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