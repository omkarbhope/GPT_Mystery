import React from 'react';
import './instruction.css';

const InstructionModal = () => {
  return (
    <div className="instructions-container">
      <h1>Game Instructions</h1>
      <p><strong>Start a Level:</strong> A detailed image will be displayed on the screen.</p>
      <p><strong>Question from GOST:</strong> GOST will pop up and ask you a question, and the answer is the password to unlock the next level.</p>
      <p><strong>Hint Box:</strong> A hint box will be available for you to view if necessary. It will be the first page available once you enter a level.</p>
      <p><strong>Make Inferences:</strong> Use the clues from the image to guess the password.</p>
      <p><strong>Navigate the Level:</strong> Double-click to drag the photo around, and pinch to zoom in.</p>
      <p><strong>Enter Answer:</strong> Single-click to bring up the text box to type your answer into GOST. There's no time or answer limit.</p>
      <p><strong>Next Level:</strong> Once you have the correct answer, you'll move on to the next level.</p>
    </div>
  );
}

export default InstructionModal;
