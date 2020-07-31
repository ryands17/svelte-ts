import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

test('renders learn svelte link', () => {
  render(App)
  const linkElement = screen.getByText(/learn svelte/i)
  expect(linkElement).toBeInTheDocument()
})
