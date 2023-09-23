import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <>
      <h1 className="text-8xl leading-snug text-center">Try to<br />Trick AI</h1>
      <div className="rounded-sm space-y-8 text-left p-8 bg-card shadow-xl border border-white/50 text-black">
        <Divider color="bg-[#292929]" />
        <h2 className="text-2xl font-medium mt-10 mb-6 text-center">How it works</h2>
        <p className="font-medium max-w-3xl text-center">Your mission is to outwit the cunning AI, lurking in the digital shadows, by crafting a cryptic clue that will leave it baffled, while simultaneously allowing your fellow human players to decipher the secret concealed within. It’s humans against the machine! Welcome to the world of intrigue and deception. Attempt to solve a puzzle to begin:</p>
        <Divider color="bg-[#292929]" />
      </div>

      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">try to solve a puzzle</Button>
        <Button  href="/create-puzzle" variant="secundary">create a puzzle</Button>
      </div>
    </>
  )
}
