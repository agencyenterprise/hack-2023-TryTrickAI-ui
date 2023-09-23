import { Button } from "@/components/Button"
import { Title } from "@/components/Title"

export default function FormDataRequest() {
  return (
    <>
      <div className="text-center space-y-6">
        <Title>Download Our Data</Title>
      </div>
      <div className="space-y-6 text-black mx-auto">
        <h2>It's super fun data. You'll like it. I promise.</h2>
        <div className="sm:min-w-[448px] space-y-6 px-10 py-8 rounded-lg drop-shadow-white shadow shadow-white bg-gray-900">
          <Input label="Name" name="name" />
          <Input label="Email address" name="email" />
          <Input label="What do you plan to do with this data?" name="plans" />
          <Button className="bg-indigo-600 w-full">Submit</Button>
        </div>
      </div>
    </>
  )
}

function Input({ label, type='text', ...props }) {
  const id = props.id || props.name
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-white">
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