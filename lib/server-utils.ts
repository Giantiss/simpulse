'use server';

import { nanoid } from 'nanoid';
import { executeQuery, get, all } from './db';
import bcrypt from 'bcryptjs';

export interface User {
    id: string;
    email: string;
    full_name?: string;
    role: string;
    password_hash: string;
    created_at: Date;
    last_login?: Date;
}

export interface Site {
    id: string;
    name: string;
    location: string;
    created_at: Date;
    updated_at: Date;
}

// Database operations
export async function createUser(email: string, password: string, fullName?: string, role: string = 'worker') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = nanoid();
    
    await executeQuery(
        'INSERT INTO users (id, email, password_hash, full_name, role) VALUES (?, ?, ?, ?, ?)',
        [id, email, hashedPassword, fullName, role]
    );
    return id;
}

export async function getUserById(id: string) {
    return await get('SELECT * FROM users WHERE id = ?', [id]) as User | undefined;
}

export async function getUserByEmail(email: string) {
    return await get('SELECT * FROM users WHERE email = ?', [email]) as User | undefined;
}

export async function createSite(name: string, location: string) {
    const id = nanoid();
    await executeQuery(
        'INSERT INTO sites (id, name, location) VALUES (?, ?, ?)',
        [id, name, location]
    );
    return id;
}

export async function getSites() {
    return await all('SELECT * FROM sites ORDER BY created_at DESC') as Site[];
}

export async function getSiteById(id: string) {
    return await get('SELECT * FROM sites WHERE id = ?', [id]) as Site | undefined;
}

export async function createIncident(siteId: string, reportedBy: string, type: string, severity: string, description: string) {
    const id = nanoid();
    await executeQuery(
        'INSERT INTO incidents (id, site_id, reported_by, type, severity, description) VALUES (?, ?, ?, ?, ?, ?)',
        [id, siteId, reportedBy, type, severity, description]
    );
    return id;
}

export async function getIncidentsBySite(siteId: string) {
    return await all('SELECT * FROM incidents WHERE site_id = ? ORDER BY created_at DESC', [siteId]);
}

export async function updateMaterialQuantity(id: string, quantity: number) {
    await executeQuery(
        'UPDATE materials SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [quantity, id]
    );
}

export async function getMaterialsBySite(siteId: string) {
    return await all('SELECT * FROM materials WHERE site_id = ? ORDER BY name', [siteId]);
}

export async function recordAttendance(siteId: string, userId: string, status: string = 'present') {
    const id = nanoid();
    await executeQuery(
        'INSERT INTO attendance (id, site_id, user_id, status, check_in) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)',
        [id, siteId, userId, status]
    );
    return id;
}

export async function updateCheckOut(attendanceId: string) {
    await executeQuery(
        'UPDATE attendance SET check_out = CURRENT_TIMESTAMP WHERE id = ?',
        [attendanceId]
    );
}

export async function createMessage(siteId: string, senderId: string, content: string, type: string = 'message', priority: string = 'normal') {
    const id = nanoid();
    await executeQuery(
        'INSERT INTO messages (id, site_id, sender_id, content, type, priority) VALUES (?, ?, ?, ?, ?, ?)',
        [id, siteId, senderId, content, type, priority]
    );
    return id;
}

export async function getMessagesBySite(siteId: string, limit: number = 50) {
    return await all(
        'SELECT * FROM messages WHERE site_id = ? ORDER BY created_at DESC LIMIT ?',
        [siteId, limit]
    );
}