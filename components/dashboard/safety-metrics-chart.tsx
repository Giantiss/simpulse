'use client';

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const safetyData = [
  { name: 'Week 1', Hazards: 12, Incidents: 3, NearMisses: 8 },
  { name: 'Week 2', Hazards: 9, Incidents: 1, NearMisses: 6 },
  { name: 'Week 3', Hazards: 7, Incidents: 2, NearMisses: 4 },
  { name: 'Week 4', Hazards: 8, Incidents: 0, NearMisses: 5 },
];

export function SafetyMetricsChart() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[200px] flex items-center justify-center">Loading chart...</div>;
  }

  const textColor = theme === 'dark' ? '#e1e1e1' : '#333333';
  const gridColor = theme === 'dark' ? '#313131' : '#e1e1e1';

  return (
    <div className="h-[200px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={safetyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: textColor }}
            axisLine={{ stroke: gridColor }}
            tickLine={{ stroke: gridColor }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: textColor }}
            axisLine={{ stroke: gridColor }}
            tickLine={{ stroke: gridColor }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1f1f1f' : '#fff',
              border: `1px solid ${gridColor}`,
              borderRadius: '4px',
              color: textColor
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: textColor }} />
          <Bar dataKey="Hazards" name="Hazards" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Incidents" name="Incidents" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="NearMisses" name="Near Misses" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}