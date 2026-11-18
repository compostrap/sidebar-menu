# sidebar-menu-compostrap

A multi-level menu for the sidebar of `sidebar-skeleton-compostrap` (Bootstrap 5): section titles, links with Font Awesome icons, submenus that slide open, Perfect scrollbar and the nanobar. The package `compostrap` replaces it; this package takes the look of its menu without changing the markup.

## Layout

- `src/sidebar-menu.js`: `SidebarMenu.init()` (submenus, their animation and ARIA state); `src/index.js` exports it with `SidebarMenuApp`.
- `src/scss/utils/_variables.scss`: the sizes of the menu (text, rows, icons, arrows, scrollbar, nanobar) and the icon font of the arrows, all `!default`; `sidebar-menu-custom` reads them through `src/scss/utils/variables`.
- `src/scss/components/`: `_list.scss` (the menu), `_scrollbar.scss`, `_nanobar.scss`; `src/scss/themes/_theme.scss`: the colors as CSS variables `--sm-*`.
- `dist/` is versioned; `npm run build` writes it. `index.html` is the demo.

## How it works

- Sizes and colors are the ones of the compostrap menu (14px text, 44px rows, uppercase section titles at 60 %, links at 85 %, icons at 60 % and 75 % on hover and for the current page, the current page medium). Colors are mixed from `--bs-body-color-rgb`, so they follow the light and dark theme without separate values.
- Font Awesome stays the icon font of the old packages: the arrows are its glyphs `\f105`/`\f107` (weight 900). Do not switch them to Bootstrap Icons.
- Projects copy the markup (`list`, `list-item`, `list-title`, `list-link`, `list-icon`, `list-hidden`, `link-arrow`, `link-current`, `bell`), so these names stay; a change is made in SCSS or JavaScript only.
- `link-current` marks the current page and the group holding it; opening a group does not add it (only the arrow classes change). A link with a submenu and no `href` becomes `role=button` with `tabindex=0` and opens by Enter or Space.
- An open submenu has a 1px line on its left (`::before` of `list-hidden`, `$sm-line-width`, color `--sm-line-color` at 15 % of the body color), under the middle of the parent icon; a deeper submenu has it under the start of the parent text.
- Submenus slide open in 200 ms (0 with reduced motion), by height, margin and padding.
- The scrollbar of the menu is as high as the visible window (`dvh`, `vh` as the fallback).
- The nanobar has the color of the text (`--bs-body-color`), so it is seen in both themes.

## Commands

- `npm run dev`: the demo.
- `npm run build`: JavaScript and CSS into `dist/`.
