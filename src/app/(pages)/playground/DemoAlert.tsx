import { Alert, AlertDescription, AlertTitle } from "@/components/Alert"
import { h3 } from "@/components/Typography"
import { AlertCircle, Terminal } from "lucide-react"

export default function DemoAlert() {
  return (
    <div className="space-y-3">
      <h1 className={h3}>Alert</h1>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  )
}
