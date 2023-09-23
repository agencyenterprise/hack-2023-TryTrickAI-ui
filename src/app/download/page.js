'use client'
import { Button } from "@/components/Button"
import { TrickAiService } from "@/trickAiService"
import { useState } from "react"

export default function FormDataRequest() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: ''
  })
  const [message, setMessage] = useState('')

  const submit = async () => {
    try {
      await TrickAiService.getOurData(form)
      setMessage('Thanks for your interest! We’ll be in touch soon.')
    } catch (error) {
      setMessage(error.message)
    }
  }

  const setFormValue = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Header />
      <div className="space-y-6 text-black mx-auto">
        <h2 className="text-2xl font-bold uppercase text-center text-white mb-14">You’ll like it. I promise.</h2>
        <div className="sm:min-w-[448px] space-y-6 px-10 py-8 rounded-sm drop-shadow-white shadow-xl bg-leaderboard-card border border-white/50">
          <Input
            label="Name"
            placeholder="Normal Human Name"
            name="name"
            onChange={setFormValue}
            />
          <Input
            label="Email address"
            placeholder="human@being.com"
            name="email"
            type="email"
            onChange={setFormValue}
            />
          <Input
            label="What do you plan to do with this data?"
            placeholder="Definitely not try to overthrow human civilization..."
            name="interest"
            onChange={setFormValue}
          />
          <Button onClick={submit} className="bg-black w-full">Submit</Button>
          <p className="text-black">{message}</p>
        </div>
      </div>
    </>
  )
}

function Input({ label, type='text', ...props }) {
  const id = props.id || props.name
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-[#292929]">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          {...props}
          className="w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

function Header() {
  return <img className="mx-auto mt-24 mb-5" src="/download.svg" />
}