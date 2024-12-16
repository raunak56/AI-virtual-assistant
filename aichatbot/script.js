// // Chat elements
// const chatBox = document.getElementById('chat-box');
// const userInput = document.getElementById('user-input');
// const sendBtn = document.getElementById('send-btn');
// const voiceBtn = document.getElementById('voice-btn');

// // Functions for speech synthesis
// function speak(text) {
//   const speech = new SpeechSynthesisUtterance(text);
//   speech.lang = 'en-US';
//   window.speechSynthesis.speak(speech);
// }

// // Add message to chat box
// function addMessage(text, isBot = false) {
//   const messageDiv = document.createElement('div');
//   messageDiv.className = isBot ? 'bot-message' : 'user-message';
//   messageDiv.textContent = text;
//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Process user message
// function processMessage(message) {
//     // Simulate bot response
//     const botResponse = `You said: ${message}. I am still learning!`;
//     addMessage(botResponse, true);
//     speak(botResponse);
//   }
  

// // Event listeners
// sendBtn.addEventListener('click', () => {
//   const message = userInput.value.trim();
//   if (message) {
//     addMessage(message);
//     processMessage(message);
//     userInput.value = '';
//   }
// });

// voiceBtn.addEventListener('click', () => {
//   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//   recognition.lang = 'en-US';

//   recognition.onstart = () => speak('Listening...');
//   recognition.onspeechend = () => recognition.stop();

//   recognition.onresult = (event) => {
//     const speech = event.results[0][0].transcript;
//     addMessage(speech);
//     processMessage(speech);
//   };

//   recognition.onerror = (err) => speak("Sorry, I couldn't understand. Try again.");
//   recognition.start();
// });
// Chat elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const voiceBtn = document.getElementById('voice-btn');

// Functions for speech synthesis
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
}

// Add message to chat box
function addMessage(text, isBot = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = isBot ? 'bot-message' : 'user-message';
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Process user message
function processMessage(message) {
  message = message.toLowerCase(); // Normalize the message
  
  if (message.includes('open calculator')||('calculator')) {
    addMessage('Opening Calculator...', true);
    speak('Opening Calculator...');
    window.open('https://www.calculator.net/', '_blank');
  } else if (message.includes('open whatsapp')) {
    addMessage('Opening WhatsApp...', true);
    speak('Opening WhatsApp...');
    window.open('https://web.whatsapp.com', '_blank');
  } else if (message.includes('open google')) {
    addMessage('Opening Google...', true);
    speak('Opening Google...');
    window.open('https://www.google.com', '_blank');
  } else if (message.includes('open youtube')) {
    addMessage('Opening YouTube...', true);
    speak('Opening YouTube...');
    window.open('https://www.youtube.com', '_blank');
  } else if (message.includes('open quora')) {
    addMessage('Opening Quora...', true);
    speak('Opening Quora...');
    window.open('https://www.quora.com', '_blank');
  } else {
    const botResponse = `You said: ${message}. I am still learning!`;
    addMessage(botResponse, true);
    speak(botResponse);
  }
}

// Event listeners
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message);
    processMessage(message);
    userInput.value = '';
  }
});

voiceBtn.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.onstart = () => speak('Listening...');
  recognition.onspeechend = () => recognition.stop();

  recognition.onresult = (event) => {
    const speech = event.results[0][0].transcript;
    addMessage(speech);
    processMessage(speech);
  };

  recognition.onerror = (err) => speak("Sorry, I couldn't understand. Try again.");
  recognition.start();
});

