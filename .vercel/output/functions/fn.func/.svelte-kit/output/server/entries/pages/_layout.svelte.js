import { g as get_store_value, c as compute_slots, a as compute_rest_props, s as subscribe, n as null_to_empty } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as add_styles, d as spread, f as escape_attribute_value, g as escape_object, v as validate_component, h as each, o as onDestroy, m as missing_component, i as createEventDispatcher } from "../../chunks/ssr.js";
import { w as writable, r as readable } from "../../chunks/index.js";
import { i as isAuthenticated, b as backgroundUrl, a as backgrounds, j as joke, w as weather, c as currentCard } from "../../chunks/store.js";
import { I as Icon } from "../../chunks/Icon.js";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cBase = "textarea relative flex justify-center items-center";
const cInput = "w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer";
const cInterface = "flex justify-center items-center text-center";
const FileDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, [
    "files",
    "fileInput",
    "name",
    "border",
    "padding",
    "rounded",
    "regionInterface",
    "regionInterfaceText",
    "slotLead",
    "slotMessage",
    "slotMeta"
  ]);
  let $$slots = compute_slots(slots);
  let { files = void 0 } = $$props;
  let { fileInput = void 0 } = $$props;
  let { name } = $$props;
  let { border = "border-2 border-dashed" } = $$props;
  let { padding = "p-4 py-8" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { regionInterface = "" } = $$props;
  let { regionInterfaceText = "" } = $$props;
  let { slotLead = "mb-4" } = $$props;
  let { slotMessage = "" } = $$props;
  let { slotMeta = "opacity-75" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.fileInput === void 0 && $$bindings.fileInput && fileInput !== void 0)
    $$bindings.fileInput(fileInput);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionInterface === void 0 && $$bindings.regionInterface && regionInterface !== void 0)
    $$bindings.regionInterface(regionInterface);
  if ($$props.regionInterfaceText === void 0 && $$bindings.regionInterfaceText && regionInterfaceText !== void 0)
    $$bindings.regionInterfaceText(regionInterfaceText);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotMessage === void 0 && $$bindings.slotMessage && slotMessage !== void 0)
    $$bindings.slotMessage(slotMessage);
  if ($$props.slotMeta === void 0 && $$bindings.slotMeta && slotMeta !== void 0)
    $$bindings.slotMeta(slotMeta);
  classesBase = `${cBase} ${border} ${padding} ${rounded} ${$$props.class ?? ""}`;
  classesInput = `${cInput}`;
  classesInterface = `${cInterface}`;
  return `<div class="${[
    "dropzone " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}" data-testid="file-dropzone">  <input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      {
        class: "dropzone-input " + escape(classesInput, true)
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>  <div class="${"dropzone-interface " + escape(classesInterface, true) + " " + escape(regionInterface, true)}"><div class="${"dropzone-interface-text " + escape(regionInterfaceText, true)}"> ${$$slots.lead ? `<div class="${"dropzone-lead " + escape(slotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"dropzone-message " + escape(slotMessage, true)}">${slots.message ? slots.message({}) : `<strong data-svelte-h="svelte-13uz6lq">Upload a file</strong> or drag and drop`}</div>  ${$$slots.meta ? `<small class="${"dropzone-meta " + escape(slotMeta, true)}">${slots.meta ? slots.meta({}) : ``}</small>` : ``}</div></div></div>`;
});
const GoogleBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => value);
  $$unsubscribe_isAuthenticated();
  return `<button aria-label="google-login" class="variant-filled-primary p-1 rounded-sm w-2/5 flex items-center h-10" data-svelte-h="svelte-1x7oxsl"><span class="h-full w-1/4 rounded-sm bg-white mr-5 flex justify-center items-center"><img src="https://img.icons8.com/color/48/000000/google-logo.png" class="h-full" alt="google ka logo hona chahiye!!"></span> <span class="text-2xl text-white">Sign in</span></button>`;
});
const IconBrandGoogle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "brand-google" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandGoogle$1 = IconBrandGoogle;
const IconBrandTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "brand-twitter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandTwitter$1 = IconBrandTwitter;
const IconCalendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
      }
    ],
    ["path", { "d": "M16 3v4" }],
    ["path", { "d": "M8 3v4" }],
    ["path", { "d": "M4 11h16" }],
    ["path", { "d": "M11 15h1" }],
    ["path", { "d": "M12 15v3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconCalendar$1 = IconCalendar;
const IconCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12l5 5l10 -10" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconCheck$1 = IconCheck;
const IconChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M6 9l6 6l6 -6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconChevronDown$1 = IconChevronDown;
const IconHourglassHigh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M6.5 7h11" }],
    [
      "path",
      {
        "d": "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"
      }
    ],
    [
      "path",
      {
        "d": "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hourglass-high" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconHourglassHigh$1 = IconHourglassHigh;
const IconMail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
      }
    ],
    ["path", { "d": "M3 7l9 6l9 -6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconMail$1 = IconMail;
const IconPhotoScan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M15 8h.01" }],
    [
      "path",
      {
        "d": "M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644"
      }
    ],
    [
      "path",
      {
        "d": "M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644"
      }
    ],
    ["path", { "d": "M4 8v-2a2 2 0 0 1 2 -2h2" }],
    ["path", { "d": "M4 16v2a2 2 0 0 0 2 2h2" }],
    ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v2" }],
    ["path", { "d": "M16 20h2a2 2 0 0 0 2 -2v-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "photo-scan" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconPhotoScan$1 = IconPhotoScan;
const IconPower = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M7 6a7.75 7.75 0 1 0 10 0" }], ["path", { "d": "M12 4l0 8" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "power" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconPower$1 = IconPower;
const IconSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
      }
    ],
    [
      "path",
      {
        "d": "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "settings" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconSettings$1 = IconSettings;
const IconSquare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconSquare$1 = IconSquare;
const IconTrash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4 7l16 0" }],
    ["path", { "d": "M10 11l0 6" }],
    ["path", { "d": "M14 11l0 6" }],
    [
      "path",
      {
        "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
      }
    ],
    [
      "path",
      {
        "d": "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconTrash$1 = IconTrash;
const IconX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 6l-12 12" }], ["path", { "d": "M6 6l12 12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconX$1 = IconX;
const Google = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  let data = [];
  let suggestions = [];
  {
    {
      if (query.length > 0) {
        suggestions = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
      } else {
        suggestions = [];
      }
    }
  }
  return `<form class="h-full w-full p-2"><div class="${"h-fit w-full flex justify-center transition-all pl-2 " + escape(
    suggestions.length > 0 ? "rounded-t-2xl" : "rounded-full",
    true
  ) + " items-center " + escape("bg-transparent", true) + " duration-200"}">${``} <input type="text" name="google" id="google" class="${"w-11/12 " + escape("variant-ghost-surface", true) + " text-xl rounded-full focus:border-transparent focus:ring-0"}"${add_attribute("placeholder", "Search", 0)} autocomplete="off"${add_attribute("value", query, 0)}> <input type="submit" style="display: none;"></div> ${suggestions.length > 0 ? `<div class="h-fit w-full rounded-b-md text-xl font-bold variant-ghost-surface">${each(suggestions, (suggestion) => {
    return `<div class="w-full h-fit p-2 pt-3">${escape(suggestion)}</div>`;
  })}</div>` : ``}</form>`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="h-full w-full"><div class="h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all"><div class="text-xl font-bold w-full" data-svelte-h="svelte-bq7u93">Recent Events</div> <button class="absolute right-2 top-3 transition-all"${add_attribute("style", "", 0)}>${validate_component(IconChevronDown$1, "IconChevronDown").$$render($$result, { class: "-z-10" }, {}, {})}</button> ${``}</div> <div class="h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all"><div class="text-xl font-bold w-full" data-svelte-h="svelte-1c18f3w">Create Events</div> <button class="absolute right-2 top-3 transition-all"${add_attribute("style", "", 0)}>${validate_component(IconChevronDown$1, "IconChevronDown").$$render($$result, { class: "-z-10" }, {}, {})}</button> ${``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$5 = {
  code: ".point.svelte-dudtlc{border-left:15px solid transparent;border-right:15px solid transparent;border-top:30px solid #f00}span.svelte-dudtlc,button.svelte-dudtlc{transition:all 100ms ease-in-out}",
  map: null
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  let rotation = 0;
  let seconds = 0;
  let play = false;
  onDestroy(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("play", play);
  });
  $$result.css.add(css$5);
  seconds = count * 60;
  rotation = seconds / 3600 * 360;
  return `<div class="h-full w-full"><div class="w-full h-1/4 flex flex-col justify-evenly items-center"><span class="text-8xl svelte-dudtlc">${escape(count)}</span> <span class="text-4xl svelte-dudtlc" data-svelte-h="svelte-1wqze7f">MIN</span></div> <div class="h-3/4 w-full flex flex-col items-center"><button class="w-0 h-0 m-2 point svelte-dudtlc"></button> <div class="flex justify-center items-center h-60 w-60 variant-glass-surface rounded-full relative p-4 transition-all" style="${"transform: rotate(" + escape(rotation, true) + "deg);"}"><span class="w-6 h-6 m-1 text-center text-lg font-bold absolute top-1 svelte-dudtlc" style="${"transform: rotate(-" + escape(rotation, true) + "deg);"}">${escape(Math.floor(count / 60) * 60)}</span> <span class="w-6 h-6 m-1 text-center text-lg font-bold absolute left-1 svelte-dudtlc" style="${"transform: rotate(-" + escape(rotation, true) + "deg);"}">${escape(Math.floor(count / 60) * 60 + 15)}</span> <span class="w-6 h-6 m-1 text-center text-lg font-bold absolute bottom-1 svelte-dudtlc" style="${"transform: rotate(-" + escape(rotation, true) + "deg);"}">${escape(Math.floor(count / 60) * 60 + 30)}</span> <span class="w-6 h-6 m-1 text-center text-lg font-bold absolute right-1 svelte-dudtlc" style="${"transform: rotate(-" + escape(rotation, true) + "deg);"}">${escape(Math.floor(count / 60) * 60 + 45)}</span> ${``}</div></div> </div>`;
});
const css$4 = {
  code: ".loader.svelte-ymr1jf{width:48px;height:48px;border-radius:50%;position:relative;animation:svelte-ymr1jf-rotate 1s linear infinite}.loader.svelte-ymr1jf::before,.loader.svelte-ymr1jf::after{content:'';box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #fff;animation:svelte-ymr1jf-prixClipFix 2s linear infinite}.loader.svelte-ymr1jf::after{inset:8px;transform:rotate3d(90, 90, 0, 180deg);border-color:#ff3d00}@keyframes svelte-ymr1jf-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-ymr1jf-prixClipFix{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}75%,100%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<span class="loader svelte-ymr1jf"></span>`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mails = [];
  let oppend = [];
  return `<div class="${"h-full w-full p-2 transition-all duration-200 overflow-y-scroll relative " + escape(
    mails.length == 0 ? "flex items-center justify-center" : "",
    true
  )}">${mails.length === 0 ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}` : `<h1 class="w-full font-extrabold" data-svelte-h="svelte-1ke2zsz">Today&#39;s Mail</h1>`} ${each(mails, (mail, i) => {
    return `<a${add_attribute("href", mail.link, 0)} target="_blank" class="h-fit w-full p-2 text-2xl rounded-md mt-2 variant-glass-surface flex flex-col relative transition-all duration-75"><button class="h-fit w-fit absolute top-2 right-2 z-1 transition-all"${add_attribute("style", oppend[i] ? "rotate:180deg;" : "", 0)}>${validate_component(IconChevronDown$1, "IconChevronDown").$$render($$result, { class: "-z-1" }, {}, {})}</button> <button class="absolute bottom-3 right-2 h-fit w-fit">${validate_component(IconSquare$1, "IconSquare").$$render($$result, { size: "20" }, {}, {})}</button> <span class="h-full w-fit font-bold text-xl -z-1">${escape(mail.senderName)}</span> <span class="w-fit h-full -z-1">${escape(oppend[i] ? mail.subject : mail.short)}</span> </a>`;
  })}</div>`;
});
const css$3 = {
  code: ".buttons.svelte-pluny7.svelte-pluny7{display:none}.image.svelte-pluny7:hover .buttons.svelte-pluny7{display:flex}.buttons.svelte-pluny7.svelte-pluny7{transition:opacity 0.3s ease;animation:svelte-pluny7-appear 0.3s ease}button.svelte-pluny7.svelte-pluny7{transition:all 0.2s ease}@keyframes svelte-pluny7-appear{0%{opacity:0}100%{opacity:1}}",
  map: null
};
const Setting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_backgroundUrl;
  let $backgrounds, $$unsubscribe_backgrounds;
  $$unsubscribe_backgroundUrl = subscribe(backgroundUrl, (value) => value);
  $$unsubscribe_backgrounds = subscribe(backgrounds, (value) => $backgrounds = value);
  $$result.css.add(css$3);
  $$unsubscribe_backgroundUrl();
  $$unsubscribe_backgrounds();
  return `<div class="h-full w-full p-2 flex flex-col items-center"><div class="text-2xl text-left w-full" data-svelte-h="svelte-1ipw2bi">Backgrounds</div> ${each($backgrounds, (bg) => {
    return `<div class="w-2/3 h-1/6 rounded-md m-2 shadow-xl bg-cover relative image svelte-pluny7" style="${"background-image: url('" + escape(bg.url, true) + "');"}"><div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 buttons svelte-pluny7"><button aria-label="set-background" class="m-2 p-2 rounded hover:shadow-glow svelte-pluny7">${validate_component(IconCheck$1, "IconCheck").$$render($$result, {}, {}, {})}</button> <button aria-label="delete" class="m-2 p-2 rounded hover:shadow-glow svelte-pluny7">${validate_component(IconTrash$1, "IconTrash").$$render($$result, {}, {}, {})}</button></div> </div>`;
  })} </div>`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthenticated, $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => $isAuthenticated = value);
  $$unsubscribe_isAuthenticated();
  return `${$isAuthenticated === true ? `<button aria-label="logout">${validate_component(IconPower$1, "IconPower").$$render($$result, {}, {}, {})}</button>` : ``}`;
});
const Pannel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pannelNo } = $$props;
  let { selected } = $$props;
  let { title } = $$props;
  let { isAuthenticated: isAuthenticated2 } = $$props;
  let icon;
  let pannel;
  if ($$props.pannelNo === void 0 && $$bindings.pannelNo && pannelNo !== void 0)
    $$bindings.pannelNo(pannelNo);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isAuthenticated === void 0 && $$bindings.isAuthenticated && isAuthenticated2 !== void 0)
    $$bindings.isAuthenticated(isAuthenticated2);
  {
    {
      switch (pannelNo) {
        case 1:
          icon = IconBrandGoogle$1;
          pannel = Google;
          break;
        case 2:
          icon = IconCalendar$1;
          pannel = Calendar;
          break;
        case 3:
          icon = IconHourglassHigh$1;
          pannel = Timer;
          break;
        case 4:
          icon = IconMail$1;
          pannel = Mail;
          break;
        case 5:
          icon = IconSettings$1;
          pannel = Setting;
          break;
        default:
          icon = IconGoogle;
          pannel = Google;
      }
    }
  }
  return `${selected === true ? `<div class="variant-ghost-surface rounded-r-lg w-96 overflow-hidden"><div class="variant-ghost-surface h-8 flex p-1"><span>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</span> <span class="font-bold ml-1">${escape(title)}</span> <span class="ml-auto mr-1">${validate_component(Logout, "Logout").$$render($$result, {}, {}, {})}</span></div> <div class="variant-ghost-surface h-full flex justify-center items-center">${isAuthenticated2 === false ? `${validate_component(GoogleBtn, "GoogleBtn").$$render($$result, {}, {}, {})}` : `${isAuthenticated2 === true ? `${validate_component(pannel || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`}</div></div>` : ``}`;
});
const css$2 = {
  code: ".variant-glass-surface.svelte-5vm52z.svelte-5vm52z{transform:translateX(-120%);transition:transform 0.3s ease-in-out}.parent.svelte-5vm52z:hover .variant-glass-surface.svelte-5vm52z{transform:translateX(0)}",
  map: null
};
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { selected } = $$props;
  let { pannelNo } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.pannelNo === void 0 && $$bindings.pannelNo && pannelNo !== void 0)
    $$bindings.pannelNo(pannelNo);
  $$result.css.add(css$2);
  return `<div class="parent svelte-5vm52z"><div class="${escape(null_to_empty(`h-full w-14 flex flex-col justify-between variant-${selected == true ? "ghost" : "glass"}-surface ${selected == true ? "rounded-l-md" : "rounded-md"} `), true) + " svelte-5vm52z"}"><div class="flex flex-col gap-2"><button aria-label="sidebar-icon" id="1" class="flex justify-center p-1 mt-2" title="Google">${validate_component(IconBrandGoogle$1, "IconBrandGoogle").$$render($$result, { size: 35 }, {}, {})}</button> <button aria-label="sidebar-icon" id="2" class="flex justify-center p-1 m-2" title="Calendar">${validate_component(IconCalendar$1, "IconCalendar").$$render($$result, { size: 40 }, {}, {})}</button> <button aria-label="sidebar-icon" id="3" class="flex justify-center p-1 m-2" title="Timer">${validate_component(IconHourglassHigh$1, "IconHourglassHigh").$$render($$result, { size: 40 }, {}, {})}</button> <button aria-label="sidebar-icon" id="4" class="flex justify-center p-1 m-2" title="Mail">${validate_component(IconMail$1, "IconMail").$$render($$result, { size: 40 }, {}, {})}</button></div> <div class="flex flex-col"><button aria-label="sidebar-icon" id="5" class="flex justify-center p-2 m-1" title="Settings">${validate_component(IconSettings$1, "IconSettings").$$render($$result, { size: 40 }, {}, {})}</button></div></div> </div>`;
});
const css$1 = {
  code: ".hover-circle.svelte-irenwn.svelte-irenwn{transition:opacity 0.3s ease;pointer-events:none;opacity:1;animation:svelte-irenwn-apperance 0.5s ease forwards}.hover.svelte-irenwn:not(:hover) .hover-circle.svelte-irenwn{opacity:0;animation:svelte-irenwn-disapperance 5s ease}@keyframes svelte-irenwn-apperance{0%{transform:translate(0, -50%)}100%{transform:translate(-180%, -50%)}}@keyframes svelte-irenwn-disapperance{0%{transform:translate(-180%, -50%);opacity:1}90%{transform:translate(-180%, -50%);opacity:1}100%{opacity:0;transform:translate(0, -50%)}}",
  map: null
};
const Qoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $joke, $$unsubscribe_joke;
  $$unsubscribe_joke = subscribe(joke, (value) => $joke = value);
  $$result.css.add(css$1);
  $$unsubscribe_joke();
  return `<span class="variant-glass-surface h-fit w-1/4 rounded-md p-5 left-2/4 bottom-4 absolute -translate-x-1/2 hover svelte-irenwn"><button aria-label="tweet" class="variant-glass-surface block absolute top-1/2 -translate-y-1/2 w-fit h-fit p-2 rounded-full hover-circle svelte-irenwn">${validate_component(IconBrandTwitter$1, "IconBrandTwitter").$$render($$result, {}, {}, {})}</button> <p class="text-2xl text-center h-2/3">${escape($joke)}</p> </span>`;
});
const Widgets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $weather, $$unsubscribe_weather;
  let $$unsubscribe_currentCard;
  $$unsubscribe_weather = subscribe(weather, (value) => $weather = value);
  $$unsubscribe_currentCard = subscribe(currentCard, (value) => value);
  const timeFormat = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  const getTimeAndDate = () => {
    const date = /* @__PURE__ */ new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time2 = `${timeFormat(hours)}:${timeFormat(minutes)}`;
    const week = date.getDay();
    const day = date.getDate();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const displayDate2 = `${weekDays[week]}, ${day}`;
    const intervalTime2 = (60 - date.getSeconds()) * 1e3;
    const intervalDate2 = (24 - date.getHours()) * 60 * 60 * 1e3;
    return {
      time: time2,
      displayDate: displayDate2,
      intervalTime: intervalTime2,
      intervalDate: intervalDate2
    };
  };
  let { time, displayDate, intervalTime, intervalDate } = getTimeAndDate();
  $$unsubscribe_weather();
  $$unsubscribe_currentCard();
  return `<div class="variant-glass-surface flex justify-between items-center rounded-md h-1/2 w-60 p-2"><button class="h-full p-2 w-fit rounded-md hover:variant-glass-surface cursor-pointer"><div class="w-full h-2/3 flex items-center justify-evenly text-xl font-bold"><span>${validate_component($weather.icon || "" || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</span> <span>${escape($weather.temp || "")}°C</span></div> <div class="w-full h-1/3 flex justify-center">${escape($weather.city || "")}</div></button> <span class="h-3/4 bg-white w-px"></span> <button class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface cursor-pointer"><div class="w-full h-2/3 flex justify-center text-xl font-bold">${escape(time)}</div> <div class="w-full h-1/3 flex justify-center">${escape(displayDate)}</div></button></div>`;
});
const css = {
  code: "dialog.svelte-d0cm2{animation:svelte-d0cm2-apperance 0.3s ease}dialog.svelte-d0cm2::backdrop{background-color:rgba(0, 0, 0, 0.5)}@keyframes svelte-d0cm2-apperance{0%{transform:scale(0)}100%{transform:scale(1)}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_backgroundUrl;
  let $$unsubscribe_backgrounds;
  $$unsubscribe_backgroundUrl = subscribe(backgroundUrl, (value) => value);
  $$unsubscribe_backgrounds = subscribe(backgrounds, (value) => value);
  let { showModal } = $$props;
  let dialog;
  let file;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<dialog class="${"variant-ghost-surface flex p-2 justify-center items-center rounded-md h-1/4 w-1/4 " + escape(showModal ? "block" : "hidden", true) + " svelte-d0cm2"}"${add_attribute("this", dialog, 0)}><button aria-label="close-modal" class="absolute top-3 right-3 z-10">${validate_component(IconX$1, "IconX").$$render($$result, { size: 20, stroke: 3, color: "white" }, {}, {})}</button> ${validate_component(FileDropzone, "FileDropzone").$$render(
      $$result,
      {
        name: "files",
        class: "h-full w-full variant-glass-surface text-xl text-white",
        accept: "image/jpeg/png",
        files: file
      },
      {
        files: ($$value) => {
          file = $$value;
          $$settled = false;
        }
      },
      {}
    )} </dialog>`;
  } while (!$$settled);
  $$unsubscribe_backgroundUrl();
  $$unsubscribe_backgrounds();
  return $$rendered;
});
const BackgroundUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<button aria-label="background-upload" class="variant-glass-surface absolute rounded-md bottom-4 right-4 h-fit w-fit p-1">${validate_component(IconPhotoScan$1, "IconPhotoScan").$$render($$result, { size: 45, class: "-z-10" }, {}, {})}</button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthenticated, $$unsubscribe_isAuthenticated;
  $$unsubscribe_isAuthenticated = subscribe(isAuthenticated, (value) => $isAuthenticated = value);
  let selected = true;
  let pannelNo = 1;
  let title = "Google";
  $$unsubscribe_isAuthenticated();
  return `${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      slotSidebarLeft: "p-4 flex w-fit",
      slotPageFooter: "static h-1/4 p-4",
      slotPageHeader: "h-1/5 p-4 flex justify-end"
    },
    {},
    {
      pageFooter: () => {
        return `${validate_component(Qoute, "Qoute").$$render($$result, {}, {}, {})}${validate_component(BackgroundUp, "BackgroundUp").$$render($$result, {}, {}, {})}`;
      },
      pageHeader: () => {
        return `${validate_component(Widgets, "Widgets").$$render($$result, {}, {}, {})} `;
      },
      sidebarLeft: () => {
        return `${validate_component(SideBar, "SideBar").$$render($$result, { selected, pannelNo }, {}, {})} ${validate_component(Pannel, "Pannel").$$render(
          $$result,
          {
            title,
            pannelNo,
            selected,
            isAuthenticated: $isAuthenticated
          },
          {},
          {}
        )} `;
      },
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
