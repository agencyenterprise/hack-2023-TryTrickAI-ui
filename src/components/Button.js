import Link from "next/link"
import { twMerge } from "tailwind-merge"

export function Button({variant = 'primary', href, onClick, className, children }) {
  if (href) {
    return (
      <Link
        href={href}
        className={twMerge(`py-2 px-6 drop-shadow rounded uppercase text-white shadow-sm font-bold text-center ${
          variant === 'primary' ? 'bg-primary-button text-white' : 'border border-white'
        }`, className)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={twMerge(`py-2 px-6 drop-shadow rounded uppercase text-white shadow-sm font-bold text-center ${
        variant === 'primary' ? 'bg-primary-button text-white' : 'border border-white'
      }`, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
