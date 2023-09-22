'use client'
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { TrickAiService } from "@/trickAiService"
import useEffectOnce from "@/hooks/effectOnce"
import { Loading } from "@/components/Loading"

export default function CreatePuzzle() {
  const [instructions, setInstructions] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const clueRef = useRef(null)

  const router = useRouter()

  useEffectOnce(() => {
    TrickAiService.getInstructions()
      .then((instructions) => setInstructions(instructions))
  })

  const submitClue = async () => {
    setLoading(true)
    await TrickAiService.submitClue({
      clue_text: clueRef.current.value,
      instruction_id: instructions.id
    }).catch(setError)
    .finally(() => setLoading(false))

    router.push('/')
  }

  if (!instructions || loading || error) {
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
        <div className="bg-zinc-100 rounded-lg space-y-8 text-left p-8">
          <h3 className="text-2xl font-medium mb-4 uppercase">Context</h3>
          <p className="font-medium" dangerouslySetInnerHTML={{ __html: normalizeInstruction(instructions) }} />
        </div>
        <div className="bg-zinc-200 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-medium uppercase">Create your clue</h2>
          <textarea
            ref={clueRef}
            className="py-1.5 px-3 font-roboto rounded-sm flex-grow text-sm w-full border border-neutral-50"
            placeholder="Autosize height based on content lines"
          />
          <Button onClick={() => submitClue()}>Submit</Button>
        </div>
      </section>
    </>
  )
}

function normalizeInstruction({ instruction, secret }) {
  return instruction.replace(/(?:\r\n|\r|\n)/g, '<br /><br />').replace(secret, `<b>${secret}</b>`);
}

function Header() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-medium uppercase">CREATE A PUZZLE</h2>
      <Title>Trick AI</Title>
    </div>
  )
}