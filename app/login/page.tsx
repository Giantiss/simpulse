import { Metadata } from "next";
import { requireNoAuth } from '@/lib/auth';
import LoginForm from './login-form';

export const metadata: Metadata = {
    title: 'Login - FinFlow',
    description: 'Login to your FinFlow account',
};

export default async function LoginPage() {
    await requireNoAuth();
    return <LoginForm />;
}