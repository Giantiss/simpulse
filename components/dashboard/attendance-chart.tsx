'use client';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid,
  ReferenceLine
} from 'recharts';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const attendanceData = [
  { day: 'Mon', attendance: 85 },
  { day: 'Tue', attendance: 88 },
  { day: 'Wed', attendance: 90 },
  { day: 'Thu', attendance: 87 },
  { day: 'Fri', attendance: 89 },
  { day: 'Sat', attendance: 82 },
];

export function AttendanceChart() {
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
        <LineChart data={attendanceData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis 
            dataKey="day" 
            tick={{ fontSize: 12, fill: textColor }}
            axisLine={{ stroke: gridColor }}
            tickLine={{ stroke: gridColor }}
          />
          <YAxis 
            domain={[70, 100]}
            tick={{ fontSize: 12, fill: textColor }}
            axisLine={{ stroke: gridColor }}
            tickLine={{ stroke: gridColor }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1f1f1f' : '#fff',
              border: `1px solid ${gridColor}`,
              borderRadius: '4px',
              color: textColor
            }}
            formatter={(value) => [`${value}%`, 'Attendance']}
          />
          <ReferenceLine y={85} stroke="#FF6B35" strokeDasharray="3 3" />
          <Line 
            type="monotone" 
            dataKey="attendance" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--chart-2))', r: 4 }}
            activeDot={{ r: 6, fill: 'hsl(var(--chart-2))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}