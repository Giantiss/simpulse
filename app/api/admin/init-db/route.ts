'use server';

import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/initDb';
import { createUser } from '@/lib/server-utils';

export async function POST(request: Request) {
    try {
        console.log('Initializing database schema...');
        initializeDatabase();
        console.log('Database schema initialized');
        
        try {
            console.log('Creating admin user...');
            await createUser(
                'admin@simpulse.com',
                'admin123', // Change this in production
                'Admin User',
                'admin'
            );
            console.log('Admin user created');
            
            return NextResponse.json({ 
                success: true,
                message: 'Database initialized successfully' 
            });
        } catch (error: any) {
            if (error.message?.includes('UNIQUE constraint')) {
                return NextResponse.json({ 
                    success: true,
                    message: 'Database already initialized' 
                });
            }
            throw error;
        }
    } catch (error) {
        console.error('Error initializing database:', error);
        return NextResponse.json({ 
            success: false,
            error: 'Failed to initialize database' 
        }, { status: 500 });
    }
}