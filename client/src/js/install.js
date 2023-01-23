const butInstall = document.getElementById("buttonInstall");
butInstall.classList.add("hidden");

// Logic for installing the PWA
//Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});


// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});


// Event handler for the `appinstalled` event

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
