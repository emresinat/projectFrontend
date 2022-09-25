import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
    const hashedPassword = hash(password,10);
    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
    const isVerified = compare(password, hashedPassword);
    return isVerified;
}
