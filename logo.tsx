import { Shield, Star } from "lucide-react"

export default function WarriorsAidLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Shield className="h-10 w-10 text-blue-700" />
        <Star className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-red-600" />
      </div>
      <div className="font-bold text-xl tracking-tight">
        <span className="text-blue-700">Warriors</span>
        <span className="text-red-600">Aid</span>
      </div>
    </div>
  )
}
