document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    <header class="header-design fixed-top shadow-lg">
      <div class="row justify-content-between align-items-center p-0 w-100">
        <!-- Logo -->
        <div class="col-3 p-0 align-items-center">
          <a href="../index.html" class="px-5">
            <img src="../images/NDE-Logo-42Y.png" class="logo-style  p-2 logo-width" alt=""/>
          </a>
        </div>
        <div class="col-9 p-0 align-items-center">
          <!-- Navigation Menu -->
          <ul class="menu-link d-flex justify-content-end align-items-center m-0 p-0">
            <div class="mobile-menu">
              <li><a href="/project/project.html" class="nav-style" style="color: rgb(190, 140, 140); text-decoration:none">Projects</a></li>
            </div>
             <div class="mobile-menu">
              <li><a class="menusItem nav-style" href="../AboutUs/AboutUs.html  ">About Us</a></li>
            </div>  
            <div class="menu-item mobile-menu">
              <li>
                <a class="menusItem nav-style" href="#residential">Residential</a>
                <ul class="submenu">
                  <li>
                    <a id="menuItem" href="/subpage/subpage.html?type=Residential&status=Ongoing">
                      <img class="submenu-img" src="../images/homeTopSlide/Ongoing,Mohammadpur.jpg" alt=""/>
                      <p class="px-5 text-center mt-2">Ongoing </p>
                    </a>
                  </li>
                  <li>
                    <a href="/subpage/subpage.html?type=Residential&status=Upcoming">
                      <img class="submenu-img" src="../images/homeTopSlide/SecondBuilding.jpg" alt=""/>
                      <p class="px-5 text-center mt-2">Upcoming</p>
                    </a>
                  </li>
                  <li>
                    <a href="/subpage/subpage.html?type=Residential&status=Completed">
                      <img class="submenu-img" src="../images/homeTopSlide/WaterModel.jpg" alt=""/>
                      <p class="px-5 text-center mt-2">Completed</p>
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <div class="menu-item mobile-menu">
              <li>
                <a class="menusItem nav-style" href="#Commercial">Commercial</a>
                <ul class="submenu">
             <!--
            <li>
              <a href="/subpage/subpage.html?type=Commercial&status=Ongoing">
                <img class="submenu-img" src="../images/homeTopSlide/SecondBuilding.jpg" alt=""/>
                <p class="px-5 text-center mt-2">Ongoing</p>
              </a>
            </li>
            <li>
              <a href="/subpage/subpage.html?type=Commercial&status=Upcoming">
                <img class="submenu-img" src="../images/homeTopSlide/SecondBuilding.jpg" alt=""/>
                <p class="px-5 text-center mt-2">Upcoming</p>
              </a>
            </li>
            -->
                  <li>
                    <a href="/subpage/subpage.html?type=Commercial&status=Completed">
                      <img class="submenu-img" src="../images/homeTopSlide/FirstBulding.jpg" alt=""/>
                      <p class="px-5 text-center mt-2">Completed</p>
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <div class="mobile-menu">
              <li><a class="menusItem nav-style" href="../landOwners/landOwners.html">Landowners</a></li>
            </div>
           
            <div class="menu-btn">
              <li>
                <button onclick="toggleMenu()" style="border: none; background: white; border-bottom: 1px solid black; border-top: 1px solid black;">
                  Menu
                </button>
              </li>
            </div>
          </ul>
          <!-- Navigation Menu End-->
          <div class="menulist" id="menu">
            <button id="close" onclick="closeMenu()" style="border: none; background: white; border-bottom: 1px solid black; border-top: 1px solid black;">
              close
            </button>
            <ul id="menus">
              <li><a href="../AboutUs/AboutUs.html" class="nav-style">About Us</a></li>
              <li> <a href="../project/project.html" class="nav-style">Projects</a></li>
              <li> <a href="../landOwners/landOwners.html" class="nav-style">Landowners</a></li>
              <li> <a href="../subpage/subpage.html" class="nav-style">Residential</a></li>
              <li> <a href="../subpage/subpage.html" class="nav-style">Commercial</a></li>
              <li><a href="../contactUs/contactUs.html" class="nav-style">Contact Us</a></li>
            </ul>
            <img id="menuBtn-img" src="../images/homeTopSlide/menuBtnImg.jfif" alt=""/>
            <img id="bubble-img" src="../images/homeTopSlide/bubble.PNG" alt=""/>
          </div>
          <!-- Menu Button End -->
        </div>
      </div>
    </header>
  `;

  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
  }

  const animatedDiv = document.querySelector(".animated-div");
  const menuItems = document.querySelectorAll(".menu-item");
  const header = document.querySelector("header");
  const submenu = document.querySelector(".submenu");
  let lastHoveredSubmenu = null;

  if (animatedDiv) {
    animatedDiv.addEventListener("mouseover", function () {
      submenu.style.display = "block";
      submenu.style.display = "flex";
      submenu.innerHTML = lastHoveredSubmenu.innerHTML;
    });

    animatedDiv.addEventListener("mouseleave", function () {
      animatedDiv.classList.remove("animate-diagonal");
      header.style.backgroundColor = "";
      header.style.borderBottom = "";
      submenu.style.display = "none";
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      animatedDiv.classList.add("animate-diagonal");
      header.style.borderBottom = "2px solid gray";
      item.classList.add("activeNav");
      const submenu = this.querySelector(".submenu");
      submenu.style.display = "block";
      submenu.style.display = "flex";
      submenu.style.opacity = "1";
      submenu.style.backgroundColor = "#F5F5F5";

      item.addEventListener("mouseout", function () {
        const submenu = this.querySelector(".submenu");
        animatedDiv.classList.remove("animate-diagonal");
        item.classList.remove("activeNav");
        submenu.style.display = "none";
        header.style.borderBottom = "none";
        submenu.style.backgroundColor = "";
      });

      lastHoveredSubmenu = this.querySelector(".submenu");
    });
  });

  submenu.addEventListener("mouseover", function () {
    submenu.style.display = "block";
    submenu.style.display = "flex";
    submenu.style.backgroundColor = "#f5f5f5";
  });

  submenu.addEventListener("mouseleave", function () {
    submenu.style.display = "none";
    submenu.style.backgroundColor = "";
  });

  // remove or add animate-div
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 150) {
      animatedDiv.classList.add("animate-diagonal");
    } else {
      animatedDiv.classList.remove("animate-diagonal");
    }
  }

  // setting active navbar...

  const navLinks = document.querySelectorAll(".nav-style");
  const setActiveLink = () => {
    const currentPath = window.location.pathname;

    if (currentPath === "/" || currentPath.endsWith("/index.html")) {
      currentPath = "/index.html";
    }

    if (currentPath.endsWith("/contactUs.html")) {
      localStorage.removeItem("activeNavLink");
    }

    let activeLink = localStorage.getItem("activeNavLink") || currentPath;

    navLinks.forEach((link) => {
      link.classList.remove("active");
      console.log(link, activeLink, link.getAttribute("href"), "act link...");
      if (link.getAttribute("href") === activeLink) {
        console.log(link, activeLink, "act link... inside");
        link.classList.add("active");
      }
    });
  };

  const saveActiveLink = (href) => {
    localStorage.setItem("activeNavLink", href);
  };

  navLinks.forEach((link) => {
    const handleEvent = (event) => {
      saveActiveLink(event.target.getAttribute("href"));
    };

    link.addEventListener("click", handleEvent);
    link.addEventListener("mouseover", handleEvent);
  });

  // Set the active link on page load
  setActiveLink();
});
