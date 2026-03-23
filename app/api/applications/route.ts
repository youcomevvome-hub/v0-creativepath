import { NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, this would be replaced with a proper database
const applications: Map<string, Application> = new Map()

interface Application {
  id: string
  fullName: string
  university: string
  course: string
  gpa: string
  service: string
  hasStartedApplication: string
  waiverOptions: string[]
  acceptPartialWaiver: string
  paymentPlan: string
  concreteStep: string
  whySelected: string
  targetUniversities: string
  eligibilityCode: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Generate unique ID
    const id = `app-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

    const application: Application = {
      id,
      fullName: body.fullName,
      university: body.university,
      course: body.course,
      gpa: body.gpa,
      service: body.service,
      hasStartedApplication: body.hasStartedApplication,
      waiverOptions: body.waiverOptions,
      acceptPartialWaiver: body.acceptPartialWaiver,
      paymentPlan: body.paymentPlan,
      concreteStep: body.concreteStep,
      whySelected: body.whySelected,
      targetUniversities: body.targetUniversities,
      eligibilityCode: body.eligibilityCode,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Store application
    applications.set(id, application)

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          id: application.id,
          eligibilityCode: application.eligibilityCode,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating application:", error)
    return NextResponse.json(
      { success: false, error: "Failed to create application" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const allApplications = Array.from(applications.values())
    return NextResponse.json({
      success: true,
      data: allApplications,
    })
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications" },
      { status: 500 }
    )
  }
}
