document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animationDuration = reducedMotion ? 0 : 220;

  const animateTo = (element, keyframes, options = {}) => {
    element.getAnimations().forEach((animation) => animation.cancel());
    return element.animate(keyframes, {
      duration: animationDuration,
      easing: "ease-out",
      fill: "forwards",
      ...options,
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });

  document.querySelectorAll(".btn").forEach((button) => {
    const enter = () => animateTo(button, [
      { transform: "translateY(0)", boxShadow: "0 0 0 rgba(246, 185, 43, 0)" },
      { transform: "translateY(-2px)", boxShadow: "0 12px 30px rgba(246, 185, 43, 0.25)" },
    ]);
    const leave = () => animateTo(button, [
      { transform: "translateY(-2px)", boxShadow: "0 12px 30px rgba(246, 185, 43, 0.25)" },
      { transform: "translateY(0)", boxShadow: "0 0 0 rgba(246, 185, 43, 0)" },
    ]);

    button.addEventListener("pointerenter", enter);
    button.addEventListener("pointerleave", leave);
    button.addEventListener("focus", enter);
    button.addEventListener("blur", leave);
  });

  document.querySelectorAll(".stack-item, .project-card, .experience-card").forEach((card) => {
    const initialStyles = getComputedStyle(card);
    const initialBorderColor = initialStyles.borderColor;
    const initialBackgroundColor = initialStyles.backgroundColor;

    const enter = () => animateTo(card, [
      { transform: "translateY(0)", borderColor: initialBorderColor, backgroundColor: initialBackgroundColor },
      { transform: "translateY(-4px)", borderColor: "rgba(246, 185, 43, 0.45)", backgroundColor: "rgba(255, 255, 255, 0.07)" },
    ]);
    const leave = () => animateTo(card, [
      { transform: "translateY(-4px)", borderColor: "rgba(246, 185, 43, 0.45)", backgroundColor: "rgba(255, 255, 255, 0.07)" },
      { transform: "translateY(0)", borderColor: initialBorderColor, backgroundColor: initialBackgroundColor },
    ]);

    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointerleave", leave);
    card.addEventListener("focus", enter);
    card.addEventListener("blur", leave);
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    const primaryLink = card.querySelector("a[href]");
    if (!primaryLink) return;

    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `${card.querySelector("h3")?.textContent || "Projeto"}: abrir projeto`);

    const openProject = () => {
      if (primaryLink.target === "_blank") {
        window.open(primaryLink.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = primaryLink.href;
      }
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      openProject();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProject();
    });
  });
});
