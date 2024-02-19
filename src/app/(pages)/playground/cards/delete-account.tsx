import { Alert } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const DeleteAccount = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          This will remove your account from the system.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <Alert variant="destructive">
          <p className="text-sm font-medium">
            Please be absolutely sure you want to delete your account. You will
            not be able to recover your account after this.
          </p>
        </Alert>
        <div className="space-y-3">
          <div>
            Please type{" "}
            <Badge variant="outline" className="font-mono">
              delete my account
            </Badge>{" "}
            to confirm.
          </div>
          <Input placeholder="Enter confirmation here..." />
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>

          <Button type="submit" variant="destructive">
            Delete Account
          </Button>
        </div>
        <p className="text-right text-xs text-muted-foreground">
          Don&apos;t worry, nothing will happen if you click the button above.
        </p>
      </CardContent>
    </Card>
  )
}
