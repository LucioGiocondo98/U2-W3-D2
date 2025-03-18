let counter = parseInt(sessionStorage.getItem('counter')) || 0;
 const updateCounter = () => {
counter++;
sessionStorage.setItem('counter', counter);
document.getElementById('timerDisplay').textContent =  counter + ' s';
};
    
setInterval(updateCounter, 1000);
updateCounter();
