import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Divide } from "lucide-react"


const StatusCard = ({ icon, data, description}) => {
  return (
    <Card className="flex flex-row min-w-52 max-w-full h-24 p-5 hover:bg-slate-200">
        <div className="h-24 w-24 text-yellow-600">
            <div>{icon}</div>
        </div>
        <CardContent className="flex flex-1 flex-col items-end justify-between">
            <div className="text-3xl text-current mb-1">{data}</div>
            <CardDescription>{description}</CardDescription>
        </CardContent>
    </Card>
  )
}

export default StatusCard