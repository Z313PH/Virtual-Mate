function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if (message !== '') {
        var messageList = document.getElementById('chat-messages');
        var newMessage = document.createElement('li');
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        input.value = ''; // clear the input after sending
        messageList.scrollTop = messageList.scrollHeight; // scroll to the bottom
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById('toggle-sidebar');
    var chatSidebar = document.querySelector('.sidebar');
    chatSidebar.classList.toggle('hidden');
    sidebar.classList.toggle('hidden');
    // Update arrow direction based on sidebar state
    sidebar.textContent = chatSidebar.classList.contains('hidden') ? '→' : '←';
}

// Additional functionality to handle Enter key press
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
