const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/columns'];
const BLOCK_TEMPLATE = [
  [ 'core/columns', {}, [
    [ 'core/column', {}, [
        [ 'core/group', { className: "quad-image-button-item" }, [
          [ 'core/image', {className: "no-padding"} ],
          [ 'core/button', { className: "absolute-cover" } ],  
        ] ],
        [ 'core/group', { className: "quad-image-button-item" }, [
          [ 'core/image', {className: "no-padding"} ],
          [ 'core/button', { className: "absolute-cover" } ],  
        ] ]
    ] ],
    [ 'core/column', {}, [
      [ 'core/group', { className: "quad-image-button-item" }, [
        [ 'core/image', {className: "no-padding"} ],
        [ 'core/button', { className: "absolute-cover" } ],  
      ] ],
      [ 'core/group', { className: "quad-image-button-item" }, [
        [ 'core/image', {className: "no-padding"} ],
        [ 'core/button', { className: "absolute-cover" } ],  
      ] ]
    ] ],
] ]
];

//'namespace/block-slug'
registerBlockType('jfv-plugins/quad-image-button', {
    // built-in attributes
    title: 'Quad Image Buttons',
    description: 'Add 4 different buttons/links with image backgrounds',
    icon: 'grid-view',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions

      return ([
        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="quad-image-button-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Quad-Image-Button.png"/>
          <InnerBlocks 
            allowedBlocks={ ALLLOWED_BLOCKS } 
            template={ BLOCK_TEMPLATE } 
            templateLock="all"
            templateInsertUpdatesSelection={false}
            renderAppender={ InnerBlocks.DefaultBlockAppender }
          />
        </div>
      ]);
    },

    save: ({ attributes }) => {

      return (
        <div class={"quad-image-button-group"}>
          <InnerBlocks.Content />
        </div>
      );
    }
});
