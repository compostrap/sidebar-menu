class y {
  static init() {
    const s = document.querySelectorAll(".list-item"), e = 200;
    s.forEach((i) => {
      i.querySelectorAll("a.link-arrow").forEach((o) => {
        o.classList.add("up");
        const t = o.nextElementSibling;
        t && (o.classList.contains("link-current") && (o.classList.add("active", "down"), t.style.display = "block"), o.addEventListener("click", (n) => {
          n.preventDefault(), this._slideToggle(t, e), o.classList.contains("down") && o.classList.toggle("rotate-revert"), o.classList.add("transition"), o.classList.toggle("active"), o.classList.toggle("rotate"), o.classList.toggle("link-current");
        }));
      });
    });
  }
  static _slideToggle(s, e) {
    window.getComputedStyle(s).display === "none" ? this._slideDown(s, e) : this._slideUp(s, e);
  }
  static _slideUp(s, e) {
    s.style.transitionProperty = "height, margin, padding", s.style.transitionDuration = e + "ms", s.style.boxSizing = "border-box", s.style.height = s.offsetHeight + "px", s.offsetHeight, s.style.overflow = "hidden", s.style.height = 0, s.style.paddingTop = 0, s.style.paddingBottom = 0, s.style.marginTop = 0, s.style.marginBottom = 0, setTimeout(() => {
      s.style.display = "none", [
        "height",
        "padding-top",
        "padding-bottom",
        "margin-top",
        "margin-bottom",
        "overflow",
        "transition-duration",
        "transition-property"
      ].forEach((i) => s.style.removeProperty(i));
    }, e);
  }
  static _slideDown(s, e) {
    s.style.removeProperty("display");
    let i = window.getComputedStyle(s).display;
    i === "none" && (i = "block"), s.style.display = i;
    const l = s.offsetHeight;
    s.style.overflow = "hidden", s.style.height = 0, s.style.paddingTop = 0, s.style.paddingBottom = 0, s.style.marginTop = 0, s.style.marginBottom = 0, s.offsetHeight, s.style.boxSizing = "border-box", s.style.transitionProperty = "height, margin, padding", s.style.transitionDuration = e + "ms", s.style.height = l + "px", s.style.removeProperty("padding-top"), s.style.removeProperty("padding-bottom"), s.style.removeProperty("margin-top"), s.style.removeProperty("margin-bottom"), setTimeout(() => {
      [
        "height",
        "overflow",
        "transition-duration",
        "transition-property"
      ].forEach((o) => s.style.removeProperty(o));
    }, e);
  }
}
export {
  y as SidebarMenu
};
