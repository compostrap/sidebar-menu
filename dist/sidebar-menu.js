//#region src/sidebar-menu.js
var e = class {
	static _slideStates = /* @__PURE__ */ new WeakMap();
	static _submenuId = 0;
	static init() {
		let e = document.querySelectorAll(".list-item"), t = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 200;
		e.forEach((e) => {
			e.querySelectorAll("a.link-arrow").forEach((e) => {
				let n = e.nextElementSibling;
				n && e.dataset.sidebarMenuInitialized !== "true" && (e.dataset.sidebarMenuInitialized = "true", e.classList.add("up"), n.id ||= `sidebar-submenu-${++this._submenuId}`, e.setAttribute("aria-controls", n.id), e.classList.contains("link-current") && (e.classList.add("active", "down"), n.style.display = "block"), e.setAttribute("aria-expanded", String(n.style.display === "block")), e.addEventListener("click", (r) => {
					r.preventDefault();
					let i = this._slideToggle(n, t);
					e.setAttribute("aria-expanded", String(i)), e.classList.contains("down") && e.classList.toggle("rotate-revert"), e.classList.add("transition"), e.classList.toggle("active"), e.classList.toggle("rotate"), e.classList.toggle("link-current");
				}));
			});
		}), document.querySelectorAll(".list-link.link-current:not(.link-arrow)").forEach((e) => {
			e.setAttribute("aria-current", "page");
		});
	}
	static _slideToggle(e, t) {
		let n = this._slideStates.get(e), r = n ? n.open : window.getComputedStyle(e).display !== "none";
		return r ? this._slideUp(e, t) : this._slideDown(e, t), !r;
	}
	static _slideUp(e, t) {
		this._animate(e, !1, t);
	}
	static _slideDown(e, t) {
		this._animate(e, !0, t);
	}
	static _animate(e, t, n) {
		let r = this._slideStates.get(e), i = e.getBoundingClientRect().height;
		r?.timer && clearTimeout(r.timer), t && (e.style.display = "block"), [
			"height",
			"padding-top",
			"padding-bottom",
			"margin-top",
			"margin-bottom",
			"overflow",
			"box-sizing",
			"transition-duration",
			"transition-property"
		].forEach((t) => e.style.removeProperty(t));
		let a = e.offsetHeight;
		e.style.overflow = "hidden", e.style.boxSizing = "border-box", e.style.height = i + "px", e.style.paddingTop = t ? "0" : "", e.style.paddingBottom = t ? "0" : "", e.style.marginTop = t ? "0" : "", e.style.marginBottom = t ? "0" : "", e.offsetHeight, e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = n + "ms", e.style.height = t ? a + "px" : "0", t ? (e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom")) : (e.style.paddingTop = "0", e.style.paddingBottom = "0", e.style.marginTop = "0", e.style.marginBottom = "0");
		let o = {
			open: t,
			timer: null
		};
		this._slideStates.set(e, o);
		let s = () => {
			this._slideStates.get(e) === o && (t || (e.style.display = "none"), [
				"height",
				"padding-top",
				"padding-bottom",
				"margin-top",
				"margin-bottom",
				"overflow",
				"box-sizing",
				"transition-duration",
				"transition-property"
			].forEach((t) => e.style.removeProperty(t)), this._slideStates.set(e, {
				open: t,
				timer: null
			}));
		};
		n === 0 ? s() : o.timer = setTimeout(s, n);
	}
};
//#endregion
export { e as SidebarMenu };
