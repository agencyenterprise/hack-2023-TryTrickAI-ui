import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";

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
        <div className="flex flex-col space-y-4 items-center text-2xl font-albert">
          { isSuccess ? <SuccessMessage /> : <FailureMessage /> }
        </div>
        <Divider />
      </div>
      <div className='flex flex-col md:flex-row gap-4 mx-auto mt-20'>
        <Button href="/solve-puzzle">{isSuccess ? 'Try again' : 'Start over'}</Button>
        {
          isSuccess && <Button href="/create-puzzle" variant="secundary">
            create a puzzle
          </Button>
        }
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

function UserGroup() {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3152 26.6666H29.9819V23.9999C29.9819 21.7908 28.191 19.9999 25.9819 19.9999C24.7077 19.9999 23.5727 20.5957 22.8402 21.5238M23.3152 26.6666H9.98185M23.3152 26.6666V23.9999C23.3152 23.1249 23.1466 22.2893 22.8402 21.5238M9.98185 26.6666H3.31519V23.9999C3.31519 21.7908 5.10605 19.9999 7.31519 19.9999C8.58933 19.9999 9.72433 20.5957 10.4568 21.5238M9.98185 26.6666V23.9999C9.98185 23.1249 10.1504 22.2893 10.4568 21.5238M10.4568 21.5238C11.4399 19.068 13.8416 17.3333 16.6485 17.3333C19.4554 17.3333 21.8572 19.068 22.8402 21.5238M20.6485 9.33325C20.6485 11.5424 18.8577 13.3333 16.6485 13.3333C14.4394 13.3333 12.6485 11.5424 12.6485 9.33325C12.6485 7.12411 14.4394 5.33325 16.6485 5.33325C18.8577 5.33325 20.6485 7.12411 20.6485 9.33325ZM28.6485 13.3333C28.6485 14.806 27.4546 15.9999 25.9819 15.9999C24.5091 15.9999 23.3152 14.806 23.3152 13.3333C23.3152 11.8605 24.5091 10.6666 25.9819 10.6666C27.4546 10.6666 28.6485 11.8605 28.6485 13.3333ZM9.98185 13.3333C9.98185 14.806 8.78795 15.9999 7.31519 15.9999C5.84243 15.9999 4.64852 14.806 4.64852 13.3333C4.64852 11.8605 5.84243 10.6666 7.31519 10.6666C8.78795 10.6666 9.98185 11.8605 9.98185 13.3333Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}