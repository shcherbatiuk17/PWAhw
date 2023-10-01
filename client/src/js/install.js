const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // This will store the beforeinstallprompt event

// Event handler for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the browser's default install prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;

  // Show the install button or perform any other action to prompt the user to install
  butInstall.style.display = 'block';
});

// Event handler for the click event on the install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user's choice
    const choiceResult = await deferredPrompt.userChoice;

    // Check if the user accepted the installation
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User declined the PWA installation');
    }

    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  // The PWA was successfully installed
  console.log('PWA was installed');
});
