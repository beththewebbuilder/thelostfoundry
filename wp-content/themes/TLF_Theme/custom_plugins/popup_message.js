const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', {}, [
    ['core/heading', {placeholder: 'Popup heading, e.g. Sign Up Now!'}],
    ['core/paragraph', {placeholder: 'Extra details, e.g. Subscribe to our newsletter for 10% off your first bronze casting'}],
  ] ]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/popup-message', {
    // built-in attributes
    title: 'Popup Message',
    description: 'Add a popup message to the page.',
    icon: 'admin-comments',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
        buttonTitle: {
            type: 'string',
            default: 'Submit'
        },
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions
      function onChangeButtonTitle( buttonTitleValue ) {
        setAttributes( { buttonTitle: buttonTitleValue } );
      }

      return ([
        <InspectorControls style={ { marginBottom: '40px' } }>
            <PanelBody title={'Button Title'}>
                <PanelRow>
                    <TextControl 
                    label="Button Title"
                    value={ attributes.buttonTitle }
                    onChange={ onChangeButtonTitle }/>
                </PanelRow>
            </PanelBody>
        </InspectorControls>,

        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="popup-message-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Content.png"/>
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
        <div class={"container popup-message"}>
            <div class="close-popup"><i class="fa-solid fa-xmark"></i></div>
          <InnerBlocks.Content />
          <form id="subscribeForm" method="POST">
            <div class="input-group mb-3">
                <input type="text" id="email" class="form-control" placeholder="Your email address" aria-label="Subscribers email address" aria-describedby="Email address input"/>
                <div class="input-group-append">
                    <button class="btn btn-custom" id="subscribe-form" type="submit">{attributes.buttonTitle}</button>
                </div>
            </div>
          </form>
        </div>
      );
    }
});
