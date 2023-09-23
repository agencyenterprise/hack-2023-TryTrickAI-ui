export function Loading() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" r="32"
        className="animate-spin origin-center"
        strokeWidth="8" stroke="#262323" strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none" strokeLinecap="round"
      />
      <circle cx="50" cy="50"
        className="animate-spin-backwards origin-center"
        r="23" strokeWidth="8" stroke="#fefefe" strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round"
      />
    </svg>
  )
}