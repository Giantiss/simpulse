'use client';

import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend,
  Tooltip
} from 'recharts';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const materialData = [
  { name: 'Adequate', value: 18 },
  { name: 'Low Stock', value: 5 },
  { name: 'Critical', value: 2 },
];

export function MaterialStatusChart() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[200px] flex items-center justify-center">Loading chart...</div>;
  }

  const textColor = theme === 'dark' ? '#e1e1e1' : '#333333';
  const colors = [
    'hsl(var(--chart-2))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-1))'
  ];

  return (
    <div className="h-[200px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={materialData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
            labelLine={false}
          >
            {materialData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1f1f1f' : '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: textColor
            }}
            formatter={(value) => [`${value} items`, null]}
          />
          <Legend 
            layout="horizontal"
            verticalAlign="bottom"
            wrapperStyle={{ fontSize: 12, color: textColor }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}