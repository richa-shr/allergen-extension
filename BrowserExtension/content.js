fetch('http://localhost:3000/api/allergens')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        const allergens=data.allergens;
        const ingredientsText = document.body.innerText.toLowerCase();
        const matched = allergens.filter(allergen =>
            ingredientsText.includes(allergen.name.toLowerCase())
        );
        if (matched.length > 0) {
            alert(`Warning! Found allergens: ${matched.map(a => a.name).join(', ')}`);
        }
    })
    .catch(err => console.error('Error fetching allergens:', err));
 