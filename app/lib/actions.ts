import { redirect } from "next/navigation"
import { authenticate } from "./userService"

export default async function login(formData: FormData) {
  const data = await authenticate(formData)
  const error = data.statusCode && data.statusCode !== 201 ? data : undefined

  if (error) {
    const { statusCode } = (error as { statusCode: number }) || {}
    switch (statusCode) {
      case 401:
        throw error
      default:
        throw new Error("Something went wrong.")
    }
  }

  redirect("/dashboard")
}
