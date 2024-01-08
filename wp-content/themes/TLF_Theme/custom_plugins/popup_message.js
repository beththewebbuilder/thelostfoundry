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
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2024/01/TLF-Popup-Message.png"/>
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

          <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"/>
<div id="mc_embed_signup">
    <form action="https://apex-media.us8.list-manage.com/subscribe/post?u=7f93e36b9a64a83719d395c1d&amp;id=34b9b24ea7&amp;f_id=00137de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address</label>
            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""/>
          </div>
          <div hidden=""><input type="hidden" name="tags" value="4893856"/></div>
          <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
          <div aria-hidden="true" style="position: absolute; left: -5000px;">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_7f93e36b9a64a83719d395c1d_34b9b24ea7" tabindex="-1" value=""/>
        </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"/>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script></div>

        </div>
      );
    }
});
