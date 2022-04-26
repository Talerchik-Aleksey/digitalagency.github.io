window.onload = function () {
  AOS.init();
  window.addEventListener("click", (e) => {
    // при клике в любом месте окна браузера
    const target = e.target; // находим элемент, на котором был клик
    if (
      !target.closest(".hystmodal__window") &&
      !target.closest(".start-screen-button")
    ) {
      // если этот элемент или его родительские элементы не окно навигации и не кнопка
      document.querySelector(".contact-form").classList.add("visually-hidden"); // то закрываем окно навигации, удаляя активный класс
    }
  });

  let headerMenuLink = [...document.getElementsByClassName("slider-button")];
  let sliderItem = [...document.getElementsByClassName("slider-item")];
  for (let i = 0; i < headerMenuLink.length; i++) {
    headerMenuLink[i].addEventListener("click", function (e) {
      e.preventDefault();
      headerMenuLink.forEach((link) => link.classList.remove("active"));
      sliderItem.forEach((item) => item.classList.add("visually-hidden"));
      sliderItem[i].classList.remove("visually-hidden");
      this.classList.add("active");
    });
  }

  var a = document.querySelector("#header-button-services");
  //вешаем на него события
  a.onmouseout = function (e) {
    document.getElementById("arrow").setAttribute("fill", "#FFFFFF");
  };

  a.onmouseover = function (e) {
    document.getElementById("arrow").setAttribute("fill", "#19191B");
  };

  document.querySelector(".contact").onclick = function () {
    document.querySelector(".contact-form").classList.remove("visually-hidden");
  };

  // document.querySelector(".close-button").onclick = function () {
  //   document.querySelector(".contact-form").classList.add("visually-hidden");
  // };

  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      document.querySelector(".contact-form").classList.add("visually-hidden");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  var cleave = new Cleave(".input-element-phone", {
    phone: true,
    phoneRegionCode: "{country}",
  });
  var cleave = new Cleave(".input-element-card", {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      // update UI ...
    },
  });
  var cleave = new Cleave(".input-element-date", {
    date: true,
    delimiter: "-",
    datePattern: ["Y", "m", "d"],
  });

  window.Parsley.addValidator("validateFullWidthCharacters", {
    requirementType: "string",
    validateString: function (value, requirement) {
      regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;
      return regex.test(value);
    },
    messages: {
      en: "Please enter a valid email address.",
    },
  });
  $('#form').parsley();
});
