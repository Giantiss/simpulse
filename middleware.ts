import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            const path = req.nextUrl.pathname;
            
            // Always allow login page
            if (path.startsWith('/login')) {
                return true;
            }
            
            // Must be authenticated for dashboard and account routes
            if (path.startsWith('/dashboard') || path.startsWith('/account')) {
                return !!token;
            }
            
            // Allow other public routes
            return true;
        }
    }
});

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/account/:path*',
        '/login'
    ]
};