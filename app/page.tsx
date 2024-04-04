"use client"

import { Button, Grid, TextField } from "@mui/material"
import login from "./lib/actions"

export default function Page() {
  return (
    <form autoComplete="off" method="POST" action={login}>
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin={8}
        gap={1.5}
      >
        <TextField
          name="email"
          type="email"
          required
          placeholder="email"
          id="email"
          label="Email"
        />
        <TextField
          name="password"
          type="password"
          required
          placeholder="passowrd"
          id="password"
          label="Passowrd"
        />
        <Button type="submit" variant="outlined" size="large">
          Login
        </Button>
      </Grid>
    </form>
  )
}
