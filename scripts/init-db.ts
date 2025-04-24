import { initializeDatabase } from '@/lib/initDb';
import { createUser } from '@/lib/server-utils';

async function main() {
    try {
        // Initialize database schema
        console.log('Initializing database schema...');
        await initializeDatabase();
        
        // Create admin user if it doesn't exist
        try {
            console.log('Creating admin user...');
            await createUser(
                'admin@simpulse.com',
                'admin123', // Change this in production
                'Admin User',
                'admin'
            );
            console.log('Admin user created successfully');
        } catch (error: any) {
            if (error.message?.includes('UNIQUE constraint')) {
                console.log('Admin user already exists');
            } else {
                throw error;
            }
        }
        
        console.log('Database initialization completed successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

main();