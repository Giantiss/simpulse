import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database | null = null;

function getDb() {
    if (!db) {
        db = new Database(path.join(process.cwd(), 'data.db'));
        db.pragma('foreign_keys = ON');
    }
    return db;
}

export async function executeQuery(sql: string, params: any[] = []) {
    'use server';
    const dbInstance = getDb();
    return dbInstance.prepare(sql).run(...params);
}

export async function executeMany(sql: string) {
    'use server';
    const dbInstance = getDb();
    return dbInstance.exec(sql);
}

export async function get(sql: string, params: any[] = []) {
    'use server';
    const dbInstance = getDb();
    return dbInstance.prepare(sql).get(...params);
}

export async function all(sql: string, params: any[] = []) {
    'use server';
    const dbInstance = getDb();
    return dbInstance.prepare(sql).all(...params);
}