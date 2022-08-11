const query = '[data-testid="sheetDialog"]';
const interval = 400;

const intervalRef = setInterval(() => {
  if (document.documentElement.style.overflow !== "hidden") return;
  const dialog = document.querySelector(query);
  if (!dialog) return;
  document.documentElement.style.overflow = "scroll";
  dialog.parentElement.remove();
  /**
   * When twitter changes url
   * modal state resets, meaning modal shown on each new page
   * so interval shouldn't be cleared
   **/
}, interval);
