/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Add self links to headings\n$('h2[id],h3[id],h4[id],h5[id],h6[id]').append(function() {\n  return '<a class=\"heading-link\" href=\"#' + this.id + '\">#</a>';\n});\n\n// Enable Popovers\n$('[data-toggle=\"popover\"]').popover();\n\n// Enable Tooltips\n$('[data-toggle=\"tooltip\"]').tooltip();\n\n// function: Enable custom file browser\nfunction enableCustomFileBrowser(id) {\n  $('#' + id).on('change', function(event) {\n    $('[for=\"' + id + '\"]').text($(this).prop('files')[0].name);\n  });\n}\n\n// Enable custom file browser (Forms)\n['validatedCustomFile',\n 'custom-file',\n 'custom-file-en',\n 'custom-file-ja',\n 'custom-file-es'].forEach(function(id) { enableCustomFileBrowser(id); });\n\n// Enable custom file browser(Input groups)\n[1, 2, 3, 4].forEach(function(n) {\n  enableCustomFileBrowser('inputGroupFile' + n);\n});\n\n// Dropdown: Active/disabled states demo\n$('#active-disabled-example').delegate('a', 'click', function(event) {\n  var item = $(this);\n  event.preventDefault();                   // prevent default link behaviors\n  if (item.hasClass('disabled')) return;    // implement disabled behaviors\n  // update the active item\n  $('#active-disabled-example a').removeClass('active');\n  item.addClass('active');\n  $('#active-indicator').text(item.text());\n});\n\n// Forms: Validation\n$('.needs-validation').on('submit', function(event) {\n  if (!this.checkValidity()) {\n    event.preventDefault();\n    event.stopPropagation();\n  }\n  $(this).addClass('was-validated');\n});\n\n// Modal: Varying modal content\n$('#examplemodal').on('show.bs.modal', function (event) {\n  var button = $(event.relatedTarget);\n  var recipient = button.data('whatever');\n  var modal = $(this);\n  modal.find('.modal-title').text('New message to ' + recipient);\n  modal.find('.modal-body input').val(recipient);\n});\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });