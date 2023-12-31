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
  !*** ./custom_plugins/video_container.js ***!
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
const BLOCK_TEMPLATE = [['core/group', {}, [['core/image', {
  className: 'no-padding'
}]]]];

//'namespace/block-slug'
registerBlockType('tlf-plugins/video-container', {
  // built-in attributes
  title: 'Video',
  description: 'Add a vdeo with a placeholder image and a play button. When clicked the video opens out and starts to play in a pop-up.',
  icon: 'format-video',
  category: 'thelostfoundry',
  // custom attributes
  attributes: {
    youTubeId: {
      type: 'string',
      default: 'fAgwXjR-lRQ?si=R0R29rG2_zb2nOMb'
    },
    containerHeight: {
      type: 'string',
      default: 'full-screen'
    }
  },
  // built-in functions
  edit: ({
    attributes,
    setAttributes
  }) => {
    // custom functions
    function onYouTubeIdChange(videoIdValue) {
      var trimedVideoId = videoIdValue.replace("https://youtu.be/", "");
      setAttributes({
        youTubeId: trimedVideoId
      });
    }
    function onSetContainerHeight(containerHeightValue) {
      setAttributes({
        containerHeight: containerHeightValue
      });
    }
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Video Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "YouTube ",
      value: attributes.youTubeId,
      onChange: onYouTubeIdChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Media size",
      value: attributes.containerHeight,
      options: [{
        label: 'Full screen',
        value: 'full-screen'
      }, {
        label: '3/4 height',
        value: 'three-quarter-height'
      }, {
        label: '1/2 height',
        value: 'half-height'
      }, {
        label: '1/4 height',
        value: 'one-quarter-height'
      }],
      onChange: onSetContainerHeight
    })))),
    // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "video-container-block custom-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://buildnbloom.co.uk/wp-content/uploads/2023/10/TLF-YouTube-Video.png"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: ALLLOWED_BLOCKS,
      template: BLOCK_TEMPLATE,
      templateLock: "all",
      templateInsertUpdatesSelection: false,
      renderAppender: InnerBlocks.DefaultBlockAppender
    }))];
  },
  save: ({
    attributes
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "video-container-with-popup",
      "data-video-id": attributes.youTubeId,
      "data-video-height": attributes.containerHeight
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "play-icon center-transform"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa-solid fa-play"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "video-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "video-content-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "close-video"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa-solid fa-xmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/" + attributes.youTubeId,
      id: "video_" + attributes.youTubeId,
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: true
    }))));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=video_container.js.map