'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import useEffectOnce from "@/hooks/effectOnce";
import { Loading } from "@/components/Loading";

export default function SolveResult({ params, searchParams }) {
  const { slug } = params
  const [clueId, result] = slug
  const { percentage } = searchParams
  const [initialized, setInitialized] = useState(false)
  const [totalAttempts, setTotalAttempts] = useState(0)
  const router = useRouter()

  const isSuccess = result === 'success'
  const image = isSuccess ? '/success-solve.svg' : '/failure-solve.svg'

  useEffectOnce(() => {
    if (isSuccess) {
      localStorage.removeItem('clue')
    } else {
      const storedClue = localStorage.getItem('clue')
      if (storedClue) {
        const { attempts } = JSON.parse(storedClue)
        setTotalAttempts(attempts)
      } else {
        setTotalAttempts(3)
      }
    }
    setInitialized(true)
  })

  if (!initialized) {
    return (
      <>
        <img src={image} />
        <div className="text-center max-w-[400px] mx-auto space-y-12 uppercase py-20">
          <Loading />
        </div>
      </>
    )
  }

  const clearClueAndRedirect = (url) => {
    return () => {
      localStorage.removeItem('clue')
      router.push(url)
    }
  }

  return (
    <>
      <img src={image} />
      <div className="text-center max-w-[400px] mx-auto space-y-12 uppercase py-20">
        <Divider />
        <div className="flex flex-col space-y-4 items-center text-2xl font-albert">
          { isSuccess ? <SuccessMessage percentage={percentage} /> : <FailureMessage attempts={totalAttempts} /> }
        </div>
        <Divider />
      </div>
      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        {
          totalAttempts < 3
            ? <Button href="/solve-puzzle">{isSuccess ? 'Try a new puzzle' : 'Try again'}</Button>
            : <Button onClick={clearClueAndRedirect("/create-puzzle")}>Create a puzzle</Button>
          }
        <Button onClick={clearClueAndRedirect(isSuccess ? "/create-puzzle" : '/solve-puzzle')} variant="secundary">
          { isSuccess ? 'Create a puzzle' : 'Try a new puzzle' }
        </Button>
      </div>
    </>
  )
}

function SuccessMessage({ percentage }) {
  return (
    <>
      <p className="font-bold">
        <span className="font-black block text-6xl -mb-2">
          {Math.round((percentage || 0) * 100)}%</span>
          <br /> of your fellow humans solved this puzzle
      </p>
    </>
  )
}

function FailureMessage({ attempts }) {
  const hasAttempts = attempts < 3
  return (
    <>
      <p className="mb-6">Get ahold of yourself and determine your next move</p>
      {
        hasAttempts && <span className="px-8 py-2 bg-white/60 rounded-3xl font-albert font-medium capitalize text-black text-base">
          { 3 - attempts } Attempts Remaining
        </span>
      }
    </>
  )
}
