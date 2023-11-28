function toggleTheme() {
  const themeLink = document.getElementById('theme-style');
  const currentTheme = themeLink.getAttribute('href');
  const lightTheme = './gb-light-min.css';
  const darkTheme = './gb-dark-min.css';
  const newTheme = currentTheme === lightTheme ? MOON : SUN;

  themeLink.setAttribute('href', newTheme);

  const toggleLink = document.getElementById('theme-toggle');
  toggleLink.textContent = currentTheme === lightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme';
}
