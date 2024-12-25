const style = document.createElement('style');
style.textContent = 'html, body { overflow: scroll !important; }';
document.head.appendChild(style);

document.addEventListener('wheel', event => {
  // @ts-ignore
  if (window.config.lineWrapping && event.deltaX !== 0 && window.visualViewport?.scale === 1.0) {
    event.preventDefault();
  }
}, { passive: false });
