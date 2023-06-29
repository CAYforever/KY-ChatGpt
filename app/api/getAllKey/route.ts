import { NextResponse } from "next/server";

import { openAIapiKeys } from "../../config/server";

async function handle() {
  return NextResponse.json({ body: openAIapiKeys.length }, { status: 200 });
  //   return NextResponse.json(DANGER_CONFIG);
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
