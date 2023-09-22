const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const TrickAiService = {
  getInstructions() {
    return fetch(`${BASE_URL}/get-instructions`)
      .then(res => res.json())
  },
  submitClue(clue_text, instruction_id) {
    return fetch(`${BASE_URL}/store-clue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clue_text, instruction_id })
    })
  },
  getClue() {
    return fetch(`${BASE_URL}/get-clue`)
    .then(res => res.json())
  },
  submitGuess(answer) {
    return fetch(`${BASE_URL}/submit-answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answer })
    })
  },
}