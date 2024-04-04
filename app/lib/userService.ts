import { redirect } from "next/navigation"

export async function authenticate(formData: FormData) {
  const email: string = (formData.get("email") as string) || ""
  const password: string = (formData.get("password") as string) || ""

  const res = await fetch("http://localhost:8080/authorization", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })

  return await res.json()
}

export async function getProfile() {
  const res = await fetch("http://localhost:8080/authorization/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  debugger
  return await res.json()
}
