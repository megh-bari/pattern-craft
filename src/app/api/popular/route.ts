import { NextResponse } from "next/server";

export async function GET() {
  const source = process.env.POPULAR_SOURCE;
  if (!source) {
    return NextResponse.json(
      { error: "POPULAR_SOURCE env not set" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(source, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: 502 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (e) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 502 });
  }
}
