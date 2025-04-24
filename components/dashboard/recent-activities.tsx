'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  HardHat, 
  Package2, 
  Users, 
  MessageSquare,
  AlertTriangle,
  Truck,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define activity types
type ActivityType = 'safety' | 'material' | 'workforce' | 'message';

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  time: string;
  user: {
    name: string;
    initials: string;
  };
}

// Sample activity data
const activities: Activity[] = [
  {
    id: 1,
    type: 'safety',
    title: 'Hazard Reported',
    description: 'Exposed electrical wiring in Building B, Floor 2',
    time: '10 mins ago',
    user: {
      name: 'James Mwangi',
      initials: 'JM',
    },
  },
  {
    id: 2,
    type: 'material',
    title: 'Material Delivery',
    description: '500 bags of cement received at Site A',
    time: '45 mins ago',
    user: {
      name: 'Grace Wanjiku',
      initials: 'GW',
    },
  },
  {
    id: 3,
    type: 'workforce',
    title: 'Attendance Alert',
    description: '3 workers absent today without prior notice',
    time: '1 hour ago',
    user: {
      name: 'David Ochieng',
      initials: 'DO',
    },
  },
  {
    id: 4,
    type: 'message',
    title: 'Team Message',
    description: 'Safety meeting scheduled for tomorrow at 8:00 AM',
    time: '2 hours ago',
    user: {
      name: 'Sarah Kamau',
      initials: 'SK',
    },
  },
  {
    id: 5,
    type: 'safety',
    title: 'Incident Resolved',
    description: 'Leak in water pipe fixed in Building C',
    time: '3 hours ago',
    user: {
      name: 'John Mutua',
      initials: 'JM',
    },
  },
];

// Icon and color mappings
const typeConfig = {
  safety: {
    icon: HardHat,
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
  },
  material: {
    icon: Package2,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
  },
  workforce: {
    icon: Users,
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  message: {
    icon: MessageSquare,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
};

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>The latest updates from your construction sites.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => {
            const TypeIcon = typeConfig[activity.type].icon;
            return (
              <div key={activity.id} className="flex">
                <div className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full",
                  typeConfig[activity.type].bgColor
                )}>
                  <TypeIcon className={cn("h-5 w-5", typeConfig[activity.type].color)} />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center pt-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback className="text-xs">{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {activity.user.name} • {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}