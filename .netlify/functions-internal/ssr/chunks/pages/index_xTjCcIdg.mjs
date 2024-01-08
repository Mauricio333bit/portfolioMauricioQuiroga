/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes } from '../astro_WORZN5SE.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center py-4  mx-auto"> <nav class="flex flex-row gap-x-4 opacity-85"> <a href="/" class="">Home</a> <a href="/about">About</a> <a href="/projects">Projects</a> <a href="/contac">Contact</a> </nav> </header>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/Header.astro", void 0);

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/Badge.astro", void 0);

const $$Astro$8 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`sm:w-[740px] w-full mx-auto px-6 pt-8 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/SectionContainer.astro", void 0);

const $$Astro$7 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { date, title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-6"> <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path> </svg> </span> <h3 class="flex items-center mb-1 text-lg font-semibold  dark:text-sky-400">${title} <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3> <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">${date}</time> <p class=" text-pretty mb-4 text-base font-normal text-gray-500 dark:text-gray-400">${description}</p> <a${addAttribute(link, "href")} target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"></path> <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path> </svg> Ver mas</a> </li>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/ExperienceItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Experience;
  const experiencias = [
    {
      date: "Diciembre 2023",
      title: "Desarrollador FrontEnd-Bussines On Move",
      description: "Desarroll\xE9 una landing page responsiva y atractiva utilizando HTML, CSS, PHP y Bootstrap para mejorar la est\xE9tica y la experiencia de usuario con el fin de atraer m\xE1s clientes. Trabaj\xE9 de forma remota en el redise\xF1o y optimizaci\xF3n del front-end del sitio web, aplicando mis habilidades en dise\xF1o web adaptable. Implement\xE9 mejoras en la navegaci\xF3n y la interfaz para que la p\xE1gina sea m\xE1s intuitiva en distintos dispositivos.",
      link: "https://businessonmove.com/"
    },
    {
      date: "Diciembre 2023",
      title: "Desarrollador FrontEnd-Bussines On Move",
      description: "Desarroll\xE9 una landing page responsiva y atractiva utilizando HTML, CSS, PHP y Bootstrap para mejorar la est\xE9tica y la experiencia de usuario con el fin de atraer m\xE1s clientes. Trabaj\xE9 de forma remota en el redise\xF1o y optimizaci\xF3n del front-end del sitio web, aplicando mis habilidades en dise\xF1o web adaptable. Implement\xE9 mejoras en la navegaci\xF3n y la interfaz para que la p\xE1gina sea m\xE1s intuitiva en distintos dispositivos.",
      link: "https://businessonmove.com/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 dark:border-gray-700 mx-auto"> ${experiencias.map((experiencia) => renderTemplate`${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencia })}`)} </ol>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/Experience.astro", void 0);

const $$Astro$5 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path></svg>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/icons/Github.astro", void 0);

const $$Astro$4 = createAstro();
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="currentColor" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/icons/Linkedin.astro", void 0);

const $$Astro$3 = createAstro();
const $$Gmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Gmail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" class="w-8 h-8"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="currentColor" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="currentColor" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="currentColor" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="currentColor" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="currentColor" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/icons/Gmail.astro", void 0);

const $$Astro$2 = createAstro();
const $$SocialNetwork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialNetwork;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center hover:scale-125 transition"><a${spreadAttributes(Astro2.props)} target="_blank">${renderSlot($$result, $$slots["default"])}</a></li>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/components/SocialNetwork.astro", void 0);

const $$Astro$1 = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg class="size-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"></path> <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"></path> </svg>`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/icons/Briefcase.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio-MauricioQuiroga-Desarrollador y Programador Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute flex inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#8F00FF_100%)]"></div> <main> <img src="../83444493415 (1).png" alt="MauricioPhoto" class="rounded-full size-60 mx-auto"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="text-white text-balance text-center mx-auto text-5xl font-bold flex justify-center sm:flex-row flex-col gap-x-4 pb-5">Hola, soy Mauricio! <div class="flex items-center mx-auto"> <a href="https://www.linkedin.com/in/mauricio-quiroga-7b8b00246/" target="_blank" class="flex pt-2">${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })}</a></div> </h1> <h2 class="text-2xl text-wrap ">Programando desde 2022. <span class="text-sky-400">Desarollador web</span> apasionado. Estoy en el ultimo año de la <span class="text-sky-400">Tecnicatura en Desarrollo de Software</span>. Especializado en <span class="text-sky-400">FrontEnd</span>, y además tengo conocimientos de <span class="text-sky-400">BackEnd</span>. <span>Vivo en Mendoza,Argentina</span>.</h2> <ul class="flex flex-row gap-4 py-3"> ${renderComponent($$result3, "SocialNetwork", $$SocialNetwork, { "href": "https://github.com/Mauricio333bit" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "GithubIcon", $$Github, {})} ${renderComponent($$result4, "SocialNetwork", $$SocialNetwork, { "href": "https://www.linkedin.com/in/mauricio-quiroga-7b8b00246/" }, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "LinkedinIcon", $$Linkedin, {})} ${renderComponent($$result5, "SocialNetwork", $$SocialNetwork, { "href": "mailto:mauriquiroga97@gmail.com" }, { "default": ($$result6) => renderTemplate`${renderComponent($$result6, "GmailIcon", $$Gmail, {})} ${renderComponent($$result6, "SocialNetwork", $$SocialNetwork, { "href": "mailto:mauriquiroga97@gmail.com", "class": "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700" }, { "default": ($$result7) => renderTemplate`Descargar CV` })} ` })}` })}` })}</ul> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pb-10 pt-32" }, { "default": ($$result3) => renderTemplate` <div class="flex gap-2 align-center"><h2 class="pb-7 text-3xl">Experiencia laboral </h2>${renderComponent($$result3, "Briefcase", $$Briefcase, {})}</div> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} </main> ` })}`;
}, "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/pages/index.astro", void 0);

const $$file = "C:/Users/mauri/Desktop/sonus/PortfolioAstro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
