document.getElementById('save-allergens').addEventListener('click', async () => {
    const allergens = document.getElementById('allergen-input').value.split(',');
    const response = await fetch('http://localhost:3000/api/allergens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allergens }),
    });
    if (response.ok) {
        alert('Allergens saved successfully!');
    } else {
        alert('Failed to save allergens.');
    }
});
