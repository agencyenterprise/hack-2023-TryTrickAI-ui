import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="rounded-sm space-y-8 text-left p-8 bg-card shadow-xl border border-white/50 text-black max-w-2xl mx-auto">
        <Divider color="bg-[#292929]" />
        <h2 className="text-2xl font-medium mt-10 mb-6 text-center">How it works</h2>
        <p className="font-medium text-center">Your mission is to outwit the cunning AI, lurking in the digital shadows, by crafting a cryptic clue that will leave it baffled, while simultaneously allowing your fellow human players to decipher the secret concealed within. It’s humans against the machine! Welcome to the world of intrigue and deception. Attempt to solve a puzzle to begin:</p>
        <Divider color="bg-[#292929]" />
      </div>

      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">try to solve a puzzle</Button>
        <Button  href="/create-puzzle" variant="secundary">create a puzzle</Button>
      </div>
    </>
  )
}
function Header() {
  return <img className="mx-auto mt-24 ml-[5%] md:ml-[90px] md:-mb-[100px]" src="/logo.svg" />
}