function submitQuote() {
    const addr = document.getElementById('addr').value;
    if(!addr) { 
        alert('Please enter your address'); 
        return; 
    }
    document.getElementById('form-view').style.display = 'none';
    document.getElementById('success-view').style.display = 'block';
}

function resetQuoteForm() {
    document.getElementById('addr').value = '';
    document.getElementById('form-view').style.display = 'block';
    document.getElementById('success-view').style.display = 'none';
}
