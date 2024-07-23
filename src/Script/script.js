document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav_item a");
  const logoDefault = document.getElementById("logo-default");
  const logoScrolled = document.getElementById("logo-scrolled");
  const burger1 = document.querySelector(".burger-1");
  const burger2 = document.querySelector(".burger-2");
  const burger3 = document.querySelector(".burger-3");
  const ButtonMenuDropdown = document.getElementById("dropdownHoverButton");
  const dropdown = document.getElementById("language-dropdown-menu");
  const buttonDrop = document.getElementById("button-dropdown-menu");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      logoDefault.style.display = "none";
      logoScrolled.style.display = "block";
    } else {
      header.classList.remove("scrolled");
      logoDefault.style.display = "block";
      logoScrolled.style.display = "none";
    }
    /*  const route = window.location.pathname.replace(/\$/, "");
    if (
      route === "/registration/logistic-companies" ||
      route === "/registration/merchants"
    ) {
      header.classList.add("scrolled");
      logoDefault.style.display = "none";
      logoScrolled.style.display = "block";
    } */
  }
  function setActiveItem() {
    const currentRoute = window.location.pathname.replace(/\$/, "");
    navItems.forEach((item) => {
      const itemRoute = item.getAttribute("data-route");
      if (currentRoute === itemRoute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  setActiveItem();

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      navList.classList.remove("open");
    });
  });

  window.addEventListener("scroll", handleScroll);
  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("open");
    burger1.classList.toggle("burger-active");
    burger2.classList.toggle("burger-active");
    burger3.classList.toggle("burger-active");
  });

  buttonDrop.addEventListener("mouseover", function () {
    dropdown.classList.add("active");
  });

  buttonDrop.addEventListener("mouseout", function () {
    dropdown.classList.remove("active");
  });

  ButtonMenuDropdown.addEventListener("mouseover", function () {
    ButtonMenuDropdown.classList.add("active");
  });

  ButtonMenuDropdown.addEventListener("mouseout", function () {
    ButtonMenuDropdown.classList.remove("active");
  });

  handleScroll();
});
