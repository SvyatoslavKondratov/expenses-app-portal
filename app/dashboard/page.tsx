"use client"

import { Typography } from "@mui/material"
import { getProfile } from "../lib/userService"
import { useEffect, useState } from "react"
import { redirect, useRouter } from "next/navigation"

export default function Page() {
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userData = await getProfile()
      if (userData.statusCode && userData.statusCode === 401) {
        router.push("/")
      }
      const { username } = userData
      setUserName(username)
    }
    fetchUserProfile()
  }, [])

  return (
    <Typography component="h1" variant="h2">
      Welcome {userName} !!!!!
    </Typography>
  )
}
