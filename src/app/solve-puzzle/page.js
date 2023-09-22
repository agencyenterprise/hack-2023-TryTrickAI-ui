'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import useEffectOnce from '@/hooks/effectOnce'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { TrickAiService } from '@/trickAiService'
import { Loading } from '@/components/Loading'

export default function SolvePuzzle() {
  const [clue, setClue] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const guessRef = useRef(null)

  const router = useRouter()

  useEffectOnce(() => {
    setLoading(true)
    TrickAiService.getClue()
      .then(setClue)
      .catch(setError)
      .finally(() => setLoading(false))
  })

  const submit = async () => {
    if (!guessRef.current.value) return

    setAttempts(attempts + 1)

    const result = await TrickAiService.submitGuess({
      guess_text: guessRef.current.value,
      clue_id: clue.id
    })

    if (attempts >= 3 || result.success) {
      router.push(`/result/${clue.id}/${result.success ? 'success' : 'failure'}?percentage=${result.human_pct_correct}`)
    }
    setSuccess(result.success)
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
        <ul className="bg-zinc-100 rounded-lg space-y-8 text-left p-8">
          <li>
            <h3 className="text-2xl font-medium mb-4 uppercase">Context</h3>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: normalizeInstruction(clue) }} />
          </li>
          <li>
            <h3 className="text-2xl font-medium mb-4 uppercase">Clue</h3>
            <p className="font-medium">{clue.clue_text}</p>
          </li>
        </ul>
        <div className="bg-zinc-200 rounded-lg p-8 space-y-4">
          <div className="flex gap-4">
            <input
              ref={guessRef}
              autoFocus
              className="rounded-sm py-2 px-3 font-roboto flex-grow"
              type="text"
              placeholder="Guess"
            />
            <Button onClick={submit}>Submit</Button>
          </div>
          {success === false && <p className="font-roboto">Your answer is wrong! Try again</p>}
        </div>
      </section>
    </>
  )
}

function Header() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-medium uppercase">SOLVE A PUZZLE</h2>
      <Title>Trick AI</Title>
    </div>
  )
}

function normalizeInstruction({ guesser_instruction }) {
  return guesser_instruction?.replace(/(?:\r\n|\r|\n)/g, '<br /><br />');
}