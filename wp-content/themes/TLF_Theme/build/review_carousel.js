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
/*!*******************************************!*\
  !*** ./custom_plugins/review_carousel.js ***!
  \*******************************************/
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
const BLOCK_TEMPLATE = [['core/group', {
  className: "slider-content"
}, [['tlf-plugins/review-item']]]];

//'namespace/block-slug'
registerBlockType('tlf-plugins/review-carousel', {
  // built-in attributes
  title: 'Review Caroursel',
  description: 'Vertical scrolling carousel of review items',
  icon: 'format-quote',
  category: 'thelostfoundry',
  // custom attributes
  attributes: {
    showArrows: {
      type: 'boolean',
      default: true
    },
    autoScroll: {
      type: 'boolean',
      default: true
    },
    scrollTime: {
      type: 'number',
      default: 2000
    },
    pauseScrollOnHover: {
      type: 'boolean',
      default: true
    },
    scrollArrowColour: {
      type: 'string',
      default: '#ffffff'
    },
    imagesToShow: {
      type: 'number',
      default: 4
    }
  },
  // built-in functions
  edit: ({
    attributes,
    setAttributes
  }) => {
    // custom functions
    function onChangeShowArrows(showArrowsValue) {
      setAttributes({
        showArrows: showArrowsValue
      });
    }
    function onChangeAutoScroll(autoScrollValue) {
      setAttributes({
        autoScroll: autoScrollValue
      });
    }
    function onChangeScrollTime(scrollTimeValue) {
      setAttributes({
        scrollTime: parseInt(scrollTimeValue)
      });
    }
    function onChangeHoverPause(pauseScrollValue) {
      setAttributes({
        pauseScrollOnHover: pauseScrollValue
      });
    }
    function onArrowColourChange(newColour) {
      setAttributes({
        scrollArrowColour: newColour
      });
    }
    function onChangeImagesToShow(imagesToShowValue) {
      setAttributes({
        imagesToShow: parseInt(imagesToShowValue)
      });
    }
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Carousel Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show arrows",
      checked: attributes.showArrows,
      onChange: onChangeShowArrows
    })), attributes.showArrows && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      class: "custom-label"
    }, "Select an arrow colour"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      label: "Arrow scroll colour",
      value: attributes.scrollArrowColour,
      onChange: onArrowColourChange
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Auto scroll elements",
      checked: attributes.autoScroll,
      onChange: onChangeAutoScroll
    })), attributes.autoScroll && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Auto scroll autoplay speed (ms)",
      value: attributes.scrollTime,
      type: "number",
      onChange: onChangeScrollTime
    })), attributes.autoScroll && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Pause scroll on hover",
      checked: attributes.pauseScrollOnHover,
      onChange: onChangeHoverPause
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Slides to show",
      value: attributes.imagesToShow,
      options: [{
        label: '1',
        value: 1
      }, {
        label: '2',
        value: 2
      }, {
        label: '3',
        value: 3
      }, {
        label: '4',
        value: 4
      }, {
        label: '5',
        value: 5
      }, {
        label: '6',
        value: 1
      }, {
        label: '7',
        value: 2
      }, {
        label: '8',
        value: 3
      }, {
        label: '9',
        value: 4
      }, {
        label: '10',
        value: 5
      }],
      onChange: onChangeImagesToShow
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "review-carousel-container-block custom-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Review-Carousel.png"
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
      class: "review-carousel-container",
      "data-show-arrows": attributes.showArrows,
      "data-auto-scroll": attributes.autoScroll,
      "data-scroll-time": attributes.scrollTime,
      "data-pause-scroll": attributes.pauseScrollOnHover,
      "data-arrow-colour": attributes.scrollArrowColour,
      "data-images-to-show": attributes.imagesToShow
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=review_carousel.js.map