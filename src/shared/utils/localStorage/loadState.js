export default function loadState() {
  const state = localStorage.getItem('state')

  if (state) {
    return JSON.parse(state)
  }
}
