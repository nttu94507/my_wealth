
"use client"
import { useState, useEffect } from "react";

const LotteryResults = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 模擬從 API 獲取數據
        const fetchData = async () => {
            const lotteryData = [
                { date: "2025-03-25", numbers: [1, 12, 23, 34, 35] },
                { date: "2025-03-24", numbers: [3, 8, 19, 27, 30] },
                { date: "2025-03-23", numbers: [5, 11, 22, 29, 31] },
            ];

            // 排序日期（新到舊）
            const sortedData = lotteryData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setData(sortedData);
        };

        fetchData();
    }, []);

    // 格式化日期為「YYYY年M月D日」
    const formatDate = (dateStr) => {
        return new Intl.DateTimeFormat("zh-TW", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(dateStr));
    };

    return (
        <div>
            <h2>539 開獎結果</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.date}>
                        {formatDate(item.date)}：{item.numbers.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LotteryResults;