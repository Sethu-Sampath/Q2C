import type * as React from "react"

function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`} {...props} />
}

function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`p-6 ${className}`} {...props} />
}

function CardTitle({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`text-lg font-semibold text-gray-900 ${className}`} {...props} />
}

function CardDescription({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`text-sm text-gray-600 ${className}`} {...props} />
}

function CardContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`px-6 pb-6 ${className}`} {...props} />
}

function CardFooter({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`flex items-center px-6 pb-6 ${className}`} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
