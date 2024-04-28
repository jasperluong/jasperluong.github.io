if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
    .then(registration => console.log('SW registered!'))
    .catch(err => console.log(`SW not registered - Error: ${err}`))
})
} else {
    console.log('Service Worker is not supported in this browser.')
}

document.getElementById('backgroundSelector').addEventListener('change', function() {
    const selectedBackground = this.value;
    document.body.className = selectedBackground; 
    localStorage.setItem('background', selectedBackground); 
});

document.getElementById('nameInput').addEventListener('change', function() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greeting').innerHTML = `Hi ${name}, glad to see you back!`; 
    localStorage.setItem('name', name); // Store name in local storage
});

window.onload = function() {
    const storedName = localStorage.getItem('name');
    const storedBackground = localStorage.getItem('background');
    if (storedName) {
        document.getElementById('nameInput').value = storedName;
        document.getElementById('greeting').innerHTML = `Hi ${storedName}, glad to see you back!`;
    }
    if (storedBackground) {
        document.body.className = storedBackground;
        document.getElementById('backgroundSelector').value = storedBackground;
    }
};