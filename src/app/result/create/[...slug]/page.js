'use client'
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { UserGroup } from "@/components/icons";

export default function CreateResult({ params }) {
  const { slug } = params
  const [clueId, result] = slug

  const isSuccess = result === 'success'
  const image = isSuccess ? '/success-create.svg' : '/failure-create.svg'

  return (
    <>
      <img src={image} />
      <div className="text-center max-w-[400px] mx-auto space-y-12 uppercase py-20">
        <Divider />
        <div className="flex flex-col space-y-4 items-center text-2xl">
          { isSuccess ? <SuccessMessage /> : <FailureMessage /> }
        </div>
        <Divider />
      </div>
      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href={isSuccess ? '/solve-puzzle' : '/create-puzzle'}>{isSuccess ? 'Solve a puzzle' : 'Start over'}</Button>
      </div>
    </>
  )
}

function SuccessMessage() {
  return (
    <>
      <p className="text-2xl uppercase font-bold">you stumped the machines!</p>
      <p className="font-medium text-base normal-case">We’ll show this puzzle to other humans, to see if they can solve it. Check the leaderboard in a little while to see how well they do.</p>
      <UserGroup />
    </>
  )
}

function FailureMessage() {
  return <p>The machines got the best of you this time</p>
}
