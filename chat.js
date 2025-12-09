function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBody = document.getElementById("chatBody");

    const text = input.value.trim();
    if (text === "") return;

    
    const bubble = document.createElement("div");
    bubble.className = "message";
    bubble.textContent = text;
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;

    input.value = "";
}

document.getElementById("messageInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});