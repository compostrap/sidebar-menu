document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".list-item").forEach((o) => {
    o.querySelectorAll("a.link-arrow").forEach((e) => {
      e.classList.add("up");
      const t = e.nextElementSibling;
      e.classList.contains("link-current") && (e.classList.add("active", "down"), t.style.display = "block"), e.addEventListener("click", (y) => {
        y.preventDefault(), ((i, n = 500) => {
          window.getComputedStyle(i).display === "none" ? d(i, n) : l(i, n);
        })(t, 200), e.classList.contains("down") && e.classList.toggle("rotate-revert"), e.classList.add("transition"), e.classList.toggle("active"), e.classList.toggle("rotate"), e.classList.toggle("link-current");
      });
    });
  });
  const l = (o, s = 500) => {
    o.style.transitionProperty = "height, margin, padding", o.style.transitionDuration = s + "ms", o.style.boxSizing = "border-box", o.style.height = o.offsetHeight + "px", o.offsetHeight, o.style.overflow = "hidden", o.style.height = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0, o.style.marginTop = 0, o.style.marginBottom = 0, setTimeout(() => {
      o.style.display = "none", ["height", "padding-top", "padding-bottom", "margin-top", "margin-bottom", "overflow", "transition-duration", "transition-property"].forEach((e) => o.style.removeProperty(e));
    }, s);
  }, d = (o, s = 500) => {
    o.style.removeProperty("display"), window.getComputedStyle(o).display === "none" && (o.style.display = "block");
    const e = o.offsetHeight;
    o.style.overflow = "hidden", o.style.height = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0, o.style.marginTop = 0, o.style.marginBottom = 0, o.offsetHeight, o.style.boxSizing = "border-box", o.style.transitionProperty = "height, margin, padding", o.style.transitionDuration = s + "ms", o.style.height = e + "px", o.style.removeProperty("padding-top"), o.style.removeProperty("padding-bottom"), o.style.removeProperty("margin-top"), o.style.removeProperty("margin-bottom"), setTimeout(() => {
      ["height", "overflow", "transition-duration", "transition-property"].forEach((t) => o.style.removeProperty(t));
    }, s);
  };
});
