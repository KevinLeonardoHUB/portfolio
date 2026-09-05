// Loaded with defer: the HTML is already available.
var reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// One function handles hover and keyboard focus on buttons and cards.
function addHover(element, isCard) {
  var style = getComputedStyle(element);
  var normal = {
    transform: "translateY(0)",
    borderColor: style.borderColor,
    backgroundColor: style.backgroundColor,
    boxShadow: style.boxShadow,
  };
  var active = {
    transform: isCard ? "translateY(-4px)" : "translateY(-2px)",
    borderColor: isCard ? "rgba(246,185,43,.45)" : normal.borderColor,
    backgroundColor: isCard ? "rgba(255,255,255,.07)" : normal.backgroundColor,
    boxShadow: isCard ? normal.boxShadow : "0 12px 30px rgba(246,185,43,.25)",
  };
  var animation;
  var hovered = false;

  function refresh() {
    var current = getComputedStyle(element);
    var start = {
      transform: current.transform,
      borderColor: current.borderColor,
      backgroundColor: current.backgroundColor,
      boxShadow: current.boxShadow,
    };
    if (animation) animation.cancel();
    var focused = element.contains(document.activeElement);
    animation = element.animate([start, hovered || focused ? active : normal], {
      duration: reducedMotion ? 0 : 220,
      easing: "ease-out",
      fill: "forwards",
    });
  }
  element.addEventListener("pointerenter", function () {
    hovered = true;
    refresh();
  });
  element.addEventListener("pointerleave", function () {
    hovered = false;
    refresh();
  });
  element.addEventListener("focusin", refresh);
  element.addEventListener("focusout", function () {
    setTimeout(refresh, 0);
  });
}

var buttons = document.querySelectorAll(
  ".btn, .project-details-link, .button, .back-link, .language-link",
);
for (var i = 0; i < buttons.length; i++) addHover(buttons[i], false);
var cards = document.querySelectorAll(
  ".stack-item, .project-card, .experience-card, .admissions-card, .story-card, .media-card",
);
for (var i = 0; i < cards.length; i++) addHover(cards[i], true);

// Smooth navigation within the page.
var anchors = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function (event) {
    var hash = this.getAttribute("href");
    var target = document.getElementById(hash.substring(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    history.pushState(null, "", hash);
  });
}

// Use the existing link when clicking or pressing Enter/Space on a card.
function makeClickable(card) {
  var link =
    card.querySelector(".project-details-link") ||
    card.querySelector("a[href]");
  if (!link) return;
  card.tabIndex = 0;
  card.setAttribute("role", "link");
  var title = card.querySelector("h3");
  card.setAttribute("aria-label", title ? title.textContent : link.textContent);
  card.addEventListener("click", function (event) {
    if (event.target.closest("a, button, input")) return;
    if (window.getSelection().toString()) return;
    link.click();
  });
  card.addEventListener("keydown", function (event) {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      link.click();
    }
  });
}
var projectCards = document.querySelectorAll(".project-card");
for (var i = 0; i < projectCards.length; i++) makeClickable(projectCards[i]);

// Entrance effect for project details.
if (!reducedMotion) {
  var sections = document.querySelectorAll(".project-hero > *, .fact, .panel");
  for (var i = 0; i < sections.length; i++) {
    sections[i].animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 430, delay: i * 45, easing: "ease-out", fill: "backwards" },
    );
  }
}
