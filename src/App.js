import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (language) => {
    setSelectedLanguage(language);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSpeak = (text, e) => {
    e.stopPropagation(); // prevent card from flipping
    const utterance = new SpeechSynthesisUtterance(text);
    switch (selectedLanguage) {
      case 'German':
        utterance.voiceURI = 'Google Deutsch';
        break;
      case 'Spanish':
        utterance.voiceURI = 'Google español';
        break;
      case 'Italian':
        utterance.voiceURI = 'Google italiano';
        break;
      default:
        break;
    }
    speechSynthesis.speak(utterance);
  };
  

  const cardStyle = {
    backgroundColor:
      selectedLanguage === "German"
        ? "lightgreen"
        : selectedLanguage === "Spanish"
        ? "lightcoral"
        : selectedLanguage === "Italian"
        ? "lightpink"
        : "white",
    borderRadius: "10px",
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Language Cards</h1>
        <p>Select a language to see the word for "Hello"</p>
        <div className="language-buttons">
          <button onClick={() => handleClick('German')}>German</button>
          <button onClick={() => handleClick('Spanish')}>Spanish</button>
          <button onClick={() => handleClick('Italian')}>Italian</button>
        </div>
        {selectedLanguage && (
          <div className="card-container">
            <div
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={handleCardClick}
              style={cardStyle}
            >
              <div
                className="card-front"
                style={{
                  backgroundColor:
                    selectedLanguage === "German"
                      ? "green"
                      : selectedLanguage === "Spanish"
                      ? "orange"
                      : selectedLanguage === "Italian"
                      ? "red"
                      : "",
                }}
              >
                Hello
              </div>
              <div
                className="card-back"
                style={{
                  backgroundColor:
                    selectedLanguage === "German"
                      ? "green"
                      : selectedLanguage === "Spanish"
                      ? "orange"
                      : selectedLanguage === "Italian"
                      ? "red"
                      : "",
                }}
              >
                {selectedLanguage === "German" && (
                  <>
                    <div>Hallo</div>
                    {isFlipped && (
                      <button onClick={(e) => handleSpeak("Hallo", e)}>
                        Speak
                      </button>
                    )}
                  </>
                )}
                {selectedLanguage === "Spanish" && (
                  <>
                    <div>Hola</div>
                    {isFlipped && (
                      <button onClick={(e) => handleSpeak("Hola", e)}>
                        Speak
                      </button>
                    )}
                  </>
                )}
                {selectedLanguage === "Italian" && (
                  <>
                    <div>Ciao</div>
                    {isFlipped && (
                      <button onClick={(e) => handleSpeak("Ciao", e)}>
                        Speak
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
