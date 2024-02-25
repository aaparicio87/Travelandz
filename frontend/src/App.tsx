import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { ThemeProvider, createTheme } from "@mui/material"


function App() {

  const defaultTheme = createTheme()

  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </ThemeProvider>
  )
}

export default App
