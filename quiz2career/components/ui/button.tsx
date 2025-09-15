import type * as React from "react"

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = (props: {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}) => {
  const { variant = "default", size = "default", className = "" } = props

  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3",
    lg: "h-10 px-6",
    icon: "h-9 w-9",
  }

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
}

function Button({ className = "", variant = "default", size = "default", ...props }: ButtonProps) {
  const classes = buttonVariants({ variant, size, className })

  return <button className={classes} {...props} />
}

export { Button, buttonVariants }
