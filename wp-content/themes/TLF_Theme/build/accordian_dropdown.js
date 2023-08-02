/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./custom_plugins/accordian_dropdown.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  InspectorControls,
  InnerBlocks,
  RichText,
  MediaUploadCheck,
  ColorPalette
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
  CheckboxControl
} = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [['core/group', {}, [['core/paragraph', {
  className: 'dropdown-text-content container'
}], ['tlf-plugins/carousel-container'], ['tlf-plugins/video-container']]]];

//'namespace/block-slug'
registerBlockType('tlf-plugins/accordian-dropdown', {
  // built-in attributes
  title: 'Dropdown Container',
  description: 'Add content to the page with a gap along the sides. All content such as images and text should be inside this container.',
  icon: 'editor-insertmore',
  category: 'thelostfoundry',
  // custom attributes
  attributes: {
    dropdownTitle: {
      type: 'string',
      default: ''
    }
  },
  // built-in functions
  edit: ({
    attributes,
    setAttributes
  }) => {
    // custom functions
    function onSetDropdownTitle(dropdownTitleValue) {
      setAttributes({
        dropdownTitle: dropdownTitleValue
      });
    }
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Dropdown Title'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Dropdown Title",
      value: attributes.dropdownTitle,
      onChange: onSetDropdownTitle
    })))),
    // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "accordion-block custom-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Content.png"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: ALLLOWED_BLOCKS,
      template: BLOCK_TEMPLATE,
      templateLock: false,
      templateInsertUpdatesSelection: false,
      renderAppender: InnerBlocks.DefaultBlockAppender
    }))];
  },
  save: ({
    attributes
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "accordion accordion-flush",
      id: "accordion" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "accordion-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      class: "accordion-header",
      id: "heading-" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      class: "accordion-button collapsed",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapse-" + attributes.dropdownTitle.replace(/\ /g, ""),
      "aria-expanded": "false",
      "aria-controls": "collapse-" + attributes.dropdownTitle.replace(/\ /g, "")
    }, attributes.dropdownTitle)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "collapse-" + attributes.dropdownTitle.replace(/\ /g, ""),
      class: "accordion-collapse collapse",
      "aria-labelledby": "heading-" + attributes.dropdownTitle.replace(/\ /g, ""),
      "data-bs-parent": "#accordion" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null))));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=accordian_dropdown.js.map