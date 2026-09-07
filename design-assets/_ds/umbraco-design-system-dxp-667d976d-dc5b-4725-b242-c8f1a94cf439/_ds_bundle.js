/* @ds-bundle: {"format":3,"namespace":"UmbracoBackofficeDesignSystem_667d97","components":[{"name":"EntityActionList","sourcePath":"components/actions/EntityActionList.jsx"},{"name":"EntityActionsBundle","sourcePath":"components/actions/EntityActionsBundle.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Box","sourcePath":"components/data-display/Box.jsx"},{"name":"CodeBlock","sourcePath":"components/data-display/CodeBlock.jsx"},{"name":"FigureCard","sourcePath":"components/data-display/FigureCard.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"DiscardChangesModal","sourcePath":"components/feedback/DiscardChangesModal.jsx"},{"name":"ErrorViewerModal","sourcePath":"components/feedback/ErrorViewerModal.jsx"},{"name":"IconPickerModal","sourcePath":"components/feedback/IconPickerModal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"InputColor","sourcePath":"components/forms/InputColor.jsx"},{"name":"InputCultureSelect","sourcePath":"components/forms/InputCultureSelect.jsx"},{"name":"InputDate","sourcePath":"components/forms/InputDate.jsx"},{"name":"InputDropdownList","sourcePath":"components/forms/InputDropdownList.jsx"},{"name":"InputEyeDropper","sourcePath":"components/forms/InputEyeDropper.jsx"},{"name":"InputMultipleTextString","sourcePath":"components/forms/InputMultipleTextString.jsx"},{"name":"InputNumberRange","sourcePath":"components/forms/InputNumberRange.jsx"},{"name":"InputRadioButtonList","sourcePath":"components/forms/InputRadioButtonList.jsx"},{"name":"InputSlider","sourcePath":"components/forms/InputSlider.jsx"},{"name":"InputToggle","sourcePath":"components/forms/InputToggle.jsx"},{"name":"InputWithAlias","sourcePath":"components/forms/InputWithAlias.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BodyLayout","sourcePath":"components/layout/BodyLayout.jsx"},{"name":"EntityFrame","sourcePath":"components/layout/EntityFrame.jsx"},{"name":"FooterLayout","sourcePath":"components/layout/FooterLayout.jsx"},{"name":"PopoverLayout","sourcePath":"components/layout/PopoverLayout.jsx"},{"name":"SplitPanel","sourcePath":"components/layout/SplitPanel.jsx"},{"name":"Stack","sourcePath":"components/layout/Stack.jsx"},{"name":"WorkspaceEditor","sourcePath":"components/layout/WorkspaceEditor.jsx"},{"name":"WorkspaceFooter","sourcePath":"components/layout/WorkspaceFooter.jsx"},{"name":"MenuItem","sourcePath":"components/navigation/MenuItem.jsx"},{"name":"SectionSidebarMenu","sourcePath":"components/navigation/SectionSidebarMenu.jsx"},{"name":"SectionSidebarMenuWithEntityActions","sourcePath":"components/navigation/SectionSidebarMenuWithEntityActions.jsx"},{"name":"TabGroup","sourcePath":"components/navigation/TabGroup.jsx"},{"name":"Property","sourcePath":"components/property/Property.jsx"},{"name":"PropertyLayout","sourcePath":"components/property/PropertyLayout.jsx"},{"name":"Icon","sourcePath":"components/symbol/Icon.jsx"}],"sourceHashes":{"components/actions/EntityActionList.jsx":"e16bd7e03452","components/actions/EntityActionsBundle.jsx":"21f347f0a614","components/data-display/Avatar.jsx":"89c8ca9c3a6c","components/data-display/Badge.jsx":"ef487c0816e7","components/data-display/Box.jsx":"e99c9fc108ed","components/data-display/CodeBlock.jsx":"b081fc85f07e","components/data-display/FigureCard.jsx":"9c87c2c8be89","components/data-display/Table.jsx":"84df85b82ef2","components/data-display/Tag.jsx":"d18a3695eff5","components/feedback/Dialog.jsx":"18afd8191513","components/feedback/DiscardChangesModal.jsx":"edae19718ebe","components/feedback/ErrorViewerModal.jsx":"ca4951be90cb","components/feedback/IconPickerModal.jsx":"76fa79338ab0","components/feedback/Toast.jsx":"d3c3480b88db","components/forms/Button.jsx":"2de2c61bd9cd","components/forms/Checkbox.jsx":"696510b884a5","components/forms/Dropdown.jsx":"47df0e2f4aae","components/forms/Input.jsx":"c890ec65a0ac","components/forms/InputColor.jsx":"3ccddfd07559","components/forms/InputCultureSelect.jsx":"c3ca4e6ed734","components/forms/InputDate.jsx":"03f117c85a76","components/forms/InputDropdownList.jsx":"4331e5106f47","components/forms/InputEyeDropper.jsx":"52d6c0be0a32","components/forms/InputMultipleTextString.jsx":"9020e0242f92","components/forms/InputNumberRange.jsx":"78adc9fa7a1a","components/forms/InputRadioButtonList.jsx":"e60f8274084a","components/forms/InputSlider.jsx":"915f15a8ba25","components/forms/InputToggle.jsx":"24a6b6a25c6f","components/forms/InputWithAlias.jsx":"84fe4a9ddd70","components/forms/Select.jsx":"1dea314dc5be","components/forms/Switch.jsx":"68be9a0d9943","components/layout/BodyLayout.jsx":"f2e5e3a99b07","components/layout/EntityFrame.jsx":"842a75ac3616","components/layout/FooterLayout.jsx":"cd09c0f3c53d","components/layout/PopoverLayout.jsx":"7c11d424991d","components/layout/SplitPanel.jsx":"028986955219","components/layout/Stack.jsx":"000b84beb557","components/layout/WorkspaceEditor.jsx":"94cc189850e7","components/layout/WorkspaceFooter.jsx":"893c2ccede73","components/navigation/MenuItem.jsx":"92726d80dd3d","components/navigation/SectionSidebarMenu.jsx":"41c80b296d79","components/navigation/SectionSidebarMenuWithEntityActions.jsx":"98044355e9a1","components/navigation/TabGroup.jsx":"7c767fc9de04","components/property/Property.jsx":"a9938b7054f6","components/property/PropertyLayout.jsx":"92d4b7e71aea","components/symbol/Icon.jsx":"583bc0c50200","ui_kits/backoffice/Collection.jsx":"2ff5f0cf89ba","ui_kits/backoffice/Header.jsx":"2ec35647f6fa","ui_kits/backoffice/Sidebar.jsx":"b5b755dc2ad4","ui_kits/backoffice/Workspace.jsx":"3d15d11d7c05","ui_kits/backoffice/data.js":"27a3374afbf3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UmbracoBackofficeDesignSystem_667d97 = window.UmbracoBackofficeDesignSystem_667d97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/EntityActionList.jsx
try { (() => {
const CSS = `
.umb-eal { display: flex; flex-direction: column; font-family: var(--uui-font-family); min-width: 180px; }
.umb-eal__item {
	display: flex; align-items: center; gap: var(--uui-size-space-3);
	padding: var(--uui-size-space-3) var(--uui-size-space-4);
	border: none; background: none; cursor: pointer; text-align: left; width: 100%;
	font-size: 14px; color: var(--uui-color-text); border-radius: 3px;
	transition: background-color 100ms ease;
}
.umb-eal__item:hover { background: var(--uui-color-surface-alt); }
.umb-eal__item--danger { color: var(--uui-color-danger); }
.umb-eal__icon { width: 18px; height: 18px; flex: none; display: inline-flex; color: var(--uui-color-interactive); }
.umb-eal__item--danger .umb-eal__icon { color: var(--uui-color-danger); }
.umb-eal__sep { height: 1px; background: var(--uui-color-divider-standalone); margin: var(--uui-size-space-1) 0; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-eal-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-eal-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function EntityActionList({
  actions = [],
  onAction,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-eal",
    style: style
  }, actions.map((a, i) => a.separator ? /*#__PURE__*/React.createElement("div", {
    className: "umb-eal__sep",
    key: `sep-${i}`
  }) : /*#__PURE__*/React.createElement("button", {
    key: a.alias || a.label,
    className: ['umb-eal__item', a.color === 'danger' && 'umb-eal__item--danger'].filter(Boolean).join(' '),
    onClick: () => {
      a.onClick && a.onClick();
      onAction && onAction(a);
    }
  }, a.icon && /*#__PURE__*/React.createElement("span", {
    className: "umb-eal__icon",
    dangerouslySetInnerHTML: {
      __html: a.icon
    }
  }), /*#__PURE__*/React.createElement("span", null, a.label))));
}
Object.assign(__ds_scope, { EntityActionList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/EntityActionList.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
const CSS = `
.umb-avatar {
	display: inline-flex; align-items: center; justify-content: center;
	font-family: var(--uui-font-family); font-weight: 700; color: #fff;
	border-radius: 50%; overflow: hidden; flex: none; user-select: none;
	background: var(--uui-color-interactive);
}
.umb-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-avatar-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-avatar-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const SIZES = {
  s: 24,
  m: 36,
  l: 48
};
// Deterministic backoffice-palette colour from the name
const BG = ['var(--uui-color-interactive)', 'var(--uui-palette-violet-blue)', 'var(--uui-palette-forest-green)', 'var(--uui-palette-maroon-flush)', 'var(--uui-palette-chamoisee)', 'var(--uui-palette-gunmetal)'];
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'm',
  style
}) {
  ensureStyles();
  const px = SIZES[size] || size;
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % BG.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "umb-avatar",
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4,
      background: src ? undefined : BG[hash],
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
const CSS = `
.umb-badge {
	display: inline-flex; align-items: center; justify-content: center;
	font-family: var(--uui-font-family); font-size: 11px; font-weight: 700; line-height: 1;
	min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; box-sizing: border-box;
}
.umb-badge--default { background: var(--uui-color-danger); color: var(--uui-color-danger-contrast); }
.umb-badge--positive { background: var(--uui-color-positive); color: var(--uui-color-positive-contrast); }
.umb-badge--warning { background: var(--uui-color-warning); color: var(--uui-color-warning-contrast); }
.umb-badge--info { background: var(--uui-color-selected); color: var(--uui-color-selected-contrast); }
.umb-badge--dot { min-width: 10px; height: 10px; padding: 0; border-radius: 50%; }
.umb-badge--attached { position: absolute; top: -6px; right: -6px; box-shadow: 0 0 0 2px var(--uui-color-surface); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-badge-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-badge-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  color = 'default',
  dot = false,
  attached = false,
  children,
  style
}) {
  ensureStyles();
  const cls = ['umb-badge', `umb-badge--${color}`, dot && 'umb-badge--dot', attached && 'umb-badge--attached'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, dot ? null : children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Box.jsx
try { (() => {
const CSS = `
.umb-box {
	background: var(--uui-color-surface);
	border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-1);
	box-sizing: border-box;
	color: var(--uui-color-text);
	font-family: var(--uui-font-family);
}
.umb-box__head {
	display: flex; align-items: center; justify-content: space-between;
	padding: var(--uui-size-space-4) var(--uui-size-space-5);
	border-bottom: 1px solid var(--uui-color-divider);
}
.umb-box__headline { font-size: 15px; font-weight: 700; margin: 0; }
.umb-box__body { padding: var(--uui-size-space-5); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-box-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-box-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Box({
  headline,
  headlineSlot,
  children,
  noPadding = false,
  style
}) {
  ensureStyles();
  const hasHead = headline || headlineSlot;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-box",
    style: style
  }, hasHead && /*#__PURE__*/React.createElement("div", {
    className: "umb-box__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "umb-box__headline"
  }, headline), headlineSlot), /*#__PURE__*/React.createElement("div", {
    className: "umb-box__body",
    style: noPadding ? {
      padding: 0
    } : undefined
  }, children));
}
Object.assign(__ds_scope, { Box });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Box.jsx", error: String((e && e.message) || e) }); }

// components/data-display/CodeBlock.jsx
try { (() => {
const CSS = `
.umb-code-block {
	border: 1px solid var(--uui-color-divider-emphasis);
	border-radius: var(--uui-border-radius-1);
	overflow: hidden; font-family: var(--uui-font-monospace);
	background: var(--uui-color-surface-alt);
}
.umb-code-block__head {
	display: flex; align-items: center; justify-content: space-between;
	padding: var(--uui-size-space-2) var(--uui-size-space-3);
	background: var(--uui-color-surface-emphasis);
	border-bottom: 1px solid var(--uui-color-divider-emphasis);
	font-family: var(--uui-font-family); font-size: 12px; color: var(--uui-color-text-alt);
}
.umb-code-block__title { font-weight: 700; color: var(--uui-color-text); }
.umb-code-block__copy {
	border: none; background: none; cursor: pointer; color: var(--uui-color-interactive);
	font-family: var(--uui-font-family); font-size: 12px; display: inline-flex; align-items: center; gap: 4px; padding: 2px 4px; border-radius: 3px;
}
.umb-code-block__copy:hover { background: var(--uui-color-surface); }
.umb-code-block__pre { margin: 0; padding: var(--uui-size-space-4); overflow: auto; font-size: 13px; line-height: 1.5; color: var(--uui-color-text); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-code-block-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-code-block-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function CodeBlock({
  language,
  copyable = true,
  children,
  code,
  style
}) {
  ensureStyles();
  const [copied, setCopied] = React.useState(false);
  const text = code != null ? code : typeof children === 'string' ? children : '';
  const copy = () => {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const showHead = language || copyable;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-code-block",
    style: style
  }, showHead && /*#__PURE__*/React.createElement("div", {
    className: "umb-code-block__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-code-block__title"
  }, language || 'Code'), copyable && /*#__PURE__*/React.createElement("button", {
    className: "umb-code-block__copy",
    onClick: copy
  }, copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
    className: "umb-code-block__pre"
  }, text || children));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FigureCard.jsx
try { (() => {
const CSS = `
.umb-figure-card {
	position: relative; display: flex; flex-direction: column;
	background: var(--uui-color-surface-alt);
	border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-1);
	overflow: hidden; font-family: var(--uui-font-family);
	width: var(--umb-figure-card-width, 220px);
	cursor: pointer; transition: box-shadow 120ms ease;
}
.umb-figure-card:hover { box-shadow: var(--uui-shadow-depth-2); }
.umb-figure-card__media { position: relative; aspect-ratio: 16 / 10; background: var(--uui-color-surface-emphasis); display: grid; place-items: center; overflow: hidden; }
.umb-figure-card__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.umb-figure-card__ph { color: var(--uui-color-border-emphasis); width: 40px; height: 40px; }
.umb-figure-card__tag { position: absolute; top: var(--uui-size-2); right: var(--uui-size-2); }
.umb-figure-card__foot { padding: var(--uui-size-space-3) var(--uui-size-space-4); background: var(--uui-color-surface); border-top: 1px solid var(--uui-color-divider); }
.umb-figure-card__title { font-size: 14px; font-weight: 700; color: var(--uui-color-interactive); margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.umb-figure-card__sub { font-size: 12px; color: var(--uui-color-text-alt); margin: 2px 0 0; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-figure-card-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-figure-card-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function FigureCard({
  title,
  subtitle,
  src,
  icon,
  tag,
  onClick,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-figure-card",
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-figure-card__media"
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    className: "umb-figure-card__ph",
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    className: "umb-figure-card__ph",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
  })), tag && /*#__PURE__*/React.createElement("span", {
    className: "umb-figure-card__tag"
  }, tag)), /*#__PURE__*/React.createElement("div", {
    className: "umb-figure-card__foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "umb-figure-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "umb-figure-card__sub"
  }, subtitle)));
}
Object.assign(__ds_scope, { FigureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FigureCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
const CSS = `
.umb-table { width: 100%; border-collapse: collapse; font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text); background: var(--uui-color-surface); }
.umb-table thead th {
	text-align: left; font-weight: 700; font-size: 13px; color: var(--uui-color-text);
	padding: var(--uui-size-space-3) var(--uui-size-5);
	border-bottom: 1px solid var(--uui-color-border);
	white-space: nowrap; user-select: none; background: var(--uui-color-surface);
}
.umb-table th.umb-table__sortable { cursor: pointer; }
.umb-table th.umb-table__sortable:hover { color: var(--uui-color-interactive-emphasis); }
.umb-table__sortarrow { display: inline-block; width: 12px; opacity: 0.5; }
.umb-table th.umb-table__sorted .umb-table__sortarrow { opacity: 1; }
.umb-table tbody td {
	padding: var(--uui-size-4) var(--uui-size-5);
	border-bottom: 1px solid var(--uui-color-divider-standalone);
	vertical-align: middle;
}
.umb-table tbody tr { transition: background-color 100ms ease; }
.umb-table tbody tr:hover { background: var(--uui-color-surface-alt); }
.umb-table tbody tr.umb-table__row--selected { background: var(--uui-color-selected); color: var(--uui-color-selected-contrast); }
.umb-table tbody tr.umb-table__row--selected td { border-bottom-color: var(--uui-color-selected); }
.umb-table tbody tr.umb-table__row--selected a { color: var(--uui-color-selected-contrast); }
.umb-table__check { width: 1px; padding-right: 0 !important; }
.umb-table__iconcell { width: 1px; white-space: nowrap; }
.umb-table__icon { width: 18px; height: 18px; color: var(--uui-color-interactive); display: inline-flex; vertical-align: middle; }
.umb-table__row--selected .umb-table__icon { color: var(--uui-color-selected-contrast); }
.umb-table__cb {
	width: 18px; height: 18px; border-radius: 3px; border: 1px solid var(--uui-color-border-emphasis);
	background: var(--uui-color-surface); display: grid; place-items: center; cursor: pointer;
}
.umb-table__cb svg { width: 13px; height: 13px; stroke: #fff; opacity: 0; }
.umb-table__cb--on { background: var(--uui-color-selected); border-color: var(--uui-color-selected); }
.umb-table__row--selected .umb-table__cb { background: #fff; border-color: #fff; }
.umb-table__row--selected .umb-table__cb svg { stroke: var(--uui-color-selected); opacity: 1; }
.umb-table__cb--on svg { opacity: 1; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-table-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-table-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Check({
  on
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['umb-table__cb', on && 'umb-table__cb--on'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}
function Table({
  columns = [],
  items = [],
  config = {},
  selection = [],
  sortColumn,
  sortDesc = false,
  onSort,
  onSelectionChange,
  renderCell,
  style
}) {
  ensureStyles();
  const allowSelection = !!config.allowSelection;
  const hideIcon = !!config.hideIcon;
  const allSelected = items.length > 0 && selection.length === items.length;
  const toggleRow = id => {
    if (!onSelectionChange) return;
    onSelectionChange(selection.includes(id) ? selection.filter(s => s !== id) : [...selection, id]);
  };
  const toggleAll = () => {
    if (!onSelectionChange) return;
    onSelectionChange(allSelected ? [] : items.map(i => i.id));
  };
  return /*#__PURE__*/React.createElement("table", {
    className: "umb-table",
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, allowSelection && /*#__PURE__*/React.createElement("th", {
    className: "umb-table__check",
    onClick: toggleAll
  }, /*#__PURE__*/React.createElement(Check, {
    on: allSelected
  })), !hideIcon && /*#__PURE__*/React.createElement("th", {
    className: "umb-table__iconcell"
  }), columns.map(col => {
    const sorted = sortColumn === col.alias;
    return /*#__PURE__*/React.createElement("th", {
      key: col.alias,
      className: [col.allowSorting && 'umb-table__sortable', sorted && 'umb-table__sorted'].filter(Boolean).join(' '),
      style: {
        textAlign: col.align || 'left',
        width: col.width
      },
      onClick: col.allowSorting && onSort ? () => onSort(col.alias) : undefined
    }, col.name, col.allowSorting && /*#__PURE__*/React.createElement("span", {
      className: "umb-table__sortarrow"
    }, sorted ? sortDesc ? ' ↓' : ' ↑' : ' ↕'));
  }))), /*#__PURE__*/React.createElement("tbody", null, items.map(item => {
    const selected = selection.includes(item.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: item.id,
      className: selected ? 'umb-table__row--selected' : ''
    }, allowSelection && /*#__PURE__*/React.createElement("td", {
      className: "umb-table__check",
      onClick: () => toggleRow(item.id)
    }, /*#__PURE__*/React.createElement(Check, {
      on: selected
    })), !hideIcon && /*#__PURE__*/React.createElement("td", {
      className: "umb-table__iconcell"
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      className: "umb-table__icon",
      dangerouslySetInnerHTML: {
        __html: item.icon
      }
    })), columns.map(col => {
      const cell = (item.data || []).find(d => d.columnAlias === col.alias);
      const value = cell ? cell.value : '';
      return /*#__PURE__*/React.createElement("td", {
        key: col.alias,
        style: {
          textAlign: col.align || 'left'
        }
      }, renderCell ? renderCell(col, item, value) : value);
    }));
  })));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
const CSS = `
.umb-tag {
	display: inline-flex; align-items: center; gap: var(--uui-size-space-1);
	font-family: var(--uui-font-family); font-size: 12px; line-height: 1; font-weight: 700;
	height: 24px; padding: 0 var(--uui-size-space-3);
	border-radius: 12px; white-space: nowrap;
}
.umb-tag--default { background: var(--uui-color-surface-emphasis); color: var(--uui-color-text); }
.umb-tag--positive { background: var(--uui-color-positive); color: var(--uui-color-positive-contrast); }
.umb-tag--warning { background: var(--uui-color-warning); color: var(--uui-color-warning-contrast); }
.umb-tag--danger { background: var(--uui-color-danger); color: var(--uui-color-danger-contrast); }
.umb-tag--default.umb-tag--secondary { background: transparent; box-shadow: inset 0 0 0 1px var(--uui-color-border-standalone); }
.umb-tag--positive.umb-tag--secondary { background: transparent; color: var(--uui-color-positive-standalone); box-shadow: inset 0 0 0 1px var(--uui-color-positive); }
.umb-tag--warning.umb-tag--secondary { background: transparent; color: var(--uui-color-warning-standalone); box-shadow: inset 0 0 0 1px var(--uui-color-warning-standalone); }
.umb-tag--danger.umb-tag--secondary { background: transparent; color: var(--uui-color-danger-standalone); box-shadow: inset 0 0 0 1px var(--uui-color-danger); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-tag-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-tag-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tag({
  color = 'default',
  look = 'primary',
  children,
  label,
  style
}) {
  ensureStyles();
  const cls = ['umb-tag', `umb-tag--${color}`, look === 'secondary' && 'umb-tag--secondary'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, children ?? label);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CSS = `
.umb-toast {
	display: flex; align-items: flex-start; gap: var(--uui-size-space-3);
	width: 340px; box-sizing: border-box;
	background: var(--uui-color-surface);
	border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-3);
	padding: var(--uui-size-space-4) var(--uui-size-space-4);
	font-family: var(--uui-font-family); color: var(--uui-color-text);
	border-left: 4px solid var(--umb-toast-accent, var(--uui-color-default));
}
.umb-toast__body { flex: 1 1 auto; }
.umb-toast__headline { font-size: 14px; font-weight: 700; margin: 0 0 2px; }
.umb-toast__message { font-size: 13px; color: var(--uui-color-text-alt); margin: 0; }
.umb-toast__close {
	border: none; background: none; cursor: pointer; color: var(--uui-color-text-alt);
	width: 20px; height: 20px; flex: none; display: grid; place-items: center; border-radius: 3px; padding: 0;
}
.umb-toast__close:hover { background: var(--uui-color-surface-alt); color: var(--uui-color-text); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-toast-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-toast-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const ACCENT = {
  default: 'var(--uui-color-default)',
  positive: 'var(--uui-color-positive)',
  warning: 'var(--uui-color-warning-standalone)',
  danger: 'var(--uui-color-danger)'
};
function Toast({
  color = 'default',
  headline,
  message,
  onClose,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-toast",
    style: {
      '--umb-toast-accent': ACCENT[color] || ACCENT.default,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-toast__body"
  }, headline && /*#__PURE__*/React.createElement("p", {
    className: "umb-toast__headline"
  }, headline), message && /*#__PURE__*/React.createElement("p", {
    className: "umb-toast__message"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "umb-toast__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.umb-btn {
	font-family: var(--uui-font-family);
	font-size: 14px;
	font-weight: 400;
	line-height: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: var(--uui-size-space-2);
	height: var(--umb-btn-height, 36px);
	padding: 0 var(--uui-size-space-5);
	border: 1px solid transparent;
	border-radius: 3px;
	background: transparent;
	color: var(--uui-color-interactive);
	cursor: pointer;
	white-space: nowrap;
	transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease;
	box-sizing: border-box;
}
.umb-btn:focus-visible { outline: 2px solid var(--uui-color-focus); outline-offset: 1px; }
.umb-btn--compact { padding: 0 var(--uui-size-space-3); }
.umb-btn[disabled] { cursor: default; background: var(--uui-color-disabled) !important; color: var(--uui-color-disabled-contrast) !important; border-color: transparent !important; }

/* default look */
.umb-btn--default { background: var(--uui-color-surface); border-color: var(--uui-color-border); color: var(--uui-color-interactive); }
.umb-btn--default:hover:not([disabled]) { background: var(--uui-color-surface-emphasis); }

/* secondary look */
.umb-btn--secondary { background: var(--uui-color-surface-alt); color: var(--uui-color-interactive); }
.umb-btn--secondary:hover:not([disabled]) { background: var(--uui-color-surface-emphasis); }

/* outline look */
.umb-btn--outline { background: transparent; border-color: currentColor; }
.umb-btn--outline:hover:not([disabled]) { background: color-mix(in srgb, currentColor 8%, transparent); }

/* placeholder look — dashed, sits in the destination of its action */
.umb-btn--placeholder { background: transparent; border: 1px dashed var(--uui-color-divider-emphasis); color: var(--uui-color-interactive); width: 100%; }
.umb-btn--placeholder:hover:not([disabled]) { border-color: var(--uui-color-interactive); }

/* primary look — filled with the color (the single CTA) */
.umb-btn--primary { color: #fff; background: var(--umb-btn-bg); }
.umb-btn--primary:hover:not([disabled]) { background: var(--umb-btn-bg-emphasis); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-btn-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-btn-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const COLOR_BG = {
  default: ['var(--uui-color-default)', 'var(--uui-color-default-emphasis)'],
  positive: ['var(--uui-color-positive)', 'var(--uui-color-positive-emphasis)'],
  warning: ['var(--uui-color-warning)', 'var(--uui-color-warning-emphasis)'],
  danger: ['var(--uui-color-danger)', 'var(--uui-color-danger-emphasis)']
};
function Button({
  look = 'default',
  color = 'default',
  label,
  children,
  compact = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  ensureStyles();
  const [bg, bgEmphasis] = COLOR_BG[color] || COLOR_BG.default;
  const cls = ['umb-btn', `umb-btn--${look}`, compact && 'umb-btn--compact'].filter(Boolean).join(' ');
  const vars = look === 'primary' ? {
    '--umb-btn-bg': bg,
    '--umb-btn-bg-emphasis': bgEmphasis
  } : undefined;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...vars,
      ...style
    }
  }, rest), children ?? label);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.umb-dialog__backdrop {
	position: fixed; inset: 0; z-index: 100;
	background: rgba(27, 38, 79, 0.45);
	display: grid; place-items: center;
	animation: umb-dialog-fade 140ms ease;
}
@keyframes umb-dialog-fade { from { opacity: 0; } to { opacity: 1; } }
.umb-dialog {
	width: 460px; max-width: calc(100vw - 32px);
	background: var(--uui-color-surface);
	border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-5);
	font-family: var(--uui-font-family); color: var(--uui-color-text);
	padding: var(--uui-size-space-6);
	animation: umb-dialog-rise 160ms ease;
}
@keyframes umb-dialog-rise { from { transform: translateY(8px); opacity: 0; } to { transform: none; opacity: 1; } }
.umb-dialog__headline { font-size: 20px; font-weight: 700; margin: 0 0 var(--uui-size-space-4); }
.umb-dialog__desc { font-size: 14px; line-height: 21px; color: var(--uui-color-text); margin: 0 0 var(--uui-size-space-6); }
.umb-dialog__desc strong { font-weight: 700; }
.umb-dialog__desc i { font-style: italic; color: var(--uui-color-text-alt); }
.umb-dialog__actions { display: flex; justify-content: flex-end; gap: var(--uui-size-space-3); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-dialog-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-dialog-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dialog({
  open = true,
  headline,
  description,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColor = 'positive',
  onConfirm,
  onCancel
}) {
  ensureStyles();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-dialog__backdrop",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-dialog",
    onClick: e => e.stopPropagation()
  }, headline && /*#__PURE__*/React.createElement("h2", {
    className: "umb-dialog__headline"
  }, headline), description && (typeof description === 'string' ? /*#__PURE__*/React.createElement("p", {
    className: "umb-dialog__desc",
    dangerouslySetInnerHTML: {
      __html: description
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "umb-dialog__desc"
  }, description)), children, /*#__PURE__*/React.createElement("div", {
    className: "umb-dialog__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    look: "default",
    label: cancelLabel,
    onClick: onCancel
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    look: "primary",
    color: confirmColor,
    label: confirmLabel,
    onClick: onConfirm
  }))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DiscardChangesModal.jsx
try { (() => {
/**
 * Discard-changes confirm (composed `umb-discard-changes-modal`). Shown when leaving a
 * workspace with unsaved edits. Thin specialisation of `Dialog` with the standard copy.
 */
function DiscardChangesModal({
  open = true,
  onDiscard,
  onCancel
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: open,
    headline: "Discard changes?",
    description: "You have <strong>unsaved changes</strong>. Leaving now will <i>discard them</i>.",
    confirmLabel: "Discard",
    confirmColor: "danger",
    cancelLabel: "Keep editing",
    onConfirm: onDiscard,
    onCancel: onCancel
  });
}
Object.assign(__ds_scope, { DiscardChangesModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DiscardChangesModal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorViewerModal.jsx
try { (() => {
const CSS = `
.umb-error-modal__backdrop { position: fixed; inset: 0; z-index: 100; background: rgba(27,38,79,0.45); display: grid; place-items: center; animation: umb-errm-fade 140ms ease; }
@keyframes umb-errm-fade { from { opacity: 0; } to { opacity: 1; } }
.umb-error-modal {
	width: 560px; max-width: calc(100vw - 32px); max-height: calc(100vh - 64px); overflow: auto;
	background: var(--uui-color-surface); border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-5); font-family: var(--uui-font-family); color: var(--uui-color-text);
	padding: var(--uui-size-space-6); box-sizing: border-box; animation: umb-errm-rise 160ms ease;
}
@keyframes umb-errm-rise { from { transform: translateY(8px); opacity: 0; } to { transform: none; opacity: 1; } }
.umb-error-modal__head { display: flex; align-items: flex-start; gap: var(--uui-size-space-3); margin-bottom: var(--uui-size-space-4); }
.umb-error-modal__icon { width: 28px; height: 28px; flex: none; color: var(--uui-color-danger); }
.umb-error-modal__title { font-size: 20px; font-weight: 700; margin: 0; }
.umb-error-modal__msg { font-size: 14px; color: var(--uui-color-text-alt); margin: 2px 0 0; }
.umb-error-modal__actions { display: flex; justify-content: flex-end; gap: var(--uui-size-space-3); margin-top: var(--uui-size-space-6); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-error-modal-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-error-modal-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function ErrorViewerModal({
  open = true,
  headline = 'Something went wrong',
  message,
  details,
  onClose
}) {
  ensureStyles();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-error-modal__backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-error-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-error-modal__head"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "umb-error-modal__icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "umb-error-modal__title"
  }, headline), message && /*#__PURE__*/React.createElement("p", {
    className: "umb-error-modal__msg"
  }, message))), details && /*#__PURE__*/React.createElement(__ds_scope.CodeBlock, {
    language: "Details",
    code: details
  }), /*#__PURE__*/React.createElement("div", {
    className: "umb-error-modal__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    look: "primary",
    color: "danger",
    label: "Close",
    onClick: onClose
  }))));
}
Object.assign(__ds_scope, { ErrorViewerModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorViewerModal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const CSS = `
.umb-checkbox { display: inline-flex; align-items: center; gap: var(--uui-size-space-3); font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text); cursor: pointer; user-select: none; }
.umb-checkbox__box {
	width: 18px; height: 18px; flex: none;
	border: 1px solid var(--uui-color-border-emphasis);
	border-radius: 3px;
	background: var(--uui-color-surface);
	display: grid; place-items: center;
	transition: background-color 120ms ease, border-color 120ms ease;
}
.umb-checkbox:hover .umb-checkbox__box { border-color: var(--uui-color-interactive); }
.umb-checkbox__box svg { width: 13px; height: 13px; stroke: #fff; opacity: 0; }
.umb-checkbox--checked .umb-checkbox__box { background: var(--uui-color-selected); border-color: var(--uui-color-selected); }
.umb-checkbox--checked .umb-checkbox__box svg { opacity: 1; }
.umb-checkbox--disabled { cursor: default; color: var(--uui-color-disabled-contrast); }
.umb-checkbox--disabled .umb-checkbox__box { background: var(--uui-color-disabled); border-color: var(--uui-color-border); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-checkbox-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-checkbox-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  checked = false,
  label,
  disabled = false,
  onChange,
  style
}) {
  ensureStyles();
  const cls = ['umb-checkbox', checked && 'umb-checkbox--checked', disabled && 'umb-checkbox--disabled'].filter(Boolean).join(' ');
  const toggle = () => {
    if (disabled) return;
    onChange && onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    style: style,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-checkbox__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
const CSS = `
.umb-dropdown { position: relative; display: inline-block; }
.umb-dropdown__trigger {
	display: inline-flex; align-items: center; gap: var(--uui-size-space-2);
	height: 36px; padding: 0 var(--uui-size-space-4);
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-interactive);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px; cursor: pointer;
	transition: border-color 120ms ease, background-color 120ms ease;
}
.umb-dropdown__trigger:hover { border-color: var(--uui-color-border-emphasis); }
.umb-dropdown--open .umb-dropdown__trigger { border-color: var(--uui-color-focus); }
.umb-dropdown__chev { width: 15px; height: 15px; transition: transform 120ms ease; }
.umb-dropdown--open .umb-dropdown__chev { transform: rotate(180deg); }
.umb-dropdown__pop {
	position: absolute; z-index: 30; margin-top: 4px; min-width: 100%;
	animation: umb-dd-in 120ms ease;
}
.umb-dropdown__pop--end { right: 0; }
@keyframes umb-dd-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-dropdown-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-dropdown-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dropdown({
  label,
  trigger,
  align = 'start',
  children,
  style
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-dropdown', open && 'umb-dropdown--open'].filter(Boolean).join(' '),
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(v => !v)
  }, trigger || /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "umb-dropdown__trigger"
  }, label, /*#__PURE__*/React.createElement("svg", {
    className: "umb-dropdown__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: ['umb-dropdown__pop', align === 'end' && 'umb-dropdown__pop--end'].filter(Boolean).join(' '),
    onClick: () => setOpen(false)
  }, children));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.umb-input {
	font-family: var(--uui-font-family);
	font-size: 14px;
	color: var(--uui-color-text);
	display: inline-flex;
	align-items: center;
	width: 100%;
	height: var(--umb-input-height, 36px);
	padding: 0 var(--uui-size-space-3);
	background: var(--uui-color-surface);
	border: 1px solid var(--uui-color-border);
	border-radius: 3px;
	box-sizing: border-box;
	transition: border-color 120ms ease;
}
.umb-input::placeholder { color: var(--uui-color-text-alt); opacity: 0.6; }
.umb-input:hover:not(:disabled) { border-color: var(--uui-color-border-emphasis); }
.umb-input:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-input:disabled { background: var(--uui-color-disabled); color: var(--uui-color-disabled-contrast); }
.umb-input--invalid, .umb-input--invalid:focus { border-color: var(--uui-color-invalid); box-shadow: 0 0 0 1px var(--uui-color-invalid); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-input-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  invalid = false,
  onChange,
  onInput,
  style,
  ...rest
}) {
  ensureStyles();
  const cls = ['umb-input', invalid && 'umb-input--invalid'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onInput: onInput,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputColor.jsx
try { (() => {
const CSS = `
.umb-input-color { display: inline-flex; align-items: center; gap: var(--uui-size-space-3); }
.umb-input-color__swatch {
	width: 36px; height: 36px; flex: none; border-radius: 3px; border: 1px solid var(--uui-color-border);
	padding: 0; cursor: pointer; overflow: hidden; position: relative;
}
.umb-input-color__swatch input { position: absolute; inset: -6px; width: 200%; height: 200%; border: none; padding: 0; cursor: pointer; }
.umb-input-color__hex {
	font-family: var(--uui-font-monospace); font-size: 14px; color: var(--uui-color-text); text-transform: uppercase;
	height: 36px; padding: 0 var(--uui-size-space-3); width: 110px;
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px; box-sizing: border-box;
}
.umb-input-color__hex:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-input-color-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-color-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputColor({
  value = '#283a97',
  onChange,
  style
}) {
  ensureStyles();
  const set = v => onChange && onChange(v);
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-input-color",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-input-color__swatch",
    style: {
      background: value
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: value,
    onChange: e => set(e.target.value)
  })), /*#__PURE__*/React.createElement("input", {
    className: "umb-input-color__hex",
    value: value,
    onChange: e => set(e.target.value)
  }));
}
Object.assign(__ds_scope, { InputColor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputColor.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputDate.jsx
try { (() => {
const CSS = `
.umb-input-date {
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text);
	height: 36px; padding: 0 var(--uui-size-space-3); box-sizing: border-box;
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
	color-scheme: var(--uui-color-scheme, normal);
}
.umb-input-date:hover { border-color: var(--uui-color-border-emphasis); }
.umb-input-date:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-input-date-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-date-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputDate({
  type = 'date',
  value,
  onChange,
  min,
  max,
  disabled = false,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("input", {
    className: "umb-input-date",
    type: type === 'datetime' ? 'datetime-local' : type,
    value: value,
    min: min,
    max: max,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: style
  });
}
Object.assign(__ds_scope, { InputDate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputDate.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputDropdownList.jsx
try { (() => {
const CSS = `
.umb-idl { position: relative; display: inline-block; width: 100%; font-family: var(--uui-font-family); }
.umb-idl__field {
	display: flex; align-items: center; width: 100%; height: 36px; box-sizing: border-box;
	padding: 0 var(--uui-size-space-3);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
}
.umb-idl--open .umb-idl__field { border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-idl__field input { flex: 1 1 auto; border: none; outline: none; background: none; font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text); min-width: 0; }
.umb-idl__chev { width: 16px; height: 16px; stroke: var(--uui-color-text-alt); flex: none; }
.umb-idl__menu {
	position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 30;
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border);
	border-radius: 6px; box-shadow: var(--uui-shadow-depth-3);
	padding: var(--uui-size-space-1); max-height: 240px; overflow: auto;
}
.umb-idl__opt { padding: var(--uui-size-space-3); border-radius: 3px; font-size: 14px; color: var(--uui-color-text); cursor: pointer; }
.umb-idl__opt:hover, .umb-idl__opt--hi { background: var(--uui-color-surface-alt); }
.umb-idl__opt--active { background: var(--uui-color-selected); color: var(--uui-color-selected-contrast); }
.umb-idl__empty { padding: var(--uui-size-space-3); font-size: 13px; color: var(--uui-color-text-alt); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-idl-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-idl-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputDropdownList({
  options = [],
  value,
  placeholder = 'Type to search…',
  onChange,
  style
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const ref = React.useRef(null);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const selected = norm.find(o => o.value === value);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const text = open ? query : selected ? selected.label : '';
  const filtered = norm.filter(o => o.label.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-idl', open && 'umb-idl--open'].filter(Boolean).join(' '),
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-idl__field",
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    placeholder: selected ? selected.label : placeholder,
    onFocus: () => setOpen(true),
    onChange: e => {
      setQuery(e.target.value);
      setOpen(true);
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "umb-idl__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "umb-idl__menu"
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "umb-idl__empty"
  }, "No matches"), filtered.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    className: ['umb-idl__opt', o.value === value && 'umb-idl__opt--active'].filter(Boolean).join(' '),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
      setQuery('');
    }
  }, o.label))));
}
Object.assign(__ds_scope, { InputDropdownList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputDropdownList.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputEyeDropper.jsx
try { (() => {
const CSS = `
.umb-eye-dropper {
	display: inline-flex; align-items: center; gap: var(--uui-size-space-3);
	font-family: var(--uui-font-family);
}
.umb-eye-dropper__btn {
	display: inline-flex; align-items: center; gap: var(--uui-size-space-2);
	height: 36px; padding: 0 var(--uui-size-space-4);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
	font-size: 14px; color: var(--uui-color-interactive); cursor: pointer;
}
.umb-eye-dropper__btn:hover { border-color: var(--uui-color-border-emphasis); }
.umb-eye-dropper__btn svg { width: 16px; height: 16px; }
.umb-eye-dropper__swatch { width: 24px; height: 24px; border-radius: 3px; border: 1px solid var(--uui-color-border); }
.umb-eye-dropper__hex { font-family: var(--uui-font-monospace); font-size: 13px; color: var(--uui-color-text-alt); text-transform: uppercase; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-eye-dropper-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-eye-dropper-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputEyeDropper({
  value,
  label = 'Pick colour',
  onChange,
  style
}) {
  ensureStyles();
  const pick = async () => {
    if (typeof window !== 'undefined' && 'EyeDropper' in window) {
      try {
        const result = await new window.EyeDropper().open();
        onChange && onChange(result.sRGBHex);
        return;
      } catch (e) {/* cancelled */}
    }
    // Fallback for browsers without the EyeDropper API.
    const input = document.createElement('input');
    input.type = 'color';
    input.value = value || '#283a97';
    input.addEventListener('input', () => onChange && onChange(input.value));
    input.click();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-eye-dropper",
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "umb-eye-dropper__btn",
    onClick: pick
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m2 22 1-1h3l9-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21v-3l9-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 6 3.4-3.4a2.1 2.1 0 0 1 3 3L18 9l.4.4a2.1 2.1 0 0 1 0 3 2.1 2.1 0 0 1-3 0l-3.8-3.8a2.1 2.1 0 0 1 0-3 2.1 2.1 0 0 1 3 0z"
  })), label), value && /*#__PURE__*/React.createElement("span", {
    className: "umb-eye-dropper__swatch",
    style: {
      background: value
    }
  }), value && /*#__PURE__*/React.createElement("span", {
    className: "umb-eye-dropper__hex"
  }, value));
}
Object.assign(__ds_scope, { InputEyeDropper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputEyeDropper.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputMultipleTextString.jsx
try { (() => {
const CSS = `
.umb-imts { display: flex; flex-direction: column; gap: var(--uui-size-space-3); font-family: var(--uui-font-family); }
.umb-imts__row { display: flex; align-items: center; gap: var(--uui-size-space-2); }
.umb-imts__grip { color: var(--uui-color-text-alt); cursor: grab; display: inline-flex; flex: none; }
.umb-imts__input {
	flex: 1 1 auto; height: 36px; padding: 0 var(--uui-size-space-3); min-width: 0; box-sizing: border-box;
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
}
.umb-imts__input:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-imts__remove { border: none; background: none; cursor: pointer; color: var(--uui-color-text-alt); width: 30px; height: 30px; flex: none; border-radius: 3px; display: grid; place-items: center; }
.umb-imts__remove:hover { background: var(--uui-color-surface-alt); color: var(--uui-color-danger); }
.umb-imts__add {
	display: inline-flex; align-items: center; gap: var(--uui-size-space-2); align-self: flex-start;
	border: 1px dashed var(--uui-color-divider-emphasis); background: transparent; cursor: pointer;
	height: 36px; padding: 0 var(--uui-size-space-4); border-radius: 3px;
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-interactive);
}
.umb-imts__add:hover { border-color: var(--uui-color-interactive); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-imts-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-imts-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputMultipleTextString({
  value = [],
  placeholder = 'Enter value',
  addLabel = 'Add',
  onChange,
  style
}) {
  ensureStyles();
  const set = next => onChange && onChange(next);
  const update = (i, v) => set(value.map((x, idx) => idx === i ? v : x));
  const remove = i => set(value.filter((_, idx) => idx !== i));
  const add = () => set([...value, '']);
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-imts",
    style: style
  }, value.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "umb-imts__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-imts__grip"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "6",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "18",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "18",
    r: "1.5"
  }))), /*#__PURE__*/React.createElement("input", {
    className: "umb-imts__input",
    value: v,
    placeholder: placeholder,
    onChange: e => update(i, e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "umb-imts__remove",
    title: "Remove",
    onClick: () => remove(i)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "umb-imts__add",
    onClick: add
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5v14"
  })), addLabel));
}
Object.assign(__ds_scope, { InputMultipleTextString });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputMultipleTextString.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputNumberRange.jsx
try { (() => {
const CSS = `
.umb-input-number-range { display: inline-flex; align-items: center; gap: var(--uui-size-space-2); font-family: var(--uui-font-family); }
.umb-input-number-range input {
	width: 80px; height: 36px; padding: 0 var(--uui-size-space-3); box-sizing: border-box; text-align: center;
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
}
.umb-input-number-range input:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-input-number-range__dash { color: var(--uui-color-text-alt); }
.umb-input-number-range--invalid input { border-color: var(--uui-color-invalid); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-input-number-range-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-number-range-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputNumberRange({
  min,
  max,
  step = 1,
  onChange,
  style
}) {
  ensureStyles();
  const invalid = min != null && max != null && Number(min) > Number(max);
  const set = (key, v) => onChange && onChange({
    min,
    max,
    [key]: v === '' ? undefined : Number(v)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-input-number-range', invalid && 'umb-input-number-range--invalid'].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: step,
    placeholder: "Min",
    value: min ?? '',
    onChange: e => set('min', e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "umb-input-number-range__dash"
  }, "\u2013"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: step,
    placeholder: "Max",
    value: max ?? '',
    onChange: e => set('max', e.target.value)
  }));
}
Object.assign(__ds_scope, { InputNumberRange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputNumberRange.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputRadioButtonList.jsx
try { (() => {
const CSS = `
.umb-radio-list { display: flex; flex-direction: column; gap: var(--uui-size-space-3); font-family: var(--uui-font-family); }
.umb-radio-list--horizontal { flex-direction: row; flex-wrap: wrap; gap: var(--uui-size-space-5); }
.umb-radio { display: inline-flex; align-items: center; gap: var(--uui-size-space-3); font-size: 14px; color: var(--uui-color-text); cursor: pointer; user-select: none; }
.umb-radio__dot { width: 18px; height: 18px; flex: none; border-radius: 50%; border: 1px solid var(--uui-color-border-emphasis); background: var(--uui-color-surface); display: grid; place-items: center; transition: border-color 120ms ease; }
.umb-radio:hover .umb-radio__dot { border-color: var(--uui-color-interactive); }
.umb-radio__dot::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--uui-color-selected); transform: scale(0); transition: transform 120ms ease; }
.umb-radio--on .umb-radio__dot { border-color: var(--uui-color-selected); }
.umb-radio--on .umb-radio__dot::after { transform: scale(1); }
.umb-radio--disabled { opacity: 0.6; cursor: default; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-radio-list-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-radio-list-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputRadioButtonList({
  options = [],
  value,
  layout = 'vertical',
  onChange,
  disabled = false,
  style
}) {
  ensureStyles();
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-radio-list', layout === 'horizontal' && 'umb-radio-list--horizontal'].filter(Boolean).join(' '),
    style: style
  }, norm.map(o => /*#__PURE__*/React.createElement("label", {
    key: o.value,
    className: ['umb-radio', o.value === value && 'umb-radio--on', disabled && 'umb-radio--disabled'].filter(Boolean).join(' '),
    onClick: () => !disabled && onChange && onChange(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-radio__dot"
  }), /*#__PURE__*/React.createElement("span", null, o.label))));
}
Object.assign(__ds_scope, { InputRadioButtonList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputRadioButtonList.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputSlider.jsx
try { (() => {
const CSS = `
.umb-input-slider { display: flex; align-items: center; gap: var(--uui-size-space-4); font-family: var(--uui-font-family); }
.umb-input-slider input[type=range] { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 2px; background: var(--uui-color-border-standalone); flex: 1 1 auto; outline: none; }
.umb-input-slider input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--uui-color-selected); cursor: pointer; box-shadow: var(--uui-shadow-depth-1); }
.umb-input-slider input[type=range]::-moz-range-thumb { width: 18px; height: 18px; border: none; border-radius: 50%; background: var(--uui-color-selected); cursor: pointer; }
.umb-input-slider__val { font-size: 13px; font-family: var(--uui-font-monospace); color: var(--uui-color-text); min-width: 40px; text-align: right; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-input-slider-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-slider-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputSlider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  showValue = true,
  onChange,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-input-slider",
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange && onChange(Number(e.target.value))
  }), showValue && /*#__PURE__*/React.createElement("span", {
    className: "umb-input-slider__val"
  }, value, unit));
}
Object.assign(__ds_scope, { InputSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputSlider.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputToggle.jsx
try { (() => {
const CSS = `
.umb-input-toggle { display: inline-flex; align-items: center; gap: var(--uui-size-space-3); font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text); cursor: pointer; user-select: none; }
.umb-input-toggle__track { width: 38px; height: 22px; flex: none; border-radius: 22px; background: var(--uui-color-border-emphasis); position: relative; transition: background-color 140ms ease; }
.umb-input-toggle__thumb { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%; background: #fff; box-shadow: var(--uui-shadow-depth-1); transition: transform 140ms ease; }
.umb-input-toggle--on .umb-input-toggle__track { background: var(--uui-color-positive); }
.umb-input-toggle--on .umb-input-toggle__thumb { transform: translateX(16px); }
.umb-input-toggle__state { font-size: 13px; color: var(--uui-color-text-alt); min-width: 24px; }
.umb-input-toggle--disabled { cursor: default; opacity: 0.6; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-input-toggle-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-input-toggle-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function InputToggle({
  checked = false,
  label,
  showLabels = false,
  labelOn = 'On',
  labelOff = 'Off',
  disabled = false,
  onChange,
  style
}) {
  ensureStyles();
  const cls = ['umb-input-toggle', checked && 'umb-input-toggle--on', disabled && 'umb-input-toggle--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    style: style,
    onClick: () => !disabled && onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-input-toggle__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-input-toggle__thumb"
  })), showLabels && /*#__PURE__*/React.createElement("span", {
    className: "umb-input-toggle__state"
  }, checked ? labelOn : labelOff), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { InputToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputWithAlias.jsx
try { (() => {
const CSS = `
.umb-iwa { display: flex; flex-direction: column; gap: var(--uui-size-space-1); font-family: var(--uui-font-family); }
.umb-iwa__name {
	font-size: 16px; color: var(--uui-color-text); width: 100%; box-sizing: border-box;
	height: 38px; padding: 0 var(--uui-size-space-3);
	background: var(--uui-color-surface); border: 1px solid var(--uui-color-border); border-radius: 3px;
}
.umb-iwa__name:focus { outline: none; border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-iwa__aliasrow { display: inline-flex; align-items: center; gap: var(--uui-size-space-1); align-self: flex-start; }
.umb-iwa__alias {
	font-family: var(--uui-font-monospace); font-size: 12px; color: var(--uui-color-text-alt);
	border: none; background: none; padding: 2px var(--uui-size-space-2); border-radius: 3px; min-width: 80px;
}
.umb-iwa__alias:not([readonly]) { background: var(--uui-color-surface-alt); color: var(--uui-color-text); }
.umb-iwa__lock { border: none; background: none; cursor: pointer; color: var(--uui-color-text-alt); width: 22px; height: 22px; display: grid; place-items: center; border-radius: 3px; padding: 0; }
.umb-iwa__lock:hover { background: var(--uui-color-surface-alt); color: var(--uui-color-text); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-iwa-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-iwa-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function toAlias(name) {
  return (name || '').replace(/[^a-zA-Z0-9 ]/g, '').split(/\s+/).filter(Boolean).map((w, i) => i === 0 ? w.charAt(0).toLowerCase() + w.slice(1) : w.charAt(0).toUpperCase() + w.slice(1)).join('');
}
function InputWithAlias({
  name = '',
  alias,
  placeholder = 'Enter a name…',
  onChange,
  style
}) {
  ensureStyles();
  const [locked, setLocked] = React.useState(true); // locked = auto-derive
  const derived = locked ? toAlias(name) : alias ?? toAlias(name);
  const setName = v => onChange && onChange({
    name: v,
    alias: locked ? toAlias(v) : derived
  });
  const setAlias = v => onChange && onChange({
    name,
    alias: v
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-iwa",
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    className: "umb-iwa__name",
    value: name,
    placeholder: placeholder,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "umb-iwa__aliasrow"
  }, /*#__PURE__*/React.createElement("input", {
    className: "umb-iwa__alias",
    value: derived,
    readOnly: locked,
    onChange: e => setAlias(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "umb-iwa__lock",
    title: locked ? 'Edit alias' : 'Lock to name',
    onClick: () => setLocked(v => !v)
  }, locked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  })))));
}
Object.assign(__ds_scope, { InputWithAlias });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputWithAlias.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const CSS = `
.umb-select { position: relative; display: inline-block; width: 100%; font-family: var(--uui-font-family); }
.umb-select__control {
	display: flex; align-items: center; justify-content: space-between; gap: var(--uui-size-space-2);
	width: 100%; height: 36px; padding: 0 var(--uui-size-space-3);
	background: var(--uui-color-surface);
	border: 1px solid var(--uui-color-border);
	border-radius: 3px; font-size: 14px; color: var(--uui-color-text); cursor: pointer; box-sizing: border-box;
	transition: border-color 120ms ease;
}
.umb-select__control:hover { border-color: var(--uui-color-border-emphasis); }
.umb-select--open .umb-select__control { border-color: var(--uui-color-focus); box-shadow: 0 0 0 1px var(--uui-color-focus); }
.umb-select__chev { width: 16px; height: 16px; stroke: var(--uui-color-text-alt); transition: transform 120ms ease; flex: none; }
.umb-select--open .umb-select__chev { transform: rotate(180deg); }
.umb-select__menu {
	position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 20;
	background: var(--uui-color-surface);
	border: 1px solid var(--uui-color-border);
	border-radius: 6px; box-shadow: var(--uui-shadow-depth-3);
	padding: var(--uui-size-space-1); max-height: 240px; overflow: auto;
}
.umb-select__opt { padding: var(--uui-size-space-3) var(--uui-size-space-3); border-radius: 3px; font-size: 14px; color: var(--uui-color-text); cursor: pointer; }
.umb-select__opt:hover { background: var(--uui-color-surface-alt); }
.umb-select__opt--active { background: var(--uui-color-selected); color: var(--uui-color-selected-contrast); }
.umb-select__opt--active:hover { background: var(--uui-color-selected); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-select-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-select-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  options = [],
  value,
  placeholder = 'Select…',
  onChange,
  style
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const selected = norm.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-select', open && 'umb-select--open'].filter(Boolean).join(' '),
    style: style,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-select__control",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: selected ? 'var(--uui-color-text)' : 'var(--uui-color-text-alt)'
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    className: "umb-select__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "umb-select__menu"
  }, norm.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    className: ['umb-select__opt', o.value === value && 'umb-select__opt--active'].filter(Boolean).join(' '),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputCultureSelect.jsx
try { (() => {
// A representative slice of the cultures the backoffice ships with.
const CULTURES = [{
  value: 'en-US',
  label: 'English (United States)'
}, {
  value: 'en-GB',
  label: 'English (United Kingdom)'
}, {
  value: 'da-DK',
  label: 'Dansk (Danmark)'
}, {
  value: 'de-DE',
  label: 'Deutsch (Deutschland)'
}, {
  value: 'fr-FR',
  label: 'Français (France)'
}, {
  value: 'es-ES',
  label: 'Español (España)'
}, {
  value: 'nl-NL',
  label: 'Nederlands (Nederland)'
}, {
  value: 'sv-SE',
  label: 'Svenska (Sverige)'
}, {
  value: 'nb-NO',
  label: 'Norsk bokmål (Norge)'
}, {
  value: 'pt-BR',
  label: 'Português (Brasil)'
}];
function InputCultureSelect({
  value,
  cultures = CULTURES,
  placeholder = 'Select a culture…',
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Select, {
    value: value,
    options: cultures,
    placeholder: placeholder,
    onChange: onChange,
    style: style
  });
}
InputCultureSelect.CULTURES = CULTURES;
Object.assign(__ds_scope, { InputCultureSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputCultureSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const CSS = `
.umb-switch { display: inline-flex; align-items: center; gap: var(--uui-size-space-3); font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text); cursor: pointer; user-select: none; }
.umb-switch__track {
	width: 38px; height: 22px; flex: none; border-radius: 22px;
	background: var(--uui-color-border-emphasis);
	position: relative;
	transition: background-color 140ms ease;
}
.umb-switch__thumb {
	position: absolute; top: 2px; left: 2px;
	width: 18px; height: 18px; border-radius: 50%;
	background: #fff; box-shadow: var(--uui-shadow-depth-1);
	transition: transform 140ms ease;
}
.umb-switch--on .umb-switch__track { background: var(--uui-color-positive); }
.umb-switch--on .umb-switch__thumb { transform: translateX(16px); }
.umb-switch--disabled { cursor: default; color: var(--uui-color-disabled-contrast); }
.umb-switch--disabled .umb-switch__track { background: var(--uui-color-disabled-standalone); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-switch-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-switch-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  checked = false,
  label,
  disabled = false,
  onChange,
  style
}) {
  ensureStyles();
  const cls = ['umb-switch', checked && 'umb-switch--on', disabled && 'umb-switch--disabled'].filter(Boolean).join(' ');
  const toggle = () => {
    if (disabled) return;
    onChange && onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    style: style,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "umb-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/BodyLayout.jsx
try { (() => {
const CSS = `
.umb-body-layout { display: flex; flex-direction: column; width: 100%; height: 100%; background: var(--umb-body-layout-color-background, var(--uui-color-background)); box-sizing: border-box; }
.umb-body-layout__header {
	display: flex; align-items: center; justify-content: space-between; gap: var(--uui-size-space-4);
	width: 100%; min-height: var(--umb-header-layout-height); box-sizing: border-box;
	background: var(--uui-color-surface); border-bottom: 1px solid var(--uui-color-border);
	padding: 0 var(--uui-size-layout-1); z-index: 1;
}
.umb-body-layout__headline { font-size: 18px; font-weight: 700; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
.umb-body-layout__nav { margin-left: auto; display: flex; align-items: center; }
.umb-body-layout__main { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-layout-1); min-height: 0; }
.umb-body-layout--flush .umb-body-layout__main { padding: 0; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-body-layout-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-body-layout-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function BodyLayout({
  headline,
  header,
  navigation,
  footer,
  mainNoPadding = false,
  children,
  style
}) {
  ensureStyles();
  const showHeader = headline || header || navigation;
  return /*#__PURE__*/React.createElement("div", {
    className: ['umb-body-layout', mainNoPadding && 'umb-body-layout--flush'].filter(Boolean).join(' '),
    style: style
  }, showHeader && /*#__PURE__*/React.createElement("div", {
    className: "umb-body-layout__header"
  }, headline && /*#__PURE__*/React.createElement("h3", {
    className: "umb-body-layout__headline"
  }, headline), header, navigation && /*#__PURE__*/React.createElement("div", {
    className: "umb-body-layout__nav"
  }, navigation)), /*#__PURE__*/React.createElement("div", {
    className: "umb-body-layout__main"
  }, children), footer);
}
Object.assign(__ds_scope, { BodyLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/BodyLayout.jsx", error: String((e && e.message) || e) }); }

// components/layout/EntityFrame.jsx
try { (() => {
const CSS = `
.umb-entity-frame {
	position: relative; display: block;
	border: var(--umb-entity-frame-border-width, 2px) solid var(--umb-entity-frame-color, var(--uui-color-focus));
	border-radius: var(--uui-border-radius);
	background: var(--uui-color-surface);
	margin-top: 18px;
}
.umb-entity-frame__tab {
	position: absolute; top: 0; left: var(--uui-size-space-4); transform: translateY(-100%);
	display: inline-flex; align-items: center; gap: var(--uui-size-space-2);
	background: var(--umb-entity-frame-color, var(--uui-color-focus));
	color: var(--umb-entity-frame-contrast-color, var(--uui-color-selected-contrast));
	font-family: var(--uui-font-family); font-size: 12px; font-weight: 700;
	padding: var(--uui-size-2) var(--uui-size-3) var(--uui-size-1);
	border-radius: var(--uui-border-radius) var(--uui-border-radius) 0 0;
}
.umb-entity-frame__tab svg { width: 14px; height: 14px; }
.umb-entity-frame__body { padding: var(--uui-size-space-4); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-entity-frame-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-entity-frame-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function EntityFrame({
  label,
  icon,
  color,
  contrastColor,
  children,
  style
}) {
  ensureStyles();
  const vars = {};
  if (color) vars['--umb-entity-frame-color'] = color;
  if (contrastColor) vars['--umb-entity-frame-contrast-color'] = contrastColor;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-entity-frame",
    style: {
      ...vars,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "umb-entity-frame__tab"
  }, icon && /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }), label), /*#__PURE__*/React.createElement("div", {
    className: "umb-entity-frame__body"
  }, children));
}
Object.assign(__ds_scope, { EntityFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/EntityFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/FooterLayout.jsx
try { (() => {
const CSS = `
.umb-footer-layout {
	display: flex; align-items: center; gap: var(--uui-size-space-4);
	width: 100%; min-height: var(--umb-footer-layout-height); box-sizing: border-box;
	background: var(--uui-color-surface); border-top: 1px solid var(--uui-color-border);
	padding: 0 var(--uui-size-layout-1);
}
.umb-footer-layout__info { display: flex; align-items: center; gap: var(--uui-size-space-3); font-size: 13px; color: var(--uui-color-text-alt); min-width: 0; }
.umb-footer-layout__actions { margin-left: auto; display: flex; align-items: center; gap: var(--uui-size-space-3); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-footer-layout-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-footer-layout-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function FooterLayout({
  children,
  actions,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-footer-layout",
    style: style
  }, children && /*#__PURE__*/React.createElement("div", {
    className: "umb-footer-layout__info"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "umb-footer-layout__actions"
  }, actions));
}
Object.assign(__ds_scope, { FooterLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FooterLayout.jsx", error: String((e && e.message) || e) }); }

// components/layout/PopoverLayout.jsx
try { (() => {
const CSS = `
.umb-popover-layout {
	background: var(--uui-color-surface);
	border: 1px solid var(--uui-color-border);
	border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-3);
	box-sizing: border-box; overflow: hidden;
	min-width: var(--umb-popover-min-width, 200px);
	max-width: var(--umb-popover-max-width, 380px);
	font-family: var(--uui-font-family); color: var(--uui-color-text);
}
.umb-popover-layout__head { padding: var(--uui-size-space-3) var(--uui-size-space-4); border-bottom: 1px solid var(--uui-color-divider); font-size: 13px; font-weight: 700; }
.umb-popover-layout__body { padding: var(--uui-size-space-2); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-popover-layout-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-popover-layout-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function PopoverLayout({
  headline,
  children,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-popover-layout",
    style: style
  }, headline && /*#__PURE__*/React.createElement("div", {
    className: "umb-popover-layout__head"
  }, headline), /*#__PURE__*/React.createElement("div", {
    className: "umb-popover-layout__body"
  }, children));
}
Object.assign(__ds_scope, { PopoverLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PopoverLayout.jsx", error: String((e && e.message) || e) }); }

// components/actions/EntityActionsBundle.jsx
try { (() => {
const CSS = `
.umb-eab { display: inline-flex; align-items: center; gap: var(--uui-size-space-1); }
.umb-eab__btn {
	width: 32px; height: 32px; border: none; border-radius: 3px; cursor: pointer;
	background: transparent; color: var(--uui-color-interactive); display: grid; place-items: center;
	transition: background-color 100ms ease;
}
.umb-eab__btn:hover { background: var(--uui-color-surface-alt); }
.umb-eab__btn svg, .umb-eab__btn span { width: 18px; height: 18px; display: inline-flex; }
.umb-eab__more { background: transparent; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-eab-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-eab-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dots() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.7"
  }));
}
function EntityActionsBundle({
  actions = [],
  inlineCount = 1,
  align = 'end',
  onAction,
  style
}) {
  ensureStyles();
  const real = actions.filter(a => !a.separator);
  const inline = real.slice(0, inlineCount);
  const overflow = actions.slice(inline.length);
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-eab",
    style: style
  }, inline.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.alias || a.label,
    className: "umb-eab__btn",
    title: a.label,
    onClick: () => {
      a.onClick && a.onClick();
      onAction && onAction(a);
    }
  }, a.icon ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: a.icon
    }
  }) : a.label)), overflow.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
    align: align,
    trigger: /*#__PURE__*/React.createElement("button", {
      className: "umb-eab__btn umb-eab__more",
      title: "More actions"
    }, /*#__PURE__*/React.createElement(Dots, null))
  }, /*#__PURE__*/React.createElement(__ds_scope.PopoverLayout, null, /*#__PURE__*/React.createElement(__ds_scope.EntityActionList, {
    actions: overflow,
    onAction: onAction
  }))));
}
Object.assign(__ds_scope, { EntityActionsBundle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/EntityActionsBundle.jsx", error: String((e && e.message) || e) }); }

// components/layout/SplitPanel.jsx
try { (() => {
const CSS = `
.umb-split-panel { display: flex; width: 100%; height: 100%; overflow: hidden; }
.umb-split-panel__pane { overflow: auto; min-width: 0; }
.umb-split-panel__divider {
	flex: none; width: 6px; cursor: col-resize; background: var(--uui-color-divider-standalone);
	position: relative; transition: background-color 100ms ease;
}
.umb-split-panel__divider:hover, .umb-split-panel__divider--active { background: var(--uui-color-focus); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-split-panel-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-split-panel-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function SplitPanel({
  start,
  end,
  initial = 50,
  min = 15,
  max = 85,
  style
}) {
  ensureStyles();
  const [pct, setPct] = React.useState(initial);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);
  const onDown = () => {
    dragging.current = true;
    document.body.style.userSelect = 'none';
  };
  React.useEffect(() => {
    const onMove = e => {
      if (!dragging.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      let next = (e.clientX - rect.left) / rect.width * 100;
      next = Math.max(min, Math.min(max, next));
      setPct(next);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [min, max]);
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-split-panel",
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-split-panel__pane",
    style: {
      flex: `0 0 ${pct}%`
    }
  }, start), /*#__PURE__*/React.createElement("div", {
    className: "umb-split-panel__divider",
    onMouseDown: onDown
  }), /*#__PURE__*/React.createElement("div", {
    className: "umb-split-panel__pane",
    style: {
      flex: '1 1 auto'
    }
  }, end));
}
Object.assign(__ds_scope, { SplitPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SplitPanel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Stack.jsx
try { (() => {
const CSS = `
.umb-stack { display: flex; flex-direction: column; }
.umb-stack--default { gap: var(--uui-size-space-6); }
.umb-stack--compact { gap: var(--uui-size-space-4); }
.umb-stack--dividers > * { position: relative; }
.umb-stack--dividers > * + *::before {
	content: ''; position: absolute; top: calc(var(--uui-size-space-6) / -2);
	left: 0; right: 0; height: 1px; background: var(--uui-color-divider-standalone);
}
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-stack-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-stack-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Stack({
  look = 'default',
  dividers = false,
  children,
  style
}) {
  ensureStyles();
  const cls = ['umb-stack', `umb-stack--${look}`, dividers && 'umb-stack--dividers'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Stack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Stack.jsx", error: String((e && e.message) || e) }); }

// components/layout/WorkspaceFooter.jsx
try { (() => {
/**
 * Workspace footer — the action bar at the base of a workspace. Thin wrapper over
 * `FooterLayout` that keeps workspace semantics; put the primary Save/Publish on the
 * right via `actions`, contextual info on the left via `children`.
 */
function WorkspaceFooter({
  children,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.FooterLayout, {
    actions: actions,
    style: style
  }, children);
}
Object.assign(__ds_scope, { WorkspaceFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/WorkspaceFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MenuItem.jsx
try { (() => {
const CSS = `
.umb-menuitem {
	display: flex; align-items: center; gap: var(--uui-size-space-2);
	width: 100%; box-sizing: border-box;
	padding: var(--uui-size-space-1) var(--uui-size-space-3);
	min-height: 32px; border: none; background: none; cursor: pointer;
	font-family: var(--uui-font-family); font-size: 14px; color: var(--uui-color-text);
	text-align: left; border-radius: 3px; transition: background-color 100ms ease;
}
.umb-menuitem:hover { background: var(--uui-color-surface-alt); }
.umb-menuitem--active { background: var(--uui-color-current); color: var(--uui-color-current-contrast); font-weight: 700; }
.umb-menuitem--active:hover { background: var(--uui-color-current); }
.umb-menuitem__caret {
	width: 16px; height: 16px; flex: none; display: inline-flex; align-items: center; justify-content: center;
	color: var(--uui-color-text-alt); transition: transform 120ms ease; border-radius: 3px;
}
.umb-menuitem__caret--open { transform: rotate(90deg); }
.umb-menuitem__caret--hidden { visibility: hidden; }
.umb-menuitem__icon { width: 18px; height: 18px; flex: none; display: inline-flex; color: var(--uui-color-interactive); }
.umb-menuitem--active .umb-menuitem__icon { color: var(--uui-color-current-contrast); }
.umb-menuitem__label { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.umb-menuitem__children { padding-left: var(--uui-size-space-4); }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-menuitem-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-menuitem-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function MenuItem({
  label,
  icon,
  active = false,
  hasChildren = false,
  open = false,
  depth = 0,
  onToggle,
  onClick,
  children,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    className: ['umb-menuitem', active && 'umb-menuitem--active'].filter(Boolean).join(' '),
    style: {
      paddingLeft: `calc(var(--uui-size-space-3) + ${depth} * var(--uui-size-space-4))`
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: ['umb-menuitem__caret', open && 'umb-menuitem__caret--open', !hasChildren && 'umb-menuitem__caret--hidden'].filter(Boolean).join(' '),
    onClick: e => {
      e.stopPropagation();
      onToggle && onToggle();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))), icon && /*#__PURE__*/React.createElement("span", {
    className: "umb-menuitem__icon",
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "umb-menuitem__label"
  }, label)), open && children && /*#__PURE__*/React.createElement("div", {
    className: "umb-menuitem__children"
  }, children));
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionSidebarMenu.jsx
try { (() => {
const CSS = `
.umb-ssm { background: var(--uui-color-surface); display: flex; flex-direction: column; min-height: 0; }
.umb-ssm__head { padding: var(--uui-size-space-5) var(--uui-size-space-5) var(--uui-size-space-3); }
.umb-ssm__title { font-size: 18px; font-weight: 700; margin: 0; color: var(--uui-color-text); }
.umb-ssm__list { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-space-2) var(--uui-size-space-3); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-ssm-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-ssm-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Node({
  node,
  depth,
  activeId,
  expanded,
  onToggle,
  onSelect
}) {
  const hasChildren = node.children && node.children.length > 0;
  return /*#__PURE__*/React.createElement(__ds_scope.MenuItem, {
    label: node.name,
    icon: node.icon,
    active: activeId === node.id,
    hasChildren: hasChildren,
    open: !!expanded[node.id],
    depth: depth,
    onToggle: () => onToggle(node.id),
    onClick: () => onSelect(node)
  }, hasChildren && node.children.map(c => /*#__PURE__*/React.createElement(Node, {
    key: c.id,
    node: c,
    depth: depth + 1,
    activeId: activeId,
    expanded: expanded,
    onToggle: onToggle,
    onSelect: onSelect
  })));
}
function SectionSidebarMenu({
  headline,
  items = [],
  activeId,
  expanded = {},
  onToggle,
  onSelect,
  header,
  footer,
  style
}) {
  ensureStyles();
  const [exp, setExp] = React.useState(expanded);
  const isControlled = !!onToggle;
  const expState = isControlled ? expanded : exp;
  const toggle = isControlled ? onToggle : id => setExp(s => ({
    ...s,
    [id]: !s[id]
  }));
  return /*#__PURE__*/React.createElement("aside", {
    className: "umb-ssm",
    style: style
  }, headline && /*#__PURE__*/React.createElement("div", {
    className: "umb-ssm__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "umb-ssm__title"
  }, headline)), header, /*#__PURE__*/React.createElement("div", {
    className: "umb-ssm__list"
  }, items.map(node => /*#__PURE__*/React.createElement(Node, {
    key: node.id,
    node: node,
    depth: 0,
    activeId: activeId,
    expanded: expState,
    onToggle: toggle,
    onSelect: onSelect || (() => {})
  }))), footer);
}
Object.assign(__ds_scope, { SectionSidebarMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionSidebarMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionSidebarMenuWithEntityActions.jsx
try { (() => {
const CSS = `
.umb-ssmea { background: var(--uui-color-surface); display: flex; flex-direction: column; min-height: 0; }
.umb-ssmea__head { padding: var(--uui-size-space-5) var(--uui-size-space-5) var(--uui-size-space-3); }
.umb-ssmea__title { font-size: 18px; font-weight: 700; margin: 0; color: var(--uui-color-text); }
.umb-ssmea__list { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-space-2) var(--uui-size-space-3); }
.umb-ssmea__row { position: relative; }
.umb-ssmea__actions {
	position: absolute; top: 50%; right: var(--uui-size-space-2); transform: translateY(-50%);
	width: 26px; height: 26px; border: none; border-radius: 3px; cursor: pointer;
	background: transparent; color: var(--uui-color-text-alt); display: none; place-items: center;
}
.umb-ssmea__row:hover > .umb-ssmea__actions, .umb-ssmea__actions--open { display: grid; }
.umb-ssmea__actions:hover { background: var(--uui-color-surface-emphasis); color: var(--uui-color-text); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-ssmea-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-ssmea-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dots() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  }));
}
function Node({
  node,
  depth,
  activeId,
  expanded,
  onToggle,
  onSelect,
  onEntityAction
}) {
  const hasChildren = node.children && node.children.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-ssmea__row"
  }, /*#__PURE__*/React.createElement(__ds_scope.MenuItem, {
    label: node.name,
    icon: node.icon,
    active: activeId === node.id,
    hasChildren: hasChildren,
    open: !!expanded[node.id],
    depth: depth,
    onToggle: () => onToggle(node.id),
    onClick: () => onSelect(node)
  }, hasChildren && node.children.map(c => /*#__PURE__*/React.createElement(Node, {
    key: c.id,
    node: c,
    depth: depth + 1,
    activeId: activeId,
    expanded: expanded,
    onToggle: onToggle,
    onSelect: onSelect,
    onEntityAction: onEntityAction
  }))), /*#__PURE__*/React.createElement("button", {
    className: "umb-ssmea__actions",
    title: "Actions",
    onClick: e => {
      e.stopPropagation();
      onEntityAction && onEntityAction(node, e);
    }
  }, /*#__PURE__*/React.createElement(Dots, null)));
}
function SectionSidebarMenuWithEntityActions({
  headline,
  items = [],
  activeId,
  expanded = {},
  onToggle,
  onSelect,
  onEntityAction,
  header,
  footer,
  style
}) {
  ensureStyles();
  const [exp, setExp] = React.useState(expanded);
  const isControlled = !!onToggle;
  const expState = isControlled ? expanded : exp;
  const toggle = isControlled ? onToggle : id => setExp(s => ({
    ...s,
    [id]: !s[id]
  }));
  return /*#__PURE__*/React.createElement("aside", {
    className: "umb-ssmea",
    style: style
  }, headline && /*#__PURE__*/React.createElement("div", {
    className: "umb-ssmea__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "umb-ssmea__title"
  }, headline)), header, /*#__PURE__*/React.createElement("div", {
    className: "umb-ssmea__list"
  }, items.map(node => /*#__PURE__*/React.createElement(Node, {
    key: node.id,
    node: node,
    depth: 0,
    activeId: activeId,
    expanded: expState,
    onToggle: toggle,
    onSelect: onSelect || (() => {}),
    onEntityAction: onEntityAction
  }))), footer);
}
Object.assign(__ds_scope, { SectionSidebarMenuWithEntityActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionSidebarMenuWithEntityActions.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabGroup.jsx
try { (() => {
const CSS = `
.umb-tabgroup { display: flex; align-items: stretch; gap: 0; font-family: var(--uui-font-family); }
.umb-tab {
	position: relative; display: inline-flex; align-items: center; gap: var(--uui-size-space-2);
	height: var(--umb-tab-height, 48px); padding: 0 var(--uui-size-space-5);
	font-size: 14px; color: var(--umb-tab-color, var(--uui-color-text-alt));
	background: none; border: none; cursor: pointer; white-space: nowrap;
	transition: color 100ms ease;
}
.umb-tab:hover { color: var(--umb-tab-color-hover, var(--uui-color-interactive)); }
.umb-tab--active { color: var(--umb-tab-color-active, var(--uui-color-interactive)); font-weight: 700; }
.umb-tab--active::after {
	content: ''; position: absolute; left: var(--uui-size-space-4); right: var(--uui-size-space-4); bottom: 0;
	height: 3px; border-radius: 3px 3px 0 0; background: var(--umb-tab-indicator, var(--uui-color-current-standalone));
}
.umb-tab__icon { width: 16px; height: 16px; display: inline-flex; }
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-tabgroup-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-tabgroup-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function TabGroup({
  tabs = [],
  active,
  onChange,
  style
}) {
  ensureStyles();
  const norm = tabs.map(t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t);
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-tabgroup",
    style: style
  }, norm.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    className: ['umb-tab', t.value === active && 'umb-tab--active'].filter(Boolean).join(' '),
    onClick: () => onChange && onChange(t.value)
  }, t.icon && /*#__PURE__*/React.createElement("span", {
    className: "umb-tab__icon",
    dangerouslySetInnerHTML: {
      __html: t.icon
    }
  }), t.label)));
}
Object.assign(__ds_scope, { TabGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabGroup.jsx", error: String((e && e.message) || e) }); }

// components/layout/WorkspaceEditor.jsx
try { (() => {
const CSS = `
.umb-ws-editor { display: flex; flex-direction: column; width: 100%; height: 100%; background: var(--uui-color-background); box-sizing: border-box; }
.umb-ws-editor__header { background: var(--uui-color-surface); border-bottom: 1px solid var(--uui-color-border); padding: var(--uui-size-space-4) var(--uui-size-layout-1) 0; }
.umb-ws-editor__namerow { display: flex; align-items: center; gap: var(--uui-size-space-4); }
.umb-ws-editor__icon { width: 28px; height: 28px; color: var(--uui-color-interactive); flex: none; display: inline-flex; }
.umb-ws-editor__name {
	font-family: var(--uui-font-family); font-size: 24px; font-weight: 400; color: var(--uui-color-text);
	border: none; background: none; outline: none; flex: 1 1 auto; padding: 4px 0; min-width: 0;
	border-bottom: 2px solid transparent; transition: border-color 120ms ease;
}
.umb-ws-editor__name:hover { border-bottom-color: var(--uui-color-divider-standalone); }
.umb-ws-editor__name:focus { border-bottom-color: var(--uui-color-focus); }
.umb-ws-editor__headextra { display: flex; align-items: center; gap: var(--uui-size-space-3); flex: none; }
.umb-ws-editor__tabs { margin-top: var(--uui-size-space-3); }
.umb-ws-editor__body { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-layout-1); min-height: 0; }
.umb-ws-editor__bodyinner { max-width: var(--umb-ws-max-width, 1080px); margin: 0 auto; display: flex; flex-direction: column; gap: var(--uui-size-layout-1); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-ws-editor-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-ws-editor-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function WorkspaceEditor({
  name,
  onNameChange,
  icon,
  headerActions,
  meta,
  views,
  activeView,
  onViewChange,
  footer,
  children,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__namerow"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "umb-ws-editor__icon",
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }), onNameChange ? /*#__PURE__*/React.createElement("input", {
    className: "umb-ws-editor__name",
    value: name,
    onChange: e => onNameChange(e.target.value)
  }) : /*#__PURE__*/React.createElement("span", {
    className: "umb-ws-editor__name"
  }, name), headerActions && /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__headextra"
  }, headerActions)), meta && /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__headextra",
    style: {
      margin: 'var(--uui-size-space-3) 0'
    }
  }, meta), views && views.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__tabs"
  }, /*#__PURE__*/React.createElement(__ds_scope.TabGroup, {
    tabs: views,
    active: activeView,
    onChange: onViewChange
  }))), /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-ws-editor__bodyinner"
  }, children)), footer);
}
Object.assign(__ds_scope, { WorkspaceEditor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/WorkspaceEditor.jsx", error: String((e && e.message) || e) }); }

// components/property/PropertyLayout.jsx
try { (() => {
const CSS = `
.umb-property {
	display: grid;
	grid-template-columns: var(--umb-property-label-width, 200px) 1fr;
	gap: var(--uui-size-space-6);
	padding: var(--uui-size-layout-1) 0;
	border-bottom: 1px solid var(--uui-color-divider);
	font-family: var(--uui-font-family);
}
.umb-property:last-child { border-bottom: none; }
.umb-property__side { min-width: 0; }
.umb-property__label { font-size: 15px; font-weight: 700; color: var(--uui-color-text); margin: 0 0 var(--uui-size-space-1); display: flex; align-items: center; gap: 6px; }
.umb-property__required { color: var(--uui-color-danger); }
.umb-property__alias { font-family: var(--uui-font-monospace); font-size: 12px; color: var(--uui-color-text-alt); margin: 0 0 var(--uui-size-space-2); }
.umb-property__desc { font-size: 13px; line-height: 18px; color: var(--uui-color-text-alt); margin: 0; }
.umb-property__editor { min-width: 0; }
@media (max-width: 640px) {
	.umb-property { grid-template-columns: 1fr; gap: var(--uui-size-space-3); }
}
`;
function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('umb-property-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-property-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function PropertyLayout({
  label,
  alias,
  description,
  required = false,
  children,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-property",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-property__side"
  }, /*#__PURE__*/React.createElement("p", {
    className: "umb-property__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "umb-property__required",
    title: "Required"
  }, "*")), alias && /*#__PURE__*/React.createElement("p", {
    className: "umb-property__alias"
  }, alias), description && /*#__PURE__*/React.createElement("p", {
    className: "umb-property__desc"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "umb-property__editor"
  }, children));
}
Object.assign(__ds_scope, { PropertyLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/PropertyLayout.jsx", error: String((e && e.message) || e) }); }

// components/property/Property.jsx
try { (() => {
const CSS = `
.umb-property-error { display: flex; align-items: center; gap: var(--uui-size-space-2); margin-top: var(--uui-size-space-2); color: var(--uui-color-invalid); font-size: 13px; }
.umb-property-error svg { width: 15px; height: 15px; flex: none; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-property-error-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-property-error-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * A full property — composes PropertyLayout with the editor and any validation message.
 * In the real backoffice this is the runtime that pairs a property-type with its
 * property-editor-ui; here it's the layout + editor + error binding.
 */
function Property({
  label,
  alias,
  description,
  required = false,
  error,
  children,
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement(__ds_scope.PropertyLayout, {
    label: label,
    alias: alias,
    description: description,
    required: required,
    style: style
  }, children, error && /*#__PURE__*/React.createElement("div", {
    className: "umb-property-error"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  })), /*#__PURE__*/React.createElement("span", null, error)));
}
Object.assign(__ds_scope, { Property });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/Property.jsx", error: String((e && e.message) || e) }); }

// components/symbol/Icon.jsx
try { (() => {
// In-memory cache so repeated icons don't re-fetch.
const _cache = {};
function resolveBase() {
  if (typeof window !== 'undefined' && window.__UMB_ICON_BASE__) return window.__UMB_ICON_BASE__;
  return 'assets/icons';
}

/**
 * Renders a backoffice registry icon. Icons are Lucide-style line SVGs using
 * `currentColor`, so set `color` on this element (or an ancestor) to recolour.
 */
function Icon({
  name,
  size = 18,
  color,
  style,
  title
}) {
  const [svg, setSvg] = React.useState(_cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (!name) return;
    if (_cache[name]) {
      setSvg(_cache[name]);
      return;
    }
    const file = name.startsWith('icon-') ? name : `icon-${name}`;
    fetch(`${resolveBase()}/${file}.svg`).then(r => r.ok ? r.text() : '').then(t => {
      if (alive && t) {
        _cache[name] = t;
        setSvg(t);
      }
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": title || name,
    title: title,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: color,
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: svg ? {
      __html: svg.replace('<svg', `<svg width="100%" height="100%"`)
    } : undefined
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/symbol/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/IconPickerModal.jsx
try { (() => {
const DEFAULT_ICONS = ['document', 'folder', 'picture', 'settings', 'search', 'add', 'trash', 'edit', 'user', 'users', 'globe', 'home', 'info', 'check', 'alert', 'time', 'arrow-right', 'arrow-down', 'out', 'help', 'bell', 'sort', 'filter', 'grid', 'list', 'tag', 'lock', 'favorite', 'link', 'undo', 'wand', 'key', 'cloud', 'brackets', 'navigation', 'circle-dotted'];
const CSS = `
.umb-iconpicker__backdrop { position: fixed; inset: 0; z-index: 100; background: rgba(27,38,79,0.45); display: grid; place-items: center; animation: umb-ip-fade 140ms ease; }
@keyframes umb-ip-fade { from { opacity: 0; } to { opacity: 1; } }
.umb-iconpicker {
	width: 560px; max-width: calc(100vw - 32px);
	background: var(--uui-color-surface); border-radius: var(--uui-border-radius);
	box-shadow: var(--uui-shadow-depth-5); font-family: var(--uui-font-family); color: var(--uui-color-text);
	padding: var(--uui-size-space-6); box-sizing: border-box; animation: umb-ip-rise 160ms ease;
}
@keyframes umb-ip-rise { from { transform: translateY(8px); opacity: 0; } to { transform: none; opacity: 1; } }
.umb-iconpicker__title { font-size: 20px; font-weight: 700; margin: 0 0 var(--uui-size-space-4); }
.umb-iconpicker__grid {
	display: grid; grid-template-columns: repeat(8, 1fr); gap: var(--uui-size-space-2);
	margin-top: var(--uui-size-space-4); max-height: 260px; overflow: auto;
}
.umb-iconpicker__cell {
	aspect-ratio: 1; border: 1px solid transparent; border-radius: var(--uui-border-radius-1);
	display: grid; place-items: center; cursor: pointer; color: var(--uui-color-interactive);
	background: var(--uui-color-surface-alt);
}
.umb-iconpicker__cell:hover { border-color: var(--uui-color-border-emphasis); }
.umb-iconpicker__cell--sel { background: var(--uui-color-selected); color: var(--uui-color-selected-contrast); border-color: var(--uui-color-selected); }
.umb-iconpicker__actions { display: flex; justify-content: flex-end; gap: var(--uui-size-space-3); margin-top: var(--uui-size-space-6); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById('umb-iconpicker-styles')) return;
  const el = document.createElement('style');
  el.id = 'umb-iconpicker-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconPickerModal({
  open = true,
  icons = DEFAULT_ICONS,
  value,
  onSelect,
  onCancel
}) {
  ensureStyles();
  const [query, setQuery] = React.useState('');
  const [picked, setPicked] = React.useState(value);
  React.useEffect(() => {
    setPicked(value);
  }, [value, open]);
  if (!open) return null;
  const list = icons.filter(n => n.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "umb-iconpicker__backdrop",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "umb-iconpicker",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h2", {
    className: "umb-iconpicker__title"
  }, "Select icon"), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "search",
    placeholder: "Search",
    value: query,
    onChange: e => setQuery(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "umb-iconpicker__grid"
  }, list.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: ['umb-iconpicker__cell', n === picked && 'umb-iconpicker__cell--sel'].filter(Boolean).join(' '),
    title: n,
    onClick: () => setPicked(n)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n,
    size: 22,
    color: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "umb-iconpicker__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    look: "default",
    label: "Cancel",
    onClick: onCancel
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    look: "primary",
    color: "default",
    label: "Choose",
    onClick: () => onSelect && onSelect(picked)
  }))));
}
Object.assign(__ds_scope, { IconPickerModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/IconPickerModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/Collection.jsx
try { (() => {
// Collection view — list-view table with toolbar and bulk-selection bar.
const CNS = window.UmbracoBackofficeDesignSystem_667d97;
const collectionStyles = `
.kit-coll { flex: 1 1 auto; display: flex; flex-direction: column; min-width: 0; background: var(--uui-color-background); }
.kit-coll__header { background: var(--uui-color-surface); border-bottom: 1px solid var(--uui-color-border); padding: var(--uui-size-space-4) var(--uui-size-layout-1); }
.kit-coll__title { font-size: 26px; font-weight: 400; margin: 0 0 var(--uui-size-space-4); color: var(--uui-color-text); }
.kit-coll__toolbar { display: flex; align-items: center; gap: var(--uui-size-space-3); }
.kit-coll__search { flex: 1 1 auto; max-width: 320px; }
.kit-coll__spacer { flex: 1 1 auto; }
.kit-coll__body { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-layout-1); }
.kit-coll__selbar {
	display: flex; align-items: center; gap: var(--uui-size-space-4);
	background: var(--uui-color-selected); color: var(--uui-color-selected-contrast);
	padding: var(--uui-size-space-3) var(--uui-size-layout-1);
}
.kit-coll__selbar .kit-coll__selcount { font-weight: 700; margin-right: auto; }
.kit-coll__selbar button { background: rgba(255,255,255,0.16); color: #fff; border: none; border-radius: 3px; height: 30px; padding: 0 12px; cursor: pointer; font-family: var(--uui-font-family); font-size: 13px; }
.kit-coll__selbar button:hover { background: rgba(255,255,255,0.26); }
`;
function injectCollectionStyles() {
  if (document.getElementById('kit-coll-styles')) return;
  const el = document.createElement('style');
  el.id = 'kit-coll-styles';
  el.textContent = collectionStyles;
  document.head.appendChild(el);
}
const STATE_TAG = {
  published: /*#__PURE__*/React.createElement(CNS.Tag, {
    color: "positive"
  }, "Published"),
  draft: /*#__PURE__*/React.createElement(CNS.Tag, null, "Draft"),
  pending: /*#__PURE__*/React.createElement(CNS.Tag, {
    color: "warning",
    look: "secondary"
  }, "Pending")
};
function Collection({
  collection,
  icons,
  onOpen,
  onBulkDelete
}) {
  injectCollectionStyles();
  const [sel, setSel] = React.useState([]);
  const [sort, setSort] = React.useState('name');
  const [desc, setDesc] = React.useState(false);
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    setSel([]);
    setQuery('');
  }, [collection.title]);
  const columns = [{
    name: 'Name',
    alias: 'name',
    allowSorting: true
  }, {
    name: 'Status',
    alias: 'state'
  }, {
    name: 'Author',
    alias: 'author'
  }, {
    name: 'Last edited',
    alias: 'updated',
    align: 'right',
    allowSorting: true
  }];
  let rows = collection.rows.filter(r => r.name.toLowerCase().includes(query.toLowerCase()));
  rows = [...rows].sort((a, b) => {
    const av = (a[sort] || '').toString().toLowerCase();
    const bv = (b[sort] || '').toString().toLowerCase();
    return (av < bv ? -1 : av > bv ? 1 : 0) * (desc ? -1 : 1);
  });
  const items = rows.map(r => ({
    id: r.id,
    icon: icons[r.icon],
    data: [{
      columnAlias: 'name',
      value: /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          onOpen(r.id);
        },
        style: {
          color: 'inherit',
          textDecoration: 'none',
          fontWeight: 700
        }
      }, r.name)
    }, {
      columnAlias: 'state',
      value: STATE_TAG[r.state]
    }, {
      columnAlias: 'author',
      value: r.author
    }, {
      columnAlias: 'updated',
      value: r.updated
    }]
  }));
  const onSort = a => {
    if (a === sort) setDesc(!desc);else {
      setSort(a);
      setDesc(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-coll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__header"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "kit-coll__title"
  }, collection.title), /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__search"
  }, /*#__PURE__*/React.createElement(CNS.Input, {
    type: "search",
    placeholder: "Search",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__spacer"
  }), /*#__PURE__*/React.createElement(CNS.Button, {
    look: "default",
    compact: true,
    label: "Sort"
  }), /*#__PURE__*/React.createElement(CNS.Button, {
    look: "primary",
    color: "default",
    label: "Create",
    onClick: () => onOpen(collection.rows[0] && collection.rows[0].id)
  }))), sel.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__selbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-coll__selcount"
  }, sel.length, " selected"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onBulkDelete(sel, () => setSel([]))
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel([])
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "kit-coll__body"
  }, /*#__PURE__*/React.createElement(CNS.Box, {
    noPadding: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(CNS.Table, {
    columns: columns,
    items: items,
    config: {
      allowSelection: true
    },
    selection: sel,
    onSelectionChange: setSel,
    sortColumn: sort,
    sortDesc: desc,
    onSort: onSort
  }))));
}
window.KitCollection = Collection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/Collection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/Header.jsx
try { (() => {
// Backoffice top header — navy bar: logo flag, section tabs, header apps.
const {
  Avatar,
  Badge,
  Icon
} = window.UmbracoBackofficeDesignSystem_667d97;
const headerStyles = `
.kit-header {
	height: 70px; flex: none;
	display: flex; align-items: center; gap: var(--uui-size-space-5);
	padding: 0 var(--uui-size-space-5);
	background: var(--uui-color-header-surface);
	color: var(--uui-color-header-contrast);
}
.kit-header__logo { display: flex; align-items: center; }
.kit-header__logo img { height: 30px; display: block; }
.kit-header__sections { flex: 1 1 auto; display: flex; align-items: stretch; height: 100%; gap: 0; }
.kit-sectiontab {
	position: relative; height: 100%; padding: 0 var(--uui-size-space-5);
	display: inline-flex; align-items: center; font-size: 15px;
	color: var(--uui-color-header-contrast); background: none; border: none; cursor: pointer; white-space: nowrap;
	transition: color 100ms ease;
}
.kit-sectiontab:hover { color: var(--uui-color-header-contrast-emphasis); }
.kit-sectiontab--active { color: var(--uui-color-header-contrast-emphasis); font-weight: 700; }
.kit-sectiontab--active::after { content:''; position:absolute; left:var(--uui-size-space-5); right:var(--uui-size-space-5); bottom:0; height:3px; background:#fff; border-radius:3px 3px 0 0; }
.kit-header__apps { display: flex; align-items: center; gap: var(--uui-size-space-4); }
.kit-header__btn {
	width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
	background: transparent; color: var(--uui-color-header-contrast);
	display: grid; place-items: center; position: relative;
	transition: background-color 100ms ease, color 100ms ease;
}
.kit-header__btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
`;
function injectHeaderStyles() {
  if (document.getElementById('kit-header-styles')) return;
  const el = document.createElement('style');
  el.id = 'kit-header-styles';
  el.textContent = headerStyles;
  document.head.appendChild(el);
}
function Header({
  sections,
  active,
  onSection
}) {
  injectHeaderStyles();
  return /*#__PURE__*/React.createElement("header", {
    className: "kit-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-header__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/favicon.svg",
    alt: "Umbraco",
    style: {
      height: 34,
      filter: 'brightness(0) invert(1)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "kit-header__sections"
  }, sections.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.alias,
    className: ['kit-sectiontab', s.alias === active && 'kit-sectiontab--active'].filter(Boolean).join(' '),
    onClick: () => onSection(s.alias)
  }, s.label))), /*#__PURE__*/React.createElement("div", {
    className: "kit-header__apps"
  }, /*#__PURE__*/React.createElement("button", {
    className: "kit-header__btn",
    title: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("button", {
    className: "kit-header__btn",
    title: "Help"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "help",
    size: 20,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("button", {
    className: "kit-header__btn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement(Badge, {
    attached: true,
    dot: true,
    color: "default"
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Alice Brown",
    size: "m"
  })));
}
window.KitHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/Sidebar.jsx
try { (() => {
// Section sidebar — section header, content tree, recycle bin.
const {
  MenuItem,
  Input
} = window.UmbracoBackofficeDesignSystem_667d97;
const sidebarStyles = `
.kit-sidebar {
	width: var(--umb-section-sidebar-width); flex: none;
	background: var(--uui-color-surface);
	border-right: 1px solid var(--uui-color-border);
	display: flex; flex-direction: column; overflow: hidden;
}
.kit-sidebar__head { padding: var(--uui-size-space-5) var(--uui-size-space-5) var(--uui-size-space-3); }
.kit-sidebar__title { font-size: 18px; font-weight: 700; margin: 0 0 var(--uui-size-space-4); color: var(--uui-color-text); }
.kit-sidebar__tree { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-space-2) var(--uui-size-space-3); }
.kit-sidebar__foot { border-top: 1px solid var(--uui-color-divider-standalone); padding: var(--uui-size-space-2) var(--uui-size-space-3); }
`;
function injectSidebarStyles() {
  if (document.getElementById('kit-sidebar-styles')) return;
  const el = document.createElement('style');
  el.id = 'kit-sidebar-styles';
  el.textContent = sidebarStyles;
  document.head.appendChild(el);
}
function TreeNode({
  node,
  icons,
  depth,
  activeId,
  expanded,
  onToggle,
  onSelect
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isOpen = !!expanded[node.id];
  return /*#__PURE__*/React.createElement(MenuItem, {
    label: node.name,
    icon: icons[node.icon],
    active: activeId === node.id,
    hasChildren: hasChildren,
    open: isOpen,
    depth: depth,
    onToggle: () => onToggle(node.id),
    onClick: () => onSelect(node)
  }, hasChildren && node.children.map(c => /*#__PURE__*/React.createElement(TreeNode, {
    key: c.id,
    node: c,
    icons: icons,
    depth: depth + 1,
    activeId: activeId,
    expanded: expanded,
    onToggle: onToggle,
    onSelect: onSelect
  })));
}
function Sidebar({
  title,
  tree,
  icons,
  activeId,
  expanded,
  onToggle,
  onSelect
}) {
  injectSidebarStyles();
  return /*#__PURE__*/React.createElement("aside", {
    className: "kit-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-sidebar__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "kit-sidebar__title"
  }, title), /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-sidebar__tree"
  }, tree.map(node => /*#__PURE__*/React.createElement(TreeNode, {
    key: node.id,
    node: node,
    icons: icons,
    depth: 0,
    activeId: activeId,
    expanded: expanded,
    onToggle: onToggle,
    onSelect: onSelect
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-sidebar__foot"
  }, /*#__PURE__*/React.createElement(MenuItem, {
    label: "Recycle Bin",
    icon: icons.trash,
    onClick: () => onSelect({
      id: 'recycle-bin',
      name: 'Recycle Bin',
      recycleBin: true
    }),
    active: activeId === 'recycle-bin'
  })));
}
window.KitSidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/Workspace.jsx
try { (() => {
// Document workspace — editable name, Content/Info tabs, property editors, footer actions.
const WNS = window.UmbracoBackofficeDesignSystem_667d97;
const workspaceStyles = `
.kit-ws { flex: 1 1 auto; display: flex; flex-direction: column; min-width: 0; background: var(--uui-color-background); }
.kit-ws__header { background: var(--uui-color-surface); border-bottom: 1px solid var(--uui-color-border); padding: var(--uui-size-space-4) var(--uui-size-layout-1) 0; }
.kit-ws__namerow { display: flex; align-items: center; gap: var(--uui-size-space-4); margin-bottom: var(--uui-size-space-4); }
.kit-ws__icon { width: 30px; height: 30px; color: var(--uui-color-interactive); flex: none; }
.kit-ws__name {
	font-family: var(--uui-font-family); font-size: 26px; font-weight: 400; color: var(--uui-color-text);
	border: none; background: none; outline: none; flex: 1 1 auto; padding: 4px 0; min-width: 0;
	border-bottom: 2px solid transparent; transition: border-color 120ms ease;
}
.kit-ws__name:hover { border-bottom-color: var(--uui-color-divider-standalone); }
.kit-ws__name:focus { border-bottom-color: var(--uui-color-focus); }
.kit-ws__meta { display: flex; align-items: center; gap: var(--uui-size-space-3); font-size: 13px; color: var(--uui-color-text-alt); }
.kit-ws__body { flex: 1 1 auto; overflow: auto; padding: var(--uui-size-layout-1); display: flex; flex-direction: column; gap: var(--uui-size-layout-1); }
.kit-ws__bodyinner { max-width: 1080px; width: 100%; margin: 0 auto; display: flex; flex-direction: column; gap: var(--uui-size-layout-1); }
.kit-ws__footer {
	height: 54px; flex: none; background: var(--uui-color-surface); border-top: 1px solid var(--uui-color-border);
	display: flex; align-items: center; justify-content: flex-end; gap: var(--uui-size-space-3);
	padding: 0 var(--uui-size-layout-1);
}
.kit-ws__footstatus { margin-right: auto; font-size: 13px; color: var(--uui-color-text-alt); display: flex; align-items: center; gap: 6px; }

.kit-rte { border: 1px solid var(--uui-color-border); border-radius: 3px; overflow: hidden; }
.kit-rte__bar { display: flex; align-items: center; gap: 2px; padding: 4px 6px; border-bottom: 1px solid var(--uui-color-divider-standalone); background: var(--uui-color-surface-alt); }
.kit-rte__btn { width: 28px; height: 28px; border: none; background: none; border-radius: 3px; cursor: pointer; color: var(--uui-color-text-alt); font-size: 14px; display: grid; place-items: center; }
.kit-rte__btn:hover { background: var(--uui-color-surface-emphasis); color: var(--uui-color-text); }
.kit-rte__btn b, .kit-rte__btn i, .kit-rte__btn u { font-size: 15px; }
.kit-rte__content { padding: var(--uui-size-space-4); min-height: 90px; font-size: 14px; line-height: 21px; color: var(--uui-color-text); outline: none; }
.kit-rte__content:focus { box-shadow: inset 0 0 0 1px var(--uui-color-focus); }

.kit-media { border: 1px dashed var(--uui-color-divider-emphasis); border-radius: var(--uui-border-radius); padding: var(--uui-size-layout-1); text-align: center; color: var(--uui-color-text-alt); background: var(--uui-color-surface); }

.kit-info { display: grid; grid-template-columns: 160px 1fr; gap: var(--uui-size-space-4) var(--uui-size-space-6); font-size: 14px; }
.kit-info dt { color: var(--uui-color-text-alt); }
.kit-info dd { margin: 0; color: var(--uui-color-text); font-weight: 700; }
`;
function injectWorkspaceStyles() {
  if (document.getElementById('kit-ws-styles')) return;
  const el = document.createElement('style');
  el.id = 'kit-ws-styles';
  el.textContent = workspaceStyles;
  document.head.appendChild(el);
}
function Rte({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-rte"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-rte__bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "kit-rte__btn"
  }, /*#__PURE__*/React.createElement("b", null, "B")), /*#__PURE__*/React.createElement("button", {
    className: "kit-rte__btn"
  }, /*#__PURE__*/React.createElement("i", null, "I")), /*#__PURE__*/React.createElement("button", {
    className: "kit-rte__btn"
  }, /*#__PURE__*/React.createElement("u", null, "U")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--uui-color-divider-emphasis)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "kit-rte__btn"
  }, /*#__PURE__*/React.createElement(WNS.Icon, {
    name: "list",
    size: 16,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("button", {
    className: "kit-rte__btn"
  }, /*#__PURE__*/React.createElement(WNS.Icon, {
    name: "link",
    size: 16,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-rte__content",
    contentEditable: true,
    suppressContentEditableWarning: true
  }, value));
}
function Editor({
  item,
  onChange
}) {
  if (item.type === 'toggle') return /*#__PURE__*/React.createElement(WNS.Switch, {
    checked: !!item.value,
    onChange: v => onChange(item.alias, v)
  });
  if (item.type === 'rte') return /*#__PURE__*/React.createElement(Rte, {
    value: item.value
  });
  if (item.type === 'media') {
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-media"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, "Drag an image here, or"), /*#__PURE__*/React.createElement(WNS.Button, {
      look: "placeholder",
      label: "Upload"
    }));
  }
  return /*#__PURE__*/React.createElement(WNS.Input, {
    value: item.value,
    onChange: e => onChange(item.alias, e.target.value)
  });
}
const STATE_TAG = {
  published: /*#__PURE__*/React.createElement(WNS.Tag, {
    color: "positive"
  }, "Published"),
  draft: /*#__PURE__*/React.createElement(WNS.Tag, null, "Draft"),
  pending: /*#__PURE__*/React.createElement(WNS.Tag, {
    color: "warning",
    look: "secondary"
  }, "Pending")
};
function Workspace({
  doc,
  icons,
  onSave,
  onDelete
}) {
  injectWorkspaceStyles();
  const [tab, setTab] = React.useState('content');
  const [name, setName] = React.useState(doc.name);
  const [values, setValues] = React.useState({});
  React.useEffect(() => {
    setName(doc.name);
    setValues({});
    setTab('content');
  }, [doc.id]);
  const getVal = it => it.alias in values ? values[it.alias] : it.value;
  const onChange = (alias, v) => setValues(s => ({
    ...s,
    [alias]: v
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-ws"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__namerow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-ws__icon",
    dangerouslySetInnerHTML: {
      __html: icons[doc.icon] || ''
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "kit-ws__name",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__meta"
  }, STATE_TAG[doc.state], /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Updated ", doc.updated, " by ", doc.author)), /*#__PURE__*/React.createElement(WNS.TabGroup, {
    tabs: [{
      value: 'content',
      label: 'Content'
    }, {
      value: 'info',
      label: 'Info'
    }],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__bodyinner"
  }, tab === 'content' && doc.properties.map(grp => /*#__PURE__*/React.createElement(WNS.Box, {
    key: grp.group,
    headline: grp.group,
    noPadding: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--uui-size-space-5)'
    }
  }, grp.items.map(it => /*#__PURE__*/React.createElement(WNS.PropertyLayout, {
    key: it.alias,
    label: it.label,
    alias: it.alias,
    description: it.desc,
    required: it.required
  }, /*#__PURE__*/React.createElement(Editor, {
    item: {
      ...it,
      value: getVal(it)
    },
    onChange: onChange
  })))))), tab === 'info' && /*#__PURE__*/React.createElement(WNS.Box, {
    headline: "General"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kit-info"
  }, /*#__PURE__*/React.createElement("dt", null, "Document type"), /*#__PURE__*/React.createElement("dd", null, doc.info.docType), /*#__PURE__*/React.createElement("dt", null, "Template"), /*#__PURE__*/React.createElement("dd", null, doc.info.template), /*#__PURE__*/React.createElement("dt", null, "Created"), /*#__PURE__*/React.createElement("dd", null, doc.info.created), /*#__PURE__*/React.createElement("dt", null, "Id"), /*#__PURE__*/React.createElement("dd", null, doc.info.id), /*#__PURE__*/React.createElement("dt", null, "Status"), /*#__PURE__*/React.createElement("dd", null, STATE_TAG[doc.state]))))), /*#__PURE__*/React.createElement("div", {
    className: "kit-ws__footer"
  }, /*#__PURE__*/React.createElement(WNS.Button, {
    look: "default",
    label: "Delete",
    onClick: onDelete
  }), /*#__PURE__*/React.createElement(WNS.Button, {
    look: "default",
    label: "Save",
    onClick: () => onSave('save')
  }), /*#__PURE__*/React.createElement(WNS.Button, {
    look: "primary",
    color: "positive",
    label: "Save and publish",
    onClick: () => onSave('publish')
  })));
}
window.KitWorkspace = Workspace;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/Workspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/data.js
try { (() => {
// Mock backoffice content — Content section tree, documents, and a collection.
// Icons are loaded as SVG strings at runtime (see index.html) and injected by alias.

window.UMB_KIT_DATA = {
  sections: [{
    alias: 'content',
    label: 'Content'
  }, {
    alias: 'media',
    label: 'Media'
  }, {
    alias: 'settings',
    label: 'Settings'
  }, {
    alias: 'members',
    label: 'Members'
  }, {
    alias: 'users',
    label: 'Users'
  }],
  // Content tree (Content section)
  tree: [{
    id: 'home',
    name: 'Home',
    icon: 'home',
    children: [{
      id: 'products',
      name: 'Products',
      icon: 'folder',
      isCollection: true,
      children: [{
        id: 'widget-a',
        name: 'Widget A',
        icon: 'document',
        children: []
      }, {
        id: 'widget-b',
        name: 'Widget B',
        icon: 'document',
        children: []
      }]
    }, {
      id: 'about',
      name: 'About us',
      icon: 'document',
      children: []
    }, {
      id: 'contact',
      name: 'Contact',
      icon: 'document',
      children: []
    }]
  }, {
    id: 'blog',
    name: 'Blog',
    icon: 'folder',
    isCollection: true,
    children: [{
      id: 'post-1',
      name: 'Launching v18',
      icon: 'document',
      children: []
    }]
  }],
  // Documents keyed by tree id
  documents: {
    home: {
      id: 'home',
      name: 'Home',
      icon: 'home',
      state: 'published',
      updated: '2 days ago',
      author: 'Alice Brown',
      properties: [{
        group: 'Content',
        items: [{
          label: 'Title',
          alias: 'title',
          desc: 'Shown in the browser tab and search results.',
          required: true,
          type: 'text',
          value: 'Welcome to Acme'
        }, {
          label: 'Subtitle',
          alias: 'subtitle',
          desc: '',
          type: 'text',
          value: 'Build better websites, faster.'
        }, {
          label: 'Body text',
          alias: 'bodyText',
          desc: 'The main page content.',
          type: 'rte',
          value: 'Acme helps teams ship content with confidence. Our platform is open, flexible, and built for editors.'
        }]
      }, {
        group: 'Hero',
        items: [{
          label: 'Hero image',
          alias: 'heroImage',
          desc: 'Recommended 1600×900.',
          type: 'media'
        }, {
          label: 'Call to action',
          alias: 'cta',
          desc: '',
          type: 'text',
          value: 'Get started'
        }]
      }],
      info: {
        template: 'Home',
        docType: 'Landing Page',
        created: '12 Jan 2026',
        id: '1075'
      }
    },
    about: {
      id: 'about',
      name: 'About us',
      icon: 'document',
      state: 'draft',
      updated: '5 hours ago',
      author: 'Sam Diaz',
      properties: [{
        group: 'Content',
        items: [{
          label: 'Title',
          alias: 'title',
          desc: 'Shown in the browser tab and search results.',
          required: true,
          type: 'text',
          value: 'About us'
        }, {
          label: 'Body text',
          alias: 'bodyText',
          desc: 'The main page content.',
          type: 'rte',
          value: 'We started Acme in a garage in 2009…'
        }]
      }],
      info: {
        template: 'Article',
        docType: 'Article',
        created: '03 Feb 2026',
        id: '1182'
      }
    },
    contact: {
      id: 'contact',
      name: 'Contact',
      icon: 'document',
      state: 'pending',
      updated: '1 week ago',
      author: 'Jo Park',
      properties: [{
        group: 'Content',
        items: [{
          label: 'Title',
          alias: 'title',
          desc: '',
          required: true,
          type: 'text',
          value: 'Contact'
        }, {
          label: 'Email',
          alias: 'email',
          desc: 'Public enquiries inbox.',
          type: 'text',
          value: 'hello@acme.test'
        }, {
          label: 'Hide from navigation',
          alias: 'umbracoNaviHide',
          desc: '',
          type: 'toggle',
          value: false
        }]
      }],
      info: {
        template: 'Standard',
        docType: 'Content Page',
        created: '20 Feb 2026',
        id: '1190'
      }
    }
  },
  // Collection rows for list-view nodes (Products / Blog)
  collections: {
    products: {
      title: 'Products',
      rows: [{
        id: 'widget-a',
        icon: 'document',
        name: 'Widget A',
        state: 'published',
        author: 'Alice Brown',
        updated: '2 days ago'
      }, {
        id: 'widget-b',
        icon: 'document',
        name: 'Widget B',
        state: 'draft',
        author: 'Sam Diaz',
        updated: '5 hours ago'
      }, {
        id: 'gizmo',
        icon: 'document',
        name: 'Gizmo 3000',
        state: 'published',
        author: 'Jo Park',
        updated: '3 weeks ago'
      }, {
        id: 'sprocket',
        icon: 'document',
        name: 'Sprocket',
        state: 'pending',
        author: 'Alice Brown',
        updated: '1 month ago'
      }]
    },
    blog: {
      title: 'Blog',
      rows: [{
        id: 'post-1',
        icon: 'document',
        name: 'Launching v18',
        state: 'published',
        author: 'Sam Diaz',
        updated: 'Yesterday'
      }, {
        id: 'post-2',
        icon: 'document',
        name: 'Why open source matters',
        state: 'draft',
        author: 'Jo Park',
        updated: '4 days ago'
      }]
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/data.js", error: String((e && e.message) || e) }); }

__ds_ns.EntityActionList = __ds_scope.EntityActionList;

__ds_ns.EntityActionsBundle = __ds_scope.EntityActionsBundle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Box = __ds_scope.Box;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.FigureCard = __ds_scope.FigureCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DiscardChangesModal = __ds_scope.DiscardChangesModal;

__ds_ns.ErrorViewerModal = __ds_scope.ErrorViewerModal;

__ds_ns.IconPickerModal = __ds_scope.IconPickerModal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.InputColor = __ds_scope.InputColor;

__ds_ns.InputCultureSelect = __ds_scope.InputCultureSelect;

__ds_ns.InputDate = __ds_scope.InputDate;

__ds_ns.InputDropdownList = __ds_scope.InputDropdownList;

__ds_ns.InputEyeDropper = __ds_scope.InputEyeDropper;

__ds_ns.InputMultipleTextString = __ds_scope.InputMultipleTextString;

__ds_ns.InputNumberRange = __ds_scope.InputNumberRange;

__ds_ns.InputRadioButtonList = __ds_scope.InputRadioButtonList;

__ds_ns.InputSlider = __ds_scope.InputSlider;

__ds_ns.InputToggle = __ds_scope.InputToggle;

__ds_ns.InputWithAlias = __ds_scope.InputWithAlias;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BodyLayout = __ds_scope.BodyLayout;

__ds_ns.EntityFrame = __ds_scope.EntityFrame;

__ds_ns.FooterLayout = __ds_scope.FooterLayout;

__ds_ns.PopoverLayout = __ds_scope.PopoverLayout;

__ds_ns.SplitPanel = __ds_scope.SplitPanel;

__ds_ns.Stack = __ds_scope.Stack;

__ds_ns.WorkspaceEditor = __ds_scope.WorkspaceEditor;

__ds_ns.WorkspaceFooter = __ds_scope.WorkspaceFooter;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.SectionSidebarMenu = __ds_scope.SectionSidebarMenu;

__ds_ns.SectionSidebarMenuWithEntityActions = __ds_scope.SectionSidebarMenuWithEntityActions;

__ds_ns.TabGroup = __ds_scope.TabGroup;

__ds_ns.Property = __ds_scope.Property;

__ds_ns.PropertyLayout = __ds_scope.PropertyLayout;

__ds_ns.Icon = __ds_scope.Icon;

})();
