function toggleTheme(){let e=document.getElementById("theme-style"),t=e.getAttribute("href"),g="./gb-light-min.css";e.setAttribute("href",t===g?"./gb-dark-min.css":g);let l=document.getElementById("theme-toggle");l.textContent=t===g?"SUN":"MOON"}