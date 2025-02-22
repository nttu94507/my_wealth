// src/app/components/CategoryBlock.js
"use client";
export function CategoryBlock({ title, items, setItems, total, color }) {
    const addItem = () => setItems((prev) => [...prev, { name: "", amount: 0 }]);
    const updateItem = (index, value) => {
        setItems((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    return (
        <div className={`p-4 rounded-lg shadow-md ${color}`}>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            {items.map((item, idx) => (
                <div key={idx} className="flex space-x-2 mb-2">
                    <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateItem(idx, { ...item, name: e.target.value })}
                        placeholder="項目名稱"
                        className="w-1/3 p-2 border rounded"
                    />
                    <input
                        type="number"
                        value={item.amount}
                        onChange={(e) => updateItem(idx, { ...item, amount: e.target.value })}
                        placeholder="金額"
                        className="w-1/3 p-2 border rounded"
                    />
                    <span className="w-1/3 text-right font-medium">
                        {total > 0 ? ((item.amount / total) * 100).toFixed(2) + '%' : '0%'}
                    </span>
                </div>
            ))}
            <button onClick={addItem} className="w-full mt-2 bg-gray-300 p-2 rounded">新增 {title} 項目</button>
        </div>
    );
}