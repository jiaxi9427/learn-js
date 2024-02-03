window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        // We will only allow a term to be entered if the search input isn't empty
        if (inp.value !== '') {
            // If the array length is 5 or more, remove the oldest search term
            if (myHistory.length >= MAX_HISTORY) {
                myHistory.shift(); // Removes the first item from the array
            }

            // Add the new search term
            myHistory.push(inp.value);
            
            // Sort the array by the length of each item
            const myHistoryCopy = myHistory.slice().sort((a, b) => a.length - b.length);

            // Empty the list so that we don't display duplicate entries
            // The display is regenerated every time a search term is entered.
            list.innerHTML = '';

            // Loop through the sorted array, and display all the search terms in the list
            for (const itemText of myHistoryCopy) {
                const li = document.createElement('li');
                li.textContent = itemText;
                list.appendChild(li);
            }

            // Empty the search input and focus it, ready for the next term to be entered
            inp.value = '';
            inp.focus();
        }
    }
}