import React, { useEffect, useState } from 'react';
import './Typing.css'; // Import CSS file for styling (optional)

function Typing({ texts = [], typingSpeed = 100, deletingSpeed = 50 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!texts.length) return; // Check if texts array is provided
        const currentText = texts[currentIndex % texts.length]; // Get current text from array

        const handleTyping = () => {
            const currentCharIndex = displayedText.length % currentText.length;
            const currentChar = currentText[currentCharIndex];

            if (!isDeleting && currentCharIndex === currentText.length - 1) {
                setIsDeleting(true);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentIndex(prevIndex => prevIndex + 1); // Move to next text
            }

            if (!isDeleting) {
                // Typing mode
                setDisplayedText(prevText => prevText + currentChar);
            } else {
                // Deleting mode
                setDisplayedText(prevText => prevText.slice(0, -1));
            }
        };

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-container">
            <div className="typing-effect">
                <span>{displayedText}</span>
            </div>
        </div>
    );
}

export default Typing;
