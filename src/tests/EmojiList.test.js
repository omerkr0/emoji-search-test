import React from 'react'
import { render, screen } from '@testing-library/react'
import EmojiResults from '../EmojiResults'

// This is a test suite for the EmojiResults component
describe('EmojiResults', () => {

  // This is a test case that checks if the emoji list is rendered correctly
  test('renders the emoji list', () => {

    // Define the emoji data to be rendered in the component
    const emojiData = [
      { symbol: '✨', title: 'Sparkles' },
      { symbol: '⛅', title: 'Partly Sunny' },
      { symbol: '🎉', title: 'Party Popper' },
    ]

    // Render the EmojiResults component with the emoji data as props
    render(<EmojiResults emojiData={emojiData} />)

    // Assert that the emoji list is in the document
    const emojiList = screen.getByTestId('emoji-item')
    expect(emojiList).toBeInTheDocument()

    // Assert that there are three emojis rendered in the component
    const emojis = screen.getAllByRole('img')
    expect(emojis).toHaveLength(3)
  })
})
