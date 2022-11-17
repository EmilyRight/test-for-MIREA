/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/_fix-line.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/_fix-line.js ***!
  \*****************************************/
/***/ (() => {

eval("var lineParent = document.querySelector('.actions');\nvar line = document.querySelector('.line');\nvar container = document.querySelector('.container');\nvar goalsLine = document.querySelector('.goals__line');\nvar goalsLineContainer = document.querySelector('.goals');\nvar lilParent = document.querySelector('.number-line');\nfunction fixLine() {\n  var parentWidth = container.offsetWidth;\n  var parentHeight = container.offsetHeight;\n  var blockHeight = lineParent.offsetHeight;\n  line.style.height = \"\".concat(0.90 * blockHeight, \"px\");\n  line.style.top = \"\".concat(parentHeight, \"px\");\n  line.style.left = \"\".concat(0.37 * parentWidth, \"px\");\n  line.style.width = \"\".concat(0.6 * parentWidth, \"px\");\n}\nfunction fixGoalsLine() {\n  var parentWidth = goalsLineContainer.offsetWidth;\n  var parentHeight = goalsLineContainer.offsetHeight;\n  var lilParentHeight = lilParent.offsetHeight;\n  var lilParentWigth = lilParent.offsetWidth;\n  goalsLine.style.width = \"\".concat(0.47 * parentWidth, \"px\");\n  goalsLine.style.height = \"\".concat(0.78 * parentHeight, \"px\");\n  goalsLine.style.top = \"\".concat(lilParentHeight / 2, \"px\");\n  goalsLine.style.left = \"\".concat(-2 * lilParentWigth + 20, \"px\");\n}\nwindow.addEventListener('load', function (e) {\n  fixLine();\n  fixGoalsLine();\n});\nwindow.addEventListener('resize', function (e) {\n  fixLine();\n  fixGoalsLine();\n});\n\n//# sourceURL=webpack://test-for-mirea/./src/assets/scripts/_fix-line.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _assets_scripts_fix_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/_fix-line */ \"./src/assets/scripts/_fix-line.js\");\n/* harmony import */ var _assets_scripts_fix_line__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_fix_line__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://test-for-mirea/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png */ \"./src/assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/pictures/Kormann--Plastics.png */ \"./src/assets/images/pictures/Kormann--Plastics.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/pictures/5218291.png */ \"./src/assets/images/pictures/5218291.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Document</title>\\n  </head>\\n  <body>\\n    <header class=\\\"header\\\">\\n      <nav class=\\\"header__nav nav\\\">\\n        <div class=\\\"burger-menu\\\">\\n          <span class=\\\"burger__icon\\\"></span>\\n          <span class=\\\"burger__icon burger__icon_pseudo\\\"></span>\\n        </div>\\n        <ul class=\\\"nav__list\\\">\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"\\\" class=\\\"nav__link\\\">Мореведческие организации</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"\\\" class=\\\"nav__link\\\">Научный флот Минобрнауки России</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"\\\" class=\\\"nav__link\\\">Морские экспедиционные исследования</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"\\\" class=\\\"nav__link\\\">Подготовка специалистов</a>\\n          </li>\\n          <li class=\\\"nav__item\\\">\\n            <a href=\\\"\\\" class=\\\"nav__link\\\">Статистика (Центр ЕСИМО)</a>\\n          </li>\\n        </ul>\\n        <button class=\\\"nav__entry-btn\\\" type=\\\"button\\\">Войти</button>\\n      </nav>\\n      <div class=\\\"header-main\\\">\\n        <div class=\\\"h1__background\\\"></div>\\n        <h1 class=\\\"header-main__title\\\">\\n          10-летие ООН <span class=\\\"gradient-text\\\">наук об океане</span>\\n        </h1>\\n        <h2 class=\\\"header-main__subtitle\\\">\\n          Океан, который нам нужен, для будущего, которого мы хотим\\n        </h2>\\n        <div class=\\\"header-main__content\\\">\\n          <h2 class=\\\"header-main__slider-title h2__title\\\">НОВОСТИ</h2>\\n          <div class=\\\"header-main__slider\\\">\\n            <div class=\\\"header-main__slider_inner\\\">\\n              <div class=\\\"header-slider__item header-slider__item_1\\\"></div>\\n              <div\\n                class=\\\"header-slider__item header-slider__item_2 header-slider__item_active\\\"\\n              ></div>\\n              <div class=\\\"header-slider__item header-slider__item_3\\\"></div>\\n              <!-- <div class=\\\"header-slider__item header-slider__item_4\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_5\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_6\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_7\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_8\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_9\\\"></div>\\n              <div class=\\\"header-slider__item header-slider__item_10\\\"></div> -->\\n            </div>\\n          </div>\\n          <a href=\\\"#\\\" class=\\\"slide-title\\\"\\n            >В. В. Путин утвердил Морскую доктрину и Корабельный устав ВМФ</a\\n          >\\n          <div class=\\\"header-main__slider-btns slider-btns\\\">\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"slider-btns__btn-left round-btn\\\"\\n            ></button>\\n            <div class=\\\"slider-counter\\\">\\n              <span class=\\\"slider-counter__slide-number\\\">1</span>/<span\\n                class=\\\"slider-counter__slides\\\"\\n                >4</span\\n              >\\n            </div>\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"slider-btns__btn-right round-btn\\\"\\n            ></button>\\n          </div>\\n        </div>\\n      </div>\\n    </header>\\n    <section class=\\\"documents\\\">\\n      <h2 class=\\\"h2__title\\\">Документация</h2>\\n      <div class=\\\"documents__links-block\\\">\\n        <div class=\\\"documents__links\\\">\\n          <div class=\\\"documents__subtitle h3__title\\\">История</div>\\n          <ul class=\\\"documents__links-list\\\">\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\">Повестка 2030 и ЦУР </a>\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Возникновение идеи о Десятилетии</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Заседания ГА ООН с вопросом о Десятилетии</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Работа различных структур по подготовке Десятилетия</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Рассмотрение вопросов по Десятилетию на Ассамблее и\\n                Исполсоветах МОК ЮНЕСКО</a\\n              >\\n            </li>\\n          </ul>\\n        </div>\\n        <div class=\\\"documents__links\\\">\\n          <div class=\\\"documents__subtitle h3__title\\\">В мире</div>\\n          <ul class=\\\"documents__links-list\\\">\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Принятие и начало реализации Плана действий по Десятилетию</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\">Призывы к действиям</a>\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Национальные комитеты государств-членов МОК ЮНЕСКО</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Координационные структуры Десятилетия</a\\n              >\\n            </li>\\n          </ul>\\n        </div>\\n        <div class=\\\"documents__links\\\">\\n          <div class=\\\"documents__subtitle h3__title\\\">В России</div>\\n          <ul class=\\\"documents__links-list\\\">\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Вопрос о Десятилетии на МНОК\\n              </a>\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\">\\n                Участие России в Призывах к действиям МОК</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Разработка национального плана действий – «Целей и основных\\n                направлений действий …»</a\\n              >\\n            </li>\\n            <li class=\\\"documents__item\\\">\\n              <a href=\\\"#\\\" class=\\\"documents__link\\\"\\n                >Цели и основные направления действий, их связь с ожидаемыми\\n                результатами Десятилетия\\n              </a>\\n            </li>\\n          </ul>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"actions\\\">\\n\\n      <h2 class=\\\"actions__title h2__title\\\">ОКЕАН, КОТОРЫЙ МЫ ИМЕЕМ</h2>\\n      <div class=\\\"actions__pictures pictures\\\">\\n        <div class=\\\"container\\\">\\n          <img\\n            class=\\\"pictures__item_1\\\"\\n            loading=\\\"lazy\\\"\\n            decoding=\\\"async\\\"\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n            alt=\\\"\\\"\\n          />\\n          <div class=\\\"line\\\"></div>\\n        </div>\\n        <img\\n          class=\\\"pictures__item_2\\\"\\n          loading=\\\"lazy\\\"\\n          decoding=\\\"async\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n          alt=\\\"\\\"\\n        />\\n        <img\\n          class=\\\"pictures__item_3\\\"\\n          loading=\\\"lazy\\\"\\n          decoding=\\\"async\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n          alt=\\\"\\\"\\n        />\\n      </div>\\n      <div class=\\\"actions-content\\\">\\n        <div class=\\\"actions-content__img actions-content__img_1\\\"></div>\\n        <div class=\\\"actions-content__description\\\">\\n          <h2 class=\\\"actions-content__title h2__title\\\">\\n            Общие задачи десятилетия\\n          </h2>\\n          <div class=\\\"actions-content__list\\\">\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">01.</span>\\n              <div class=\\\"actions-content__text\\\">\\n                Определение знаний, необходимых для устойчивого развития\\n              </div>\\n            </div>\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">02.</span>\\n\\n              <div class=\\\"actions-content__text\\\">\\n                Накопление исчерпывающих знаний и формирование всеобъемлющего\\n                представления о Мировом океане\\n              </div>\\n            </div>\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">03.</span>\\n              <div class=\\\"actions-content__text\\\">\\n                Расширение масштабов применения научных знаний об океане\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"actions-content__img actions-content__img_2\\\"></div>\\n        <div class=\\\"actions-content__description\\\">\\n          <h2 class=\\\"actions-content__title h2__title\\\">\\n            Деятельность в рамках десятилетия\\n          </h2>\\n          <div class=\\\"actions-content__list\\\">\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">01.</span>\\n              <div class=\\\"actions-content__text\\\">Программы</div>\\n            </div>\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">02.</span>\\n              <div class=\\\"actions-content__text\\\">Проекты</div>\\n            </div>\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">03.</span>\\n              <div class=\\\"actions-content__text\\\">Мероприятия</div>\\n            </div>\\n            <div class=\\\"actions-content__item\\\">\\n              <span class=\\\"actions-content__number\\\">04.</span>\\n              <div class=\\\"actions-content__text\\\">Оказание поддержки</div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"goals\\\">\\n\\n      <h2 class=\\\"goals__h2-title\\\">Океан, который нам нужен</h2>\\n      <div class=\\\"goals__list\\\">\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_right-float  number-line\\\">\\n            01\\n            <div class=\\\"goals__line\\\"></div>\\n          </div>\\n          <div class=\\\"goals__content\\\">\\n            <h2 class=\\\"goals__title\\\">1. Чистый океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              в котором источники загрязнения идентифицированы, посчитаны и\\n              сокращены, а загрязнители удалены из океана эффективным способом.\\n              Комплексные исследования позволят оценить среднесрочные и\\n              долгосрочные риски для человека и окружающей среды, исходящие от\\n              нынешних и будущих типов загрязнения, а также найти новые\\n              возможности сократить нагрузку на океан.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_01\\\"></div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_left-float\\\">02</div>\\n          <div class=\\\"goals__img goals__img_02 goals__img_order-1\\\"></div>\\n          <div class=\\\"goals__content goals__content_order-3\\\">\\n            <h2 class=\\\"goals__title\\\">\\n              2. Экологически благополучный и жизнеспособный океан\\n            </h2>\\n            <div class=\\\"goals__text goals__text_right\\\">\\n              в котором морские экосистемы нанесены на карту и защищены, а\\n              многочисленные виды воздействия на них, включая изменение климата,\\n              количественно оценены и по возможности сокращены. При этом\\n              продолжится разумное и выгодное использование океанических\\n              экосистем. Десятилетие будет способствовать проведению детального\\n              описания воздействия множественных стресс-факторов на океан,\\n              экосистемы и ресурсы. То есть сбору информации, необходимой для\\n              принятия мер против деградации океанской экосистемы. Более\\n              подробное изучение и оценка экономического и социального значения\\n              океана и его экосистем также поможет стимулировать планирование\\n              использования морского пространства и управления охраняемыми\\n              морскими районами, а также прибрежной зоной.\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_right-float\\\">03</div>\\n          <div class=\\\"goals__content\\\">\\n            <h2 class=\\\"goals__title\\\">3. Предсказуемый океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              чьи текущие характеристики мы понимаем, и можем прогнозировать\\n              будущие условия существования человека. Знание существующих и\\n              будущих условий – предпосылка развития устойчивой политики в\\n              отношении океана и управления, ориентированного на экосистемы.\\n              Более подробный и полный учет океанических процессов должен помочь\\n              значительно улучшить предсказуемость климата. Многое ожидается от\\n              прогресса в области океанической робототехники и сочетания\\n              дистанционных и локальных методов наблюдения за океаном.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_03\\\"></div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_left-float\\\">04</div>\\n          <div class=\\\"goals__content goals__content_order-3\\\">\\n            <h2 class=\\\"goals__title\\\">4. Безопасный океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              в котором человек намного лучше защищен и где обеспечивается его\\n              безопасная деятельность на воде и на суше. Десятилетие будет\\n              содействовать исследованиям, направленным на минимизацию\\n              воздействия изменений и снижение рисков через адаптацию и\\n              смягчение негативных последствий. Во всех бассейнах будут\\n              развиваться интегрированные системы предупреждения об опасностях,\\n              повысится уровень готовности к океанским рискам и\\n              информированность населения. Эта область исследования будет\\n              представлять собой большой интерес для сферы страхования.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_order-1 goals__img_04\\\"></div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_right-float\\\">05</div>\\n          <div class=\\\"goals__content\\\">\\n            <h2 class=\\\"goals__title\\\">5. Продуктивный океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              обеспечивающий питание и альтернативные средства существования\\n              человека. Десятилетие должно улучшить понимание механизмов\\n              взаимодействия и взаимозависимости океанических экосистем,\\n              экологических условий и процессов, использования ресурсов и\\n              экономических аспектов. В контексте развития экономики океана\\n              основная задача – документировать потенциальное воздействие\\n              экологических изменений на существующие и зарождающиеся морские\\n              отрасли промышленности и их способность обеспечивать экономический\\n              рост. Это особенно важно для наименее развитых стран и малых\\n              островных развивающихся государств.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_05\\\"></div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_left-float\\\">06</div>\\n          <div class=\\\"goals__content goals__content_order-3\\\">\\n            <h2 class=\\\"goals__title\\\">6. Доступный океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              когда все заинтересованные стороны имеют доступ к данным об океане\\n              и информационным технологиям, а также обладают компетенцией для\\n              принятия решений. Кроме этого, необходимо развивать связи между\\n              наукой и политикой. Открытый доступ к информации об океане,\\n              активное взаимодействие академического сообщества и гражданского\\n              общества и повышение общей океанической грамотности должны\\n              укрепить ответственность граждан и заинтересованных сторон в\\n              отношении использования океана и его ресурсов.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_order-1 goals__img_06\\\"></div>\\n        </div>\\n        <div class=\\\"goals__item\\\">\\n          <div class=\\\"goals__number goals__number_left-float\\\">07</div>\\n          <div class=\\\"goals__content\\\">\\n            <h2 class=\\\"goals__title\\\">7. Вдохновляющий океан</h2>\\n            <div class=\\\"goals__text\\\">\\n              вдохновляющий и влекущий к себе океан, понимаемый и ценимый\\n              обществом в качестве источника благосостояния человека и фактора\\n              устойчивого развития.\\n            </div>\\n          </div>\\n          <div class=\\\"goals__img goals__img_07\\\"></div>\\n        </div>\\n      </div>\\n    </section>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://test-for-mirea/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://test-for-mirea/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-for-mirea/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./src/assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png":
/*!*************************************************************************!*\
  !*** ./src/assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png\";\n\n//# sourceURL=webpack://test-for-mirea/./src/assets/images/pictures/13a23468703a4740cadecbe4646af7f7.png?");

/***/ }),

/***/ "./src/assets/images/pictures/5218291.png":
/*!************************************************!*\
  !*** ./src/assets/images/pictures/5218291.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pictures/5218291.png\";\n\n//# sourceURL=webpack://test-for-mirea/./src/assets/images/pictures/5218291.png?");

/***/ }),

/***/ "./src/assets/images/pictures/Kormann--Plastics.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/pictures/Kormann--Plastics.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/pictures/Kormann--Plastics.png\";\n\n//# sourceURL=webpack://test-for-mirea/./src/assets/images/pictures/Kormann--Plastics.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;