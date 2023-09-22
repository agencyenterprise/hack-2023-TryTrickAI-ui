import { Button } from "@/components/button"
import { Title } from "@/components/title"
import { twMerge } from "tailwind-merge"

const MESSAGES = [
  {
    title: 'Context',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Clue',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

export default function SolvePuzzle() {
  return (
    <>
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-medium uppercase">SOLVE A PUZZLE</h2>
        <Title>Trick AI</Title>
      </div>
      <section className="max-w-2xl space-y-6 text-black">
        <ul className="bg-zinc-100 rounded-lg space-y-8 text-left p-8">
          {MESSAGES.map((message, index) => (
            <li key={index}>
              <h3 className="text-2xl font-medium mb-4 uppercase">{message.title}</h3>
              <p className="font-medium">{message.message}</p>
            </li>
          ))}
        </ul>
        <div className="bg-zinc-200 rounded-lg p-8 space-y-4">
          <div className="flex gap-4">
            <Input type="text" placeholder="Answer" className="font-roboto flex-grow" /><Button>Submit</Button>
          </div>
          <p className="font-roboto">Tip: Answer is a <span className="text-blue-500">numeral</span></p>
        </div>
      </section>
    </>
  )
}

function Input({ className, ...props }) {
  return (
    <input {...props} className={twMerge("rounded-sm py-2 px-3", className)} />
  )
}