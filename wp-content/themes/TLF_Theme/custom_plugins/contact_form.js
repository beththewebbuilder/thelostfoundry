const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
    ['core/group', { className: 'contact-image no-padding' }, [
        ['core/heading', {}],
        ['core/paragraph', {}]
    ]]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/contact-form', {
    // built-in attributes
    title: 'Contact Form',
    description: 'Pre-designed contact form drop-in',
    icon: 'email-alt',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions

      return ([

        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="contact-form-container-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Contact-form.png"/>
          <InnerBlocks 
            allowedBlocks={ ALLLOWED_BLOCKS } 
            template={ BLOCK_TEMPLATE } 
            templateLock={false}
            templateInsertUpdatesSelection={false}
            renderAppender={ InnerBlocks.DefaultBlockAppender }
          />    
        </div>
      ]);
    },

    save: ({ attributes }) => {

      return (
        <div class={"contact-form-container container"}>
            <div class="row">
                <div class="col-md-6">
                <InnerBlocks.Content />
                <div class="contact-map">
                    <iframe
                        style="border:0"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_80g1ScQI5sCEb1vaTFJ2XxnO8ENn-ag
                            &q=place_id:ChIJOe4AaEmGbUgRP4FKwrysWY0">
                    </iframe>
                </div>
                </div>
                <div class="col-md-6">
                    <form id="contactForm" method="POST">
                        <div class="form-group">
                            <label>Your Name*</label>
                            <input id="name" type="text" name="firstname" class="form-control name-input" required="required" data-error="Please enter your name."></input>
                        </div>
                        <div class="form-group">
                            <label>Your Email*</label>
                            <input id="email" type="email" name="email" class="form-control" required="required" data-error="Please enter your email address."></input>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group" id="help-input">
                            <label>How can I help you?*</label>
                            <input id="help" type="text" name="help" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>How can we help?*</label>
                            <textarea class="form-control" placeholder="Add any extra information or message here..." rows="5" cols="30" id="message" name="message" required="required"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Captcha* (Just to prove you're a real person):</label>
                            <div>3 + 2 =</div>
                            <input id="captcha" type="text" name="captcha" class="form-control" required="required"></input>
                        </div>
                        <p>
                            <em>By submitting this form you are agreeing to receive marketing communications from The Lost Foundry via email.</em>
                        </p>
                        <div class="success-msg">🎉 Thank you for your email! We will get back to you as soon as possible</div>
                        <div class="error-msg"><i class="far fa-sad-tear"></i> Oh no, your email didn't send! Have you filled out all the fields? Try again or send us an email instead to <a href="mailto:rich@thelostfoundry.co.uk">rich@thelostfoundry.co.uk</a>.</div>
                        <button type="submit" class="btn btn-custom" id="submit-contact-form">
                            <span class="send-email">Send Email</span>
                            <span class="sending-email"><div class="lds-ripple"><div></div><div></div></div> Sending...</span>
                            <span class="sent-email"><i class="far fa-check-circle"></i> Sent!</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      );
    }
});
