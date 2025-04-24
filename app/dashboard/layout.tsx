import { requireAuth } from "@/lib/auth";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await requireAuth();
    
    return (
        <DashboardLayout user={session.user}>
            {children}
        </DashboardLayout>
    );
}