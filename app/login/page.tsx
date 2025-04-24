import { Metadata } from "next";
import { requireNoAuth } from '@/lib/auth';
import LoginForm from './login-form';

export const metadata: Metadata = {
    title: 'Login - SitePulse',
    description: 'Login to your SitePulse account',
};

export default async function LoginPage() {
    await requireNoAuth();
    return <LoginForm />;
}