import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Bypass check for demonstration using the requested password
    if (email === "admin@jasajoki.com" && password === "Sur20-25324#!") {
      const token = jwt.sign(
        { id: "dev-admin-id", email: email },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1h" }
      );

      const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/"
      });

      return response;
    }


    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    if (!admin) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      path: "/"
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
