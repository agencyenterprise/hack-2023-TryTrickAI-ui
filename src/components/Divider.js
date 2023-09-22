import { twMerge } from "tailwind-merge";

export function Divider({ color = 'white' }) {
  const bgColor = color === 'white' ? 'bg-white' : 'bg-[#292929]'
  const borderColor = color === 'white' ? 'border-white' : 'border-[#292929] opacity-20'

  return (
    <div className={twMerge("relative border border-white", borderColor)}>
      <span className={twMerge("bg-white absolute -translate-y-1/2 rotate-45 left-0 block w-3 h-3", bgColor)} />
      <span className={twMerge("bg-white absolute -translate-y-1/2 rotate-45 right-0 block w-3 h-3", bgColor)} />
    </div>
  )
}