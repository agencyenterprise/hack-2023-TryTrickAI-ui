import { Button } from "@/components/button";

export default function Home() {
  return (
    <>
      <h1 className="font-kumar text-8xl leading-snug text-center">Try to<br />Trick AI</h1>
      <h2 className="text-2xl font-medium mt-10 mb-6 text-center">How it works</h2>
      <p className="font-medium max-w-3xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">try to solve a puzzle</Button>
        <Button  href="/create-puzzle" variant="secundary">create a puzzle</Button>
      </div>
    </>
  )
}
