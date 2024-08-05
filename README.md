# Flashcards Part 2

## Description
Flashcards Part 2 is an enhanced web application for managing and interacting with flashcards. It presents a single card at a time from a card set, allowing users to guess answers and navigate through the cards. The application incorporates advanced features for user interaction and feedback, including streak tracking.

## Features

### Required Features
- **Card Set Display:** Displays the title of the card set, a brief description, and the total number of cards.
- **Single Card Display:** Shows one card at a time with a component of the paired information.
- **Card Pair List:** Manages a list of card pairs, each consisting of a question and an answer.
- **Card Interaction:**
  - **Click to Flip:** Users can click on a card to flip it and reveal the corresponding component of the information pair.
  - **Next Button:** Clicking the "Next" button displays a new card at random from the set.
  - **User Input:** Users can enter their guess in a box before seeing the flipside of the card.
  - **Submit Button:** Clicking the "Submit" button provides visual feedback on whether the user's answer was correct or incorrect.
  - **Back Button:** Allows users to navigate to the previous card in the sequence.
  - **Next Button:** Allows users to move to the next card in the sequence.

### Stretch Features
- **Shuffle Button:** Randomizes the order of the cards.
- **Fuzzy Matching:** Allows answers to be considered correct even if slightly different from the target answer.
- **Streak Tracking:** Displays a counter for the user's current and longest streak of correct responses.

## Technologies Used
- **React:** For building the user interface and managing state.
- **HTML/CSS:** For structuring and styling the application.
- **JavaScript:** For handling user interactions and dynamic content updates.

## How It Works
1. **Card Set Overview:** The application presents the title and description of the card set along with the total number of cards available.
2. **View Cards:** Users see one card at a time, displaying one component of the paired information (either the question or the answer).
3. **Card Interaction:** Users can click to flip the card, revealing the other component of the information pair.
4. **Navigation:**
   - Clicking the "Next" button displays a random new card.
   - Clicking the "Back" button navigates to the previous card in the sequence.
5. **User Input:** Users can enter their guesses in a text box and click "Submit" to receive feedback on their answer.
6. **Feedback:** The application provides visual feedback indicating whether the answer was correct or incorrect.
7. **Streak Tracking:** A counter displays the user's current and longest streak of correct responses.

## Goals
In this project, I:
- Implemented functionality for displaying and managing flashcards.
- Enabled users to interact with cards by flipping them and viewing the paired information.
- Provided mechanisms for navigating through cards and receiving feedback on user guesses.
- Incorporated advanced features like shuffling cards, fuzzy matching, and streak tracking.

## Demo
A demo of the project can be viewed here:
![Video Walkthrough](https://github.com/vetskiver/flashcards-pt2/blob/master/flashcards-pt2-demo.gif)

## Getting Started
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/flashcards-pt2.git

