import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CONTACTS_FILE = path.join(process.cwd(), "data", "contacts.json");

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface ContactEntry {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

async function readContacts(): Promise<ContactEntry[]> {
  try {
    const data = await fs.readFile(CONTACTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeContacts(entries: ContactEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const message = body.message?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a message (at least 10 characters)." },
        { status: 400 }
      );
    }

    const contacts = await readContacts();

    contacts.push({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    await writeContacts(contacts);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
