import Link from "next/link"

export function Button({variant = 'primary', href, onClick, children}) {
  if (href) {
    return (
      <Link
        href={href}
        className={`py-2 px-6 drop-shadow rounded-sm uppercase text-white font-roboto ${
          variant === 'primary' ? 'bg-[#1890FF] text-white' : 'border border-neutral-500'
        }`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`py-2 px-6 drop-shadow rounded-sm uppercase font-roboto text-white ${
        variant === 'primary' ? 'bg-[#1890FF] text-white' : 'border border-neutral-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
