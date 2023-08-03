const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', { className: 'accordian-content-flex'}, [
    ['core/paragraph', { className: 'dropdown-text-content' }],
    ['tlf-plugins/carousel-container', { className: 'image-carousel' }],
    ['tlf-plugins/video-container', { className: 'video-container' }],
  ] ]
];

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
        },
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions
      function onSetDropdownTitle( dropdownTitleValue ) {
        setAttributes( { dropdownTitle: dropdownTitleValue } );
      }
      function onChangeShowImage( showImageDropdownValue ) {
        setAttributes( { showImageDropdown: showImageDropdownValue } );
      }
      function onSetImage( image ) {
        setAttributes( { image_url: image.url, image_id: image.id } );
      }
      function clearImage() {
        setAttributes( { image_id: 0, image_url: '' } );
      }

      return ([
        <InspectorControls style={ { marginBottom: '40px'} }>
            <PanelBody title={'Dropdown Title'}>
              <PanelRow>
                  <TextControl 
                  label="Dropdown Title"
                  value={ attributes.dropdownTitle }
                  onChange={ onSetDropdownTitle }/>
              </PanelRow>
              <PanelRow>
                <CheckboxControl
                  label="Show image as dropdown"
                  checked={ attributes.showImageDropdown }
                  onChange={ onChangeShowImage }/>
              </PanelRow>
              {
                attributes.showImageDropdown &&
                <div>
                  <label class="custom-label">Image</label><br/>
                  {
                    attributes.image_id != 0 &&
                    <div class="selected-media-container">
                      <img class="panel-display-image" src={attributes.image_url}/>
                    </div>
                  }
                  <MediaUploadCheck>
                    <MediaUpload
                      title={ 'Select background image' }
                      value={ attributes.image_id }
                      onSelect={ onSetImage }
                      allowedTypes={ ['image'] }
                      render={ ({open}) => (
                        <button onClick={open} isDefault isLarge>
                          { attributes.image_id == 0 ? 'Choose an image' : 'Replace image'}
                        </button>
                      )}/>
                  </MediaUploadCheck>
                  {
                    attributes.image_id != 0 && 
                    <button 
                      onClick={ clearImage }
                      class="reset-image-btn">
                      Clear
                    </button>
                  }
                </div>
              }
            </PanelBody>
        </InspectorControls>,

        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="accordion-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Content.png"/>
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
        <div class="accordion accordion-flush" id={"accordion" + attributes.dropdownTitle.replace(/\ /g, "")}>
            <div class="accordion-item">
                <h3 class={"accordion-header" + (attributes.showImageDropdown ? " image-accordian-drop" : "")} id={"heading-" + attributes.dropdownTitle.replace(/\ /g, "")}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + attributes.dropdownTitle.replace(/\ /g, "")} aria-expanded="false" aria-controls={"collapse-" + attributes.dropdownTitle.replace(/\ /g, "")}>
                    {(attributes.link_url == '' || attributes.link_url == null) &&
                      <img src={attributes.image_url}/>}
                      <div class="dropdown-title">
                        {attributes.dropdownTitle}
                      </div>
                    </button>
                </h3> 
                <div id={"collapse-" + attributes.dropdownTitle.replace(/\ /g, "")} class="accordion-collapse collapse" aria-labelledby={"heading-" + attributes.dropdownTitle.replace(/\ /g, "")} data-bs-parent={"#accordion" + attributes.dropdownTitle.replace(/\ /g, "")}>
                  <div class="container">
                    <InnerBlocks.Content />
                  </div>
                </div>
            </div>
        </div>
      );
    }
});