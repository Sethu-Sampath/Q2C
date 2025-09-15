import type * as React from "react"

function Label({ className = "", ...props }: React.ComponentProps<"label">) {
  return <label className={`text-sm font-medium leading-none text-gray-700 ${className}`} {...props} />
}

export { Label }
