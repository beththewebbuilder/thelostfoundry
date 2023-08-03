const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group', 'core/paragraph'];
const BLOCK_TEMPLATE = [
    ['core/group', {}, [
        ['core/heading', { placeholder: 'Question', className: 'faq-question'}],
        ['core/paragraph', { placeholder: 'The answer goes here...', className: 'faq-answer'}],
    ] ]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/faq-item', {
    // built-in attributes
    title: 'FAQ',
    description: 'An FAQ plugin to show questions and answers',
    icon: 'editor-help',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions

      return ([
        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="faq-container-block custom-block">
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
        <div class={"faq-container"}>
          <InnerBlocks.Content />
        </div>
      );
    }
});
