// Mengambil semua elemen <h1> yang memiliki atribut input-value
let titleElements = document.querySelectorAll("#title[input-value]");
let nav = document.querySelector(".nav");
let byNazril = document.querySelector(".by-nazril-container");
let newNav = document.querySelector(".new-nav");
let main = document.querySelector(".main");
let slogan1 = document.querySelector(".slogan-1");
let slogan1H1 = document.querySelectorAll(".slogan-1-h1");
let slogan2H1 = document.querySelector(".slogan-2-h1");

let isNavTouchMain = false;
let isAbove150 = false; // Status awal, apakah posisi scroll lebih dari 100 atau tidak

window.addEventListener("scroll", () => {
  let yValue = window.scrollY;

  const navRect = nav.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();

  // Jika nav sudah menyentuh main dan isNavTouchMain masih false
  if (navRect.bottom >= mainRect.top && !isNavTouchMain) {
    let navContent = document
      .querySelectorAll(".nav-content")
      .forEach((content) => {
        content.style.color = "#B9C6D6";
      });

    console.log(navContent);
    isNavTouchMain = true;
  }
  // Jika nav sudah tidak menyentuh main dan isNavTouchMain masih true
  else if (navRect.bottom < mainRect.top && isNavTouchMain) {
    document.querySelectorAll(".nav-content").forEach((content) => {
      content.style.color = "#000515";
    });
    console.log("Nav belum menyentuh main");
    isNavTouchMain = false;
  }
  if (yValue >= 150 && !isAbove150) {
    closeTitle();
    openNewNav();
    isAbove150 = true;
  } else if (yValue <= 150 && isAbove150) {
    openTitle();
    closeNewNav();
    isAbove150 = false;
  }
});

// Buat Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.slogan-1-h1').forEach((content) => {
        let inputValue = content.getAttribute("input-value");

        setTimeout(() => {
          content.style.transform = "translateY(0px)";
        }, inputValue * 100);      
      })

      slogan2H1.style.transform = 'translateY(0px)'
    } else {
      document.querySelectorAll('.slogan-1-h1').forEach((content) => {
        content.style.transform = "translateY(50px)";
      })

      slogan2H1.style.transform = 'translateY(100px)'
    }
  });
});

// Observasi elemen H1
observer.observe(slogan1);

titleElements.forEach((element) => {
  element.style.transition = "2s";
  let inputValue = element.getAttribute("input-value");

  // Menambahkan delay berdasarkan nilai input-value
  setTimeout(() => {
    element.style.transform = "translateY(0)";
  }, inputValue * 40);
});

function closeTitle() {
  titleElements.forEach((element) => {
    let inputValue = element.getAttribute("input-value");

    // Menambahkan delay berdasarkan nilai input-value
    setTimeout(() => {
      element.style.transition = "0.25s ease";
      element.style.transform = "translateY(-25px)";
      setTimeout(() => {
        element.style.transition = "2s ease";
        element.style.transform = "translateY(500px)";
      }, 250);
    }, inputValue * 40);
  });
}

function closeNewNav() {
  nav.style.left = "1%";
  byNazril.style.width = "150px";
  byNazril.style.height = "25px";

  newNav.style.width = "0px";
  newNav.style.height = "0px";
}

function openTitle() {
  titleElements.forEach((element) => {
    let inputValue = element.getAttribute("input-value");

    // Menambahkan delay berdasarkan nilai input-value
    setTimeout(() => {
      element.style.transform = "translateY(0)";
    }, inputValue * 40);
  });
}

function openNewNav() {
  nav.style.left = "2.5%";
  byNazril.style.width = "0px";
  byNazril.style.height = "0px";

  newNav.style.width = "160px";
  newNav.style.height = "25px";
}

const headerMain = document.getElementById("header-img-main");
const header1 = document.getElementById("header-img-1");
const header2 = document.getElementById("header-img-2");
const header3 = document.getElementById("header-img-3");
const header4 = document.getElementById("header-img-4");
const header5 = document.getElementById("header-img-5");
const contactContainer = document.querySelector(".contact-container");

window.addEventListener("scroll", () => {
  let yValue = window.scrollY;

  headerMain.style.marginTop = yValue * 0.9 + "px";
  header1.style.marginTop = yValue * 0.7 + "px";
  header2.style.marginTop = yValue * 0.6 + "px";
  header3.style.marginTop = yValue * 0.45 + "px";
  header4.style.marginTop = yValue * 0.3 + "px";
  contactContainer.style.marginTop = yValue * -0.2 + "px";
});

const contact = document.querySelectorAll(".contact");
const link = document.querySelector(".link");

let isLink = false;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  link.style.top = y - 50 + "px";
  link.style.left = x - 50 + "px";
});

contact.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (!isLink) {
      isLink = true;
      link.style.transform = "scale(1)";
    }
  });

  element.addEventListener("mouseout", () => {
    if (isLink) {
      isLink = false;
      link.style.transform = "scale(0)";
    }
  });
});

const instagramLink = document.getElementById("instagram-link");
const whatsappLink = document.getElementById("whatsapp-link");
const emailLink = document.getElementById("email-link");

function showLink(value) {
  if (value == 1) {
    instagramLink.style.transform = "translateX(0px)";
    whatsappLink.style.transform = "translateX(180px)";
    emailLink.style.transform = "translateX(300px)";
    link.style.width = "165px";
  }
  if (value == 2) {
    instagramLink.style.transform = "translateX(-180px)";
    whatsappLink.style.transform = "translateX(0px)";
    emailLink.style.transform = "translateX(120px)";
    link.style.width = "110px";
  }
  if (value == 3) {
    instagramLink.style.transform = "translateX(-300px)";
    whatsappLink.style.transform = "translateX(-126px)";
    emailLink.style.transform = "translateX(0px)";
    link.style.width = "150px";
  }
}
