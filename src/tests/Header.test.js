import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

// This is a test suite for the Header component
describe('Header component', () => {

  // This is a test case that checks if the Header component renders with the correct text
  it('should render the header with the correct text', () => {

    // Render the Header component
    render(<Header />)

    // Assert that the text "Emoji Search" is in the document
    expect(screen.getByText('Emoji Search')).toBeInTheDocument()
  })
})
