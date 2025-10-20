const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const btnTheme = document.getElementById("btnTheme");
  const btnThemeMobile = document.getElementById("btnThemeMobile");
  const html = document.documentElement;

  // Alternar menu
  menuToggle.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");

    if (isHidden) {
      // Mostrar menu
      menu.classList.remove("hidden");
      menu.classList.add("flex", "animate-slideDown");
      menuIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      `;
    } else {
      // Fechar menu
      menu.classList.add("animate-slideUp");
      setTimeout(() => {
        menu.classList.remove("flex", "animate-slideDown", "animate-slideUp");
        menu.classList.add("hidden");
      }, 300);
      menuIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      `;
    }
  });

  