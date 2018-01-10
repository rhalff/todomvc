export default function saveState(state) {
  localStorage.setItem('state', JSON.stringify(state))
}
