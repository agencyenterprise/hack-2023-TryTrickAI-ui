'use client'
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/Button"
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
    try {
      const result = await TrickAiService.submitClue({
        clue_text: clueRef.current.value,
        instruction_id: instructions.instruction_id
      })

      if (result.llm_result !== undefined) {
        router.push(`/result/create/${instructions.instruction_id}/${result.llm_result ? 'failure' : 'success'}`)
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
    setLoading(false)
  }

  if (!instructions || loading || error) {
    return (
      <>
        <Header />
        <div className="text-center space-y-6 mx-auto">
          {
            error
              ? <><p className="text-2xl font-medium uppercase">Ops... seems we have a </p><img src="/bug.webp" /></>
              : <Loading />
          }
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <section className="max-w-2xl space-y-6 text-black">
        <div className="rounded-sm space-y-8 text-left p-8 bg-card shadow-xl border border-white/50">
          <Divider color="bg-[#292929]" />
          <div className="space-y-4">
            <h3 className="text-2xl font-medium uppercase">Objective</h3>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: normalizeInstruction(instructions) }} />
            <h3 className="font-medium uppercase">Your code:</h3>
            <p className="font-medium">{instructions.secret}</p>
          </div>
          <Divider color="bg-[#292929]" />
        </div>
        <div className="flex flex-col bg-card rounded-sm p-8 space-y-4 shadow-xl border border-white/50">
          <h2 className="text-2xl font-medium uppercase">Create your clue</h2>
          <p className="font-light">Describe your code in way that a human can understand and a machine cannot.</p>
          <textarea
            ref={clueRef}
            className="py-1.5 px-3 rounded-sm flex-grow text-sm w-full border border-neutral-50"
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
  return <img className="mx-auto mt-24 mb-20" src="/createPuzzle.svg" />
}
