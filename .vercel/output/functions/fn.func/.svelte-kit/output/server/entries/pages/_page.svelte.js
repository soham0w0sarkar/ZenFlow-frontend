import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, m as missing_component } from "../../chunks/ssr.js";
import { w as weather, c as currentCard, b as backgroundUrl } from "../../chunks/store.js";
import { I as Icon } from "../../chunks/Icon.js";
import "../../chunks/client.js";
const IconArrowNarrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 5l0 14" }],
    ["path", { "d": "M16 9l-4 -4" }],
    ["path", { "d": "M8 9l4 -4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-narrow-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconArrowNarrowUp$1 = IconArrowNarrowUp;
const IconWind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"
      }
    ],
    [
      "path",
      {
        "d": "M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "wind" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconWind$1 = IconWind;
const css$1 = {
  code: "@font-face{font-family:'Clock_font';src:url('src/fonts/clock_font.ttf')}.card.svelte-1fx3jd8{animation:svelte-1fx3jd8-fadeInZoom 0.1s ease-in-out;font-family:'Clock_font'}@keyframes svelte-1fx3jd8-fadeInZoom{from{opacity:0;transform:translate(50%, -50%)}to{opacity:1;transform:translate(50%, -50%)}}",
  map: null
};
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timeFormat = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  let hours, minutes, seconds;
  const getTime = () => {
    const date = /* @__PURE__ */ new Date();
    hours = timeFormat(date.getHours());
    minutes = timeFormat(date.getMinutes());
    seconds = timeFormat(date.getSeconds());
  };
  const getDate = () => {
    const date = /* @__PURE__ */ new Date();
    const week = "SUN MON TUE WED THU FRI SAT".split(" ")[date.getDay()];
    const day = date.getDate();
    return `${week}, ${day}`;
  };
  getTime();
  setInterval(getTime, 1e3);
  $$result.css.add(css$1);
  return `<div class="variant-glass-surface rounded-md p-2 absolute h-1/5 w-1/4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 shadow-md card flex flex-col items-center text-8xl transition-all svelte-1fx3jd8"><div class="flex justify-evenly items-center w-11/12 h-3/4"><div class="h-full w-1/4 flex items-center justify-center">${escape(hours)}</div>
		:
		<div class="h-full w-1/4 flex items-center justify-center">${escape(minutes)}</div>
		:
		<div class="h-full w-1/4 flex items-center justify-center">${escape(seconds)}</div></div> <div class="h-1/4 w-full flex justify-center items-center text-2xl">${escape(getDate())}</div> </div>`;
});
const css = {
  code: ".card.svelte-qe5aqa{animation:svelte-qe5aqa-fadeInZoom 0.1s ease-in-out}@keyframes svelte-qe5aqa-fadeInZoom{from{opacity:0;transform:translate(50%, -50%)}to{opacity:1;transform:translate(50%, -50%)}}",
  map: null
};
const Weather = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $weather, $$unsubscribe_weather;
  $$unsubscribe_weather = subscribe(weather, (value) => $weather = value);
  $$result.css.add(css);
  $$unsubscribe_weather();
  return `<div class="variant-glass-surface rounded-md p-2 absolute h-1/5 w-1/5 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 grid grid-col-2 grid-rows-2 gap-4 shadow-md card svelte-qe5aqa"><div class="col-span-2"><div class="w-full text-xl h-1/4">${escape($weather.city_full)}</div> <div class="w-full text-xl flex items-end h-3/4"><span>${validate_component($weather.icon || missing_component, "svelte:component").$$render($$result, { size: 50 }, {}, {})}</span> <span class="text-2xl font-bold m-2">${escape($weather.description)}</span></div></div> <div class="p-2 flex flex-col justify-evenly"><span>feel&#39;s Like: ${escape($weather.feels_like)}°C</span> <span class="flex gap-2">${validate_component(IconWind$1, "IconWind").$$render($$result, {}, {}, {})} <span>${escape($weather.wind_speed)}km/h</span> ${validate_component(IconArrowNarrowUp$1, "IconArrowNarrowUp").$$render(
    $$result,
    {
      style: "transform: rotate(" + $weather.wind_deg + "deg);"
    },
    {},
    {}
  )}</span></div> <div class="flex justify-center items-start p-2"><span class="text-7xl">${escape($weather.temp)}</span> <span data-svelte-h="svelte-sl7ktq">°C</span></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentCard, $$unsubscribe_currentCard;
  let $$unsubscribe_backgroundUrl;
  $$unsubscribe_currentCard = subscribe(currentCard, (value) => $currentCard = value);
  $$unsubscribe_backgroundUrl = subscribe(backgroundUrl, (value) => value);
  let card;
  {
    {
      switch ($currentCard) {
        case 0:
          card = Weather;
          break;
        case 1:
          card = Time;
          break;
        default:
          card = "";
      }
    }
  }
  $$unsubscribe_currentCard();
  $$unsubscribe_backgroundUrl();
  return `${$$result.head += `<!-- HEAD_svelte-ty9swr_START -->${$$result.title = `<title>ZenFlow</title>`, ""}<!-- HEAD_svelte-ty9swr_END -->`, ""} <div class="static h-full w-full">${validate_component(card || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
