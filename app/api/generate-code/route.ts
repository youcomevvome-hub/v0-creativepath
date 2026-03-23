import { NextRequest, NextResponse } from "next/server"

const SERVICE_CODES: Record<string, string> = {
  "wes-support": "WES",
  "gre-support": "GRE",
  "application-fee-support": "APP",
  "initial-deposit-support": "DEP",
  "english-test-support": "ENG",
  "sevis-fee-support": "SEVIS",
  "visa-fee-support": "VISA",
  "tuition-fee-support": "TUI",
  "transcript-support": "TRAN",
  "college-board-support": "CB",
  "mentorship-program": "MEN",
  "enrollment-deposit-support": "ENRL",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { service } = body

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service is required" },
        { status: 400 }
      )
    }

    const serviceCode = SERVICE_CODES[service] || "GEN"
    const year = new Date().getFullYear()
    const uniqueNum = Math.floor(Math.random() * 999999)
      .toString()
      .padStart(6, "0")

    const eligibilityCode = `VP-${serviceCode}-${year}-${uniqueNum}`

    return NextResponse.json({
      success: true,
      data: {
        eligibilityCode,
        service,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error generating code:", error)
    return NextResponse.json(
      { success: false, error: "Failed to generate eligibility code" },
      { status: 500 }
    )
  }
}
