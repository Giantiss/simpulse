import { executeMany } from './db';
import { initializeSchema } from './schema';

export async function initializeDatabase() {
    'use server';
    try {
        await executeMany(initializeSchema);
        console.log('Database schema initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}