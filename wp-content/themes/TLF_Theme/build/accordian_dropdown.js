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
const BLOCK_TEMPLATE = [['core/group', {
  className: 'accordian-content-flex'
}, [['core/paragraph', {
  className: 'dropdown-text-content'
}], ['tlf-plugins/carousel-container', {
  className: 'image-carousel'
}], ['tlf-plugins/video-container', {
  className: 'video-container'
}]]]];

//'namespace/block-slug'
registerBlockType('tlf-plugins/accordian-dropdown', {
  // built-in attributes
  title: 'Dropdown Container',
  description: 'Add content inside a dropdown, this can just have a title or an image as well.',
  icon: 'arrow-down-alt2',
  category: 'thelostfoundry',
  // custom attributes
  attributes: {
    dropdownTitle: {
      type: 'string',
      default: ''
    },
    showImageDropdown: {
      type: 'boolean',
      default: false
    },
    image_url: {
      type: 'string',
      default: null
    },
    image_id: {
      type: 'number',
      default: 0
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
    function onChangeShowImage(showImageDropdownValue) {
      setAttributes({
        showImageDropdown: showImageDropdownValue
      });
    }
    function onSetImage(image) {
      setAttributes({
        image_url: image.url,
        image_id: image.id
      });
    }
    function clearImage() {
      setAttributes({
        image_id: 0,
        image_url: ''
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show image as dropdown",
      checked: attributes.showImageDropdown,
      onChange: onChangeShowImage
    })), attributes.showImageDropdown && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      class: "custom-label"
    }, "Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), attributes.image_id != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "selected-media-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      class: "panel-display-image",
      src: attributes.image_url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      title: 'Select background image',
      value: attributes.image_id,
      onSelect: onSetImage,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, attributes.image_id == 0 ? 'Choose an image' : 'Replace image')
    })), attributes.image_id != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: clearImage,
      class: "reset-image-btn"
    }, "Clear")))),
    // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "accordion-block custom-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Dropdown-Container.png"
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
      class: "accordion accordion-flush" + (attributes.showImageDropdown ? " image-accordian-flex" : ""),
      id: "accordion" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "accordion-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      class: "accordion-header" + (attributes.showImageDropdown ? " image-accordian-drop" : ""),
      id: "heading-" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      class: "accordion-button collapsed",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#collapse-" + attributes.dropdownTitle.replace(/\ /g, ""),
      "aria-expanded": "false",
      "aria-controls": "collapse-" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (attributes.link_url == '' || attributes.link_url == null) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.image_url
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "dropdown-title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "title-container"
    }, attributes.dropdownTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "hover-text"
    }, "Click to find out more")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "collapse-" + attributes.dropdownTitle.replace(/\ /g, ""),
      class: "accordion-collapse collapse",
      "aria-labelledby": "heading-" + attributes.dropdownTitle.replace(/\ /g, ""),
      "data-bs-parent": "#accordion" + attributes.dropdownTitle.replace(/\ /g, "")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "close-modal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa-solid fa-xmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "large-screen-title"
    }, attributes.dropdownTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)))));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=accordian_dropdown.js.map