import { NextResponse } from "next/server";

export  async function GET(request) {
  try {
    return NextResponse.json({ m: "hello" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ m: "no" }, { status: 400 });
  }
}
