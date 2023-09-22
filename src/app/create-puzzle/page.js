'use client'
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { TrickAiService } from "@/trickAiService"
import useEffectOnce from "@/hooks/effectOnce"
import { Loading } from "@/components/Loading"
import { Divider } from "@/components/Divider"

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

  const submit = async () => {
    if (!clueRef.current.value.trim()) return

    setLoading(true)
    const result = await TrickAiService.submitClue({
      clue_text: clueRef.current.value,
      instruction_id: instructions.instruction_id
    }).catch(setError)
    .finally(() => setLoading(false))

    router.push(`/result/${instructions.instruction_id}/${result.llm_result ? 'failure' : 'success'}`)
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
          <Divider color="bg-[#292929]" />
          <div className="space-y-4">
            <h3 className="text-2xl font-medium uppercase">Objective</h3>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: normalizeInstruction(instructions) }} />
            <h3 className="font-medium uppercase">Your code:</h3>
            <p className="font-medium">{instructions.secret}</p>
          </div>
          <Divider color="bg-[#292929]" />
        </div>
        <div className="flex flex-col bg-zinc-200 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-medium uppercase">Create your clue</h2>
          <p className="font-light">Describe your code in way that a human can understand and a machine cannot.</p>
          <textarea
            ref={clueRef}
            className="py-1.5 px-3 font-roboto rounded-sm flex-grow text-sm w-full border border-neutral-50"
            onKeyUp={(e) => {
              e.preventDefault()
              if(e.target.value.trim() === '') return
              if (e.key === 'Enter' && !e.shiftKey) {
                submit()
              }
            }}
            placeholder="Autosize height based on content lines"
          />
          <Button className="self-end" onClick={submit}>Submit</Button>
        </div>
      </section>
    </>
  )
}

function normalizeInstruction({ instruction, secret }) {
  return instruction.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(secret, `<b>${secret}</b>`);
}

function Header() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-medium uppercase">CREATE A PUZZLE</h2>
      <Title>Trick AI</Title>
    </div>
  )
}
