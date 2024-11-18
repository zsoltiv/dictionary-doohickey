function filterEntries() {
    const input = document.getElementById('search').value.toLowerCase();
    const entries = document.querySelectorAll('.dictionary-entry');

    entries.forEach(entry => {
        const word = entry.querySelector('.word').textContent.toLowerCase();
        const enWord = entry.querySelector('.translation').textContent.toLowerCase();
        const def = entry.querySelector('.definition').textContent.toLowerCase();
        if (word.includes(input) || enWord.includes(input) || def.includes(input)) {
            entry.style.display = '';
        } else {
            entry.style.display = 'none';
        }
        }
    );
}