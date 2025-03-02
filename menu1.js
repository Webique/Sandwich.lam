document.addEventListener("DOMContentLoaded", function () {
    console.log("menu1.js is loaded successfully!");

    // Sidebar Navigation
    const sidebar = document.getElementById("menuSidebar");
    const openBtn = document.getElementById("openSidebarBtn");
    const closeBtn = document.getElementById("closeSidebarBtn");
    const menuLinks = document.querySelectorAll(".menu-sidebar a");

    function openSidebar() {
        sidebar.classList.add("active");
        openBtn.style.display = "none";
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        openBtn.style.display = "block";
    }

    function handleMenuClick(event, id) {
        event.preventDefault();
        scrollToSection(id);
        closeSidebar();
    }

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth"
            });
        }
    }

    // Attach event listeners to sidebar
    openBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);

    document.addEventListener("click", function (event) {
        if (sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            event.target !== openBtn) {
            closeSidebar();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            handleMenuClick(event, this.getAttribute("href").substring(1));
        });
    });

});
