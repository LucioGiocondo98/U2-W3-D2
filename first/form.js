
//Salva
const savedButton = document.getElementById('saveButton');
savedButton.addEventListener('click', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name').value;
    if (nameInput) {
        localStorage.setItem('name', nameInput);
        updateSavedValue(); 
    } else {
        alert('Please, insert name');
    }
});

//Rimuovi
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('name'); 
    document.getElementById('name').value = ''; 
    updateSavedValue(); 
});
const updateSavedValue = function() {
    const savedName = localStorage.getItem('name');
    const savedValueElement = document.getElementById('savedValue');
    if (savedName) {
        savedValueElement.textContent = 'Nome salvato: ' + savedName;
    } else {
        savedValueElement.textContent = ''; 
    }
}

updateSavedValue();