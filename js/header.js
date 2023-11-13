const header = document.querySelector(".header");

header.innerHTML += `
<header id="header-desktop">
<section class="wrapper container">
   <a href="./index.html" class="brand">
    <img src="./img/logo.png" alt="" width="220px">
   </a>
   <div class="burger" id="burger">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
   </div>
   <span class="overlay"></span>
   <nav class="navbar" id="navbar">
      <ul class="menu" id="menu">
         <li class="menu-item"><a href="../gioithieu.html" class="menu-link">Giới thiệu</a></li>
         <li class="menu-item menu-dropdown">
            <a href='#' class="menu-link" data-toggle="submenu">Sản phẩm<i class="bx bx-chevron-down"></i></a>
            <ul class="submenu">
            <li class="submenu-item menu-dropdown-2">
                  <a href='../sanpham.html' class="submenu-link d-flex justify-content-between" >
                Thang máy chở khách </a>
                  <ul class="submenu-2">
                  <li class="submenu-item-2 menu-dropdown-3">  
   <a href="" class="submenu-link-3">Thang máy chở khách tiêu chuẩn </a>
   <ul class="submenu-3">
      <li class="submenu-item-3"><a href="../chitietsp.html" class="submenu-link-3">Thiết kế Buồng Thang</a></li>
      <li class="submenu-item-3"><a href="#" class="submenu-link-3">Tính năng</a></li>
      <li class="submenu-item-3"><a href="#" class="submenu-link-3">Thông số kĩ thuật</a></li>
      <li class="submenu-item-3"><a href="#" class="submenu-link-3">Khả năng Kết Nối</a></li>
   </ul>
</li>


                  <li class="submenu-item-2"><a href="#" class="submenu-link-2">Thang máy chở khách cao cấp</a></li>
                  <li class="submenu-item-2"><a href="#" class="submenu-link-2">Thang máy chở khách lựa chọn</a></li>
               </ul>
               </li>
              
               <li class="submenu-item"><a href="#" class="submenu-link">Thang máy bệnh viện</a></li>
               <li class="submenu-item"><a href="#" class="submenu-link">Thang máy chở hàng</a></li>
               <li class="submenu-item"><a href="#" class="submenu-link">Thang máy quan sát</a></li>
              
               

             

            </ul>
         </li>
         <li class="menu-item menu-dropdown">
            <span class="menu-link" data-toggle="submenu">Dịch vụ<i class="bx bx-chevron-down"></i></span>
            <ul class="submenu">
               <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Thiết kế theo yêu cầu </a></li>
               <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Bảo trì bảo dưỡng</a></li>
               <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Kiểm định an toàn thang máy</a></li>
               <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Decor thang máy</a></li>
            </ul>
         </li>
        
         <li class="menu-item"><a href="../duan.html" class="menu-link">Dự án</a></li>
         <li class="menu-item"><a href="../tintuc.html" class="menu-link">Tin tức</a></li>
         <li class="menu-item menu-dropdown">
            <span class="menu-link" data-toggle="submenu">Liên hệ<i class="bx bx-chevron-down"></i></span>
            <ul class="submenu">
               <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Hỗ trợ khách hàng</a></li>
               <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Hệ thống phân phối</a></li>
               <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Tuyển dụng nhân sự</a></li>
            </ul>
         </li>
        
         <li class="menu-item"><a href="#" class="menu-link menu-icon">
            <div class="icon-search">
               <img src='../img/search-icon.png' width='15px'/>
            </div>
            <div class="icon-internet">
               <img src='../img/internet-icon.png' width='20px'/>
               <p >Việt Nam</p>
            </div>
         </a></li>
      </ul>
   </nav>
</section>
</header>
`;

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

const menuDropdown2Items = document.querySelectorAll(".menu-dropdown-2");

// Xử lý hover vào menu-dropdown-2
menuDropdown2Items.forEach((item) => {
   let timeout;

   item.addEventListener("mouseenter", () => {
      clearTimeout(timeout); // Xóa timeout trước (nếu có)
      item.querySelector(".submenu-2").style.display = "block";
   });

   item.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
         item.querySelector(".submenu-2").style.display = "none";
      }, 200); // Thiết lập một timeout ngắn (200ms) để ẩn submenu
   });
});

// Xử lý hover vào menu-dropdown-3
const menuDropdown3Items = document.querySelectorAll(".menu-dropdown-3");

menuDropdown3Items.forEach((item) => {
   let timeout;

   item.addEventListener("mouseenter", () => {
      clearTimeout(timeout); // Xóa timeout trước (nếu có)
      item.querySelector(".submenu-3").style.display = "block";
   });

   item.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
         item.querySelector(".submenu-3").style.display = "none";
      }, 200); // Thiết lập một timeout ngắn (200ms) để ẩn submenu
   });
});

// Show and Hide Navbar Function
const toggleMenu = () => {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
  navbarMenu
    .querySelector(".menu-dropdown.active .submenu")
    .removeAttribute("style");
  navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
     e.preventDefault();
 
     // Check for nested submenus
     let menuItem = e.target.parentElement;
     while (menuItem.classList.contains("menu-dropdown-2") || menuItem.classList.contains("menu-dropdown-3")) {
       menuItem = menuItem.parentElement;
     }
 
     const menuDropdown = menuItem;
 
     // If Dropdown is Expanded, then Collapse It
     if (menuDropdown.classList.contains("active")) {
       collapseSubMenu();
     } else {
       // Collapse Existing Expanded Dropdown
       if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
       }
 
       // Expanded the New Dropdown
       menuDropdown.classList.add("active");
       const subMenu = menuDropdown.querySelector(".submenu");
       subMenu.style.maxHeight = subMenu.scrollHeight + "px";
     }
   }
 };

 

// Fixed Resize Window Function
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }
    if (navbarMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
};



// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);
