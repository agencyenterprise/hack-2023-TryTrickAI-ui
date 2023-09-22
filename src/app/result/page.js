import { Title } from "@/components/title";

export default function Result() {
  return (
    <>
      <Title>That Sucked</Title>
      <p>WHat are you gonna do about it?</p>
      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">try again</Button>
        <Button  href="/create-puzzle" variant="secundary">try a new puzzle</Button>
      </div>
    </>
  )
}