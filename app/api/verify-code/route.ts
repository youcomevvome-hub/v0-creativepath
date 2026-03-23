import { NextRequest, NextResponse } from "next/server"

// Code verification pattern: VP-{SERVICE}-{YEAR}-{NUMBER}
const CODE_PATTERN = /^VP-[A-Z]{2,5}-\d{4}-\d{6}$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { code } = body

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Eligibility code is required" },
        { status: 400 }
      )
    }

    // Validate code format
    if (!CODE_PATTERN.test(code)) {
      return NextResponse.json({
        success: false,
        data: {
          valid: false,
          message: "Invalid eligibility code format",
        },
      })
    }

    // In production, this would check against the database
    // For now, we validate the format and return a placeholder response
    const [, serviceCode, year] = code.split("-")

    return NextResponse.json({
      success: true,
      data: {
        valid: true,
        code,
        serviceCode,
        year: parseInt(year),
        message: "Code format is valid. Connect to database for full verification.",
        note: "Payment integration pending",
      },
    })
  } catch (error) {
    console.error("Error verifying code:", error)
    return NextResponse.json(
      { success: false, error: "Failed to verify eligibility code" },
      { status: 500 }
    )
  }
}
