const query = '[data-testid="sheetDialog"]';
const interval = 400;

const intervalRef = setInterval(() => {
  if (document.documentElement.style.overflow) {
    const dialog = document.querySelector(query);
    if (!dialog) return;
    document.documentElement.style.overflow = "scroll";
    dialog.parentElement.remove();
    clearInterval(intervalRef);
  }
}, interval);
