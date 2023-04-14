import { render, screen } from '@testing-library/react'
import EmojiResults from '../EmojiResults'
import filterEmoji from '../filterEmoji'

// This is a test suite for the EmojiResults component
describe('EmojiResults', () => {

  // This is a test case that checks if the component renders the correct filtered emoji list
  it('renders filtered emoji list', () => {

    // Define the search text and the maximum number of results to be displayed
    const searchText = 'Hotdog'
    const maxResults = 1

    // Filter the list of emojis based on the search text and maximum number of results
    const filteredEmojiList = filterEmoji(searchText, maxResults)

    // Render the EmojiResults component with the filtered emoji list as a prop
    render(<EmojiResults emojiData={filteredEmojiList} />)

    // Get all the titles of the rendered emojis by their test id
    const emojiTitles = screen.getAllByTestId('emoji-item')

    // Assert that the number of rendered emoji titles is equal to the maximum number of results
    expect(emojiTitles).toHaveLength(maxResults)

    // Assert that each rendered emoji title contains the search text
    emojiTitles.forEach((title) => {
      expect(title).toHaveTextContent(searchText)
    })
  })
})
