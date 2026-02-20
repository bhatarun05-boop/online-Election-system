document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('voteForm');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const voterId = form.elements['voterId'].value;
        const name = form.elements['name'].value;
        const candidate = form.elements['candidate'].value;

        if (voterId && name && candidate) {
            // Store votes (in a real system, you would send this to a server)
            // For simplicity, we will just display the result here.
            resultText.textContent = `Thank you, ${name} (ID: ${voterId}), for voting for ${candidate}.`;
            resultDiv.style.display = 'block';
            form.reset();
        } else {
            alert('Please fill in all fields before voting.');
        }
    });
});
