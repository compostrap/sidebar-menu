//#region src/sidebar-menu.js
var e = class {
	static init() {
		document.querySelectorAll(".list-item").forEach((e) => {
			e.querySelectorAll("a.link-arrow").forEach((e) => {
				e.classList.add("up");
				let t = e.nextElementSibling;
				t && (e.classList.contains("link-current") && (e.classList.add("active", "down"), t.style.display = "block"), e.addEventListener("click", (n) => {
					n.preventDefault(), this._slideToggle(t, 200), e.classList.contains("down") && e.classList.toggle("rotate-revert"), e.classList.add("transition"), e.classList.toggle("active"), e.classList.toggle("rotate"), e.classList.toggle("link-current");
				}));
			});
		});
	}
	static _slideToggle(e, t) {
		window.getComputedStyle(e).display === "none" ? this._slideDown(e, t) : this._slideUp(e, t);
	}
	static _slideUp(e, t) {
		e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, setTimeout(() => {
			e.style.display = "none", [
				"height",
				"padding-top",
				"padding-bottom",
				"margin-top",
				"margin-bottom",
				"overflow",
				"transition-duration",
				"transition-property"
			].forEach((t) => e.style.removeProperty(t));
		}, t);
	}
	static _slideDown(e, t) {
		e.style.removeProperty("display");
		let n = window.getComputedStyle(e).display;
		n === "none" && (n = "block"), e.style.display = n;
		let r = e.offsetHeight;
		e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = r + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), setTimeout(() => {
			[
				"height",
				"overflow",
				"transition-duration",
				"transition-property"
			].forEach((t) => e.style.removeProperty(t));
		}, t);
	}
};
//#endregion
export { e as SidebarMenu };
