/*
 * Greet should render the text hello and if a name is pass in to the components
 * it should render hello followed by the name
 */
import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  test('renders without name', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello Guest')
    expect(textElement).toBeInTheDocument()
  })
})
describe('Nested', () => {
  test('renders a name', () => {
    render(<Greet name="dami" />)
    const textElement = screen.getByText('Hello dami')
    expect(textElement).toBeInTheDocument()
  })
})
