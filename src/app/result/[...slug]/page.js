import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Result({ params, searchParams }) {
  const { slug } = params
  const [clueId, result] = slug
  const { percentage } = searchParams

  const isSuccess = result === 'success'

  return (
    <>
      <Title>
        {
          isSuccess
            ? (<>Flawless<br />Victory</>)
            : (<>That<br />Sucked</>)
        }
      </Title>
      {
        percentage && <p className="text-center text-2xl font-medium">
          {
            isSuccess
              ? (<>{percentage*100}%<br /> of your fellow humans succeeded</>)
              : 'What are you gonna do about it?'
          }
        </p>
      }
      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">{isSuccess ? 'try a new puzzle' : 'try again'}</Button>
        <Button  href={ isSuccess ? '/leaderboard' : '/create-puzzle' } variant="secundary">
          { isSuccess ? 'See Leaderboard' : 'try a new puzzle' }
        </Button>
      </div>
    </>
  )
}