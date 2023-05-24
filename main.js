const responses = [
  "I'm sorry, I don't understand.",
  "I'm not sure I understand.",
  "Can you say that again?",
  "Can you repeat that?",
  "Can you rephrase that?",
  "Could you say that again?",
  "Could you repeat that?",
  "Could you rephrase that?",
  "I didn't get that.",
  "I didn't get that, sorry.",
  "I don't understand.",
  "I don't understand. Could you repeat that?",
]; // ChatGPT's responses

$(document).ready(function () {
  // Add event listener here
  // Step 2-3: Implement the behavior of the “send” icon button (30pt)
  $("#hw2__send").click(sendMessageAndResponse);

  $("#hw2__input").keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      sendMessageAndResponse();
    }
  });

  function sendMessageAndResponse() {
    const userConversation = $('<div class="user-conversation"></div>');
    const userIcon = $('<div class="user-icon">' +
      '<div class="user-icon-text">K</div>' +
      '</div>');
    const userText = $('<span class="user-text"></span>');
    const userInput = $("#hw2__input").val();

    userText.text(userInput);
    userConversation.append(userIcon);
    userConversation.append(userText);

    $("#hw2__chat-history").append(userConversation);
    $("#hw2__chat-history").scrollTop($("#hw2__chat-history")[0].scrollHeight);
    $("#hw2__input").val("");
    $("#hw2__input").focus();

    // Step 3-2: Make the response look natural by adding delay and autoscroll (20pt)
    setTimeout(function () {
      // Step 3-1: Provide a dummy response to the user’s input (10pt)
      const randomIndex = Math.floor(Math.random() * responses.length);
      const randomResponse = responses[randomIndex];

      const gptConversation = $('<div class="gpt-conversation"></div>');
      const gptIcon = $('<div class="gpt-icon">' +
        '<img class="openai-icon" src="images/openai-icon.svg" alt="logos:openai-icon" />' +
        '</div>');
      const gptText = $('<span class="gpt-text"></span>');
      const gptConversationIcons = $('<div class="gpt-conversation-icons">' +
        '<img src="images/paste.svg" />' +
        '<img src="images/upvote.svg" />' +
        '<img src="images/downvote.svg" />' +
        '</div>');

      gptText.text(randomResponse);
      gptConversation.append(gptIcon);
      gptConversation.append(gptText);
      gptConversation.append(gptConversationIcons);

      $("#hw2__chat-history").append(gptConversation);
      $("#hw2__chat-history").scrollTop($("#hw2__chat-history")[0].scrollHeight);
    }, 3000);
  }
});
