const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

async function fetchWrapper(url, options) {
  const res =  await fetch(url, options)

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.detail)
  }

  return res.json()
}

export const TrickAiService = {
  getInstructions() {
    return fetchWrapper(`${BASE_URL}/get-instructions`)
  },
  submitClue({ clue_text, instruction_id }) {
    return fetchWrapper(`${BASE_URL}/store-clue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clue_text, instruction_id })
    })
  },
  getClue() {
    return fetchWrapper(`${BASE_URL}/get-clue`)
  },
  submitGuess({ guess_text, clue_id }) {
    return fetchWrapper(`${BASE_URL}/submit-guess`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ guess_text, clue_id })
    })
  },
  getLeaderboard() {
    return fetchWrapper(`${BASE_URL}/load-results`)
  },
  getOurData({ name, email, interest }) {
    return fetchWrapper(`${BASE_URL}/store-researcher-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, interest })
    })
  }
}