const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', {}, [
    ['core/paragraph', { placeholder: 'Review content, e.g. Just Amazing', className: 'review-content' }],
    ['core/paragraph', { placeholder: 'Reviewer name, e.g. Joe Bloggs', className: 'reviewer-name' }]
  ] ]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/review-item', {
    // built-in attributes
    title: 'Review',
    description: 'Review item to add to review carousel, or alternatively used alone.',
    icon: 'format-quote',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions

      return ([
        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="review-container-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Review-Item.png"/>
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
        <div class={"review-container"}>
          <InnerBlocks.Content />
        </div>
      );
    }
});
