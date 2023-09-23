'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import useEffectOnce from '@/hooks/effectOnce'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { TrickAiService } from '@/trickAiService'
import { Loading } from '@/components/Loading'
import { Divider } from '@/components/Divider'

const storeClue = ({ clue, attempts }) => {
  localStorage.setItem('clue', JSON.stringify({ clue, attempts }))
}

export default function SolvePuzzle() {
  const guessRef = useRef(null)
  const [clue, setClue] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [totalAttempts, setTotalAttempts] = useState(1)

  const router = useRouter()

  useEffectOnce(() => {
    const storedClue = localStorage.getItem('clue')
    if (storedClue) {
      const { clue, attempts } = JSON.parse(storedClue)
      setClue(clue)
      setTotalAttempts(attempts + 1)
      storeClue({ clue, attempts: attempts + 1 })
    } else {
      setLoading(true)
      TrickAiService.getClue()
        .then(setClue)
        .catch(setError)
        .finally(() => setLoading(false))
    }
  })

  const submit = async () => {
    if (!guessRef.current.value) return

    try {
      const result = await TrickAiService.submitGuess({
        guess_text: guessRef.current.value,
        clue_id: clue.id
      })

      storeClue({ clue, attempts: totalAttempts })

      let url = `/result/solve/${clue.id}/${result.success ? 'success' : 'failure'}`
      if (result.human_pct_correct) {
        url += `?percentage=${result.human_pct_correct}`
      }
      router.push(url)

    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  if (!clue || loading || error) {
    return (
      <>
        <Header />
        <div className="text-center space-y-6 mx-auto">
          { error ? <p className="text-2xl font-medium uppercase">Error: {error}</p> : <Loading /> }
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <section className="max-w-2xl space-y-6 text-black">
        <ul className="rounded-sm space-y-8 text-left p-8 bg-card shadow-xl border border-white/50">
          <Divider color="bg-[#292929]" />
          <li>
            <h3 className="text-2xl font-medium mb-4 uppercase">Context</h3>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: normalizeInstruction(clue) }} />
          </li>
          <li>
            <h3 className="text-2xl font-medium mb-4 uppercase">Clue</h3>
            <p className="font-medium">{clue.clue_text}</p>
          </li>
          <Divider color="bg-[#292929]" />
        </ul>
        <div className="rounded-sm p-8 space-y-4  bg-card shadow-xl border border-white/50">
          <div className="flex gap-4">
            <input
              ref={guessRef}
              autoFocus
              onKeyUp={(e) => {
                e.preventDefault()
                if(e.target.value.trim() === '') return
                if (e.key === 'Enter') {
                  submit()
                }
              }}
              className="rounded-sm py-2 px-3 flex-grow"
              type="text"
              placeholder="Guess"
            />
            <Button onClick={submit}>Submit</Button>
          </div>
          <p className="font-medium text-[#292929]">Answer is a {clue.secret_type}</p>
        </div>
      </section>
    </>
  )
}

function Header() {
  return <img className="mx-auto mt-24 mb-20" src="/solvePuzzle.svg" />
}

function normalizeInstruction({ guesser_instruction }) {
  return guesser_instruction?.replace(/(?:\r\n|\r|\n)/g, '<br /><br />');
}