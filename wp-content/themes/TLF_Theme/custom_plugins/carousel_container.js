const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', { className: "slider-content" }, [
    ['core/image', { className: "no-padding" }],
  ] ]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/carousel-container', {
    // built-in attributes
    title: 'Image Caroursel',
    description: 'Vertical scrolling carousel of images',
    icon: 'images-alt',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
      showArrows: {
        type: 'boolean',
        default: true
      },
      autoScroll: {
        type: 'boolean',
        default: false
      },
      scrollTime: {
        type: 'number',
        default: 2000
      },
      pauseScrollOnHover: {
        type: 'boolean',
        default: false
      },
      imageSize: {
        type: 'boolean',
        default: false
      },
      imageHeight: {
        type: 'string',
        default: 'one-quarter-height'
      },
      scrollArrowColour: {
        type: 'string',
        default: '#ffffff'
      },
      imagesToShow: {
        type: 'number',
        default: 1
      },
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions
      function onChangeShowArrows( showArrowsValue ) {
        setAttributes( { showArrows: showArrowsValue } );
      }
      function onChangeAutoScroll( autoScrollValue ) {
        setAttributes( { autoScroll: autoScrollValue } );
      }
      function onChangeScrollTime( scrollTimeValue ) {
        setAttributes( { scrollTime: parseInt(scrollTimeValue) } );
      }
      function onChangeHoverPause( pauseScrollValue ) {
        setAttributes( { pauseScrollOnHover: pauseScrollValue } );
      }
      function onSetImageHeight( imageHeight ) {
        setAttributes( { imageHeight: imageHeight } );
      }
      function onArrowColourChange( newColour ) {
        setAttributes( { scrollArrowColour: newColour } )
      }
      function onChangeImagesToShow( imagesToShowValue ) {
        setAttributes( { imagesToShow: parseInt(imagesToShowValue) } );
      }

      return ([
        <InspectorControls style={ { marginBottom: '40px'} }>
          <PanelBody title={'Carousel Settings'}>
            
            <PanelRow>
              <CheckboxControl
                label="Show arrows"
                checked={ attributes.showArrows }
                onChange={ onChangeShowArrows }/>
            </PanelRow>
            {
              attributes.showArrows &&
              <div>
                <label class="custom-label">Select an arrow colour</label>
                <br/>
                <PanelRow>
                  <ColorPalette 
                    label="Arrow scroll colour"
                    value={ attributes.scrollArrowColour }
                    onChange={ onArrowColourChange }/>
                </PanelRow>
              </div>
            }
            <PanelRow>
              <CheckboxControl
                label="Auto scroll elements"
                checked={ attributes.autoScroll }
                onChange={ onChangeAutoScroll }/>
            </PanelRow>
            {
              attributes.autoScroll &&
              <PanelRow>
                <TextControl
                label="Auto scroll autoplay speed (ms)"
                value={ attributes.scrollTime }
                type="number"
                onChange={ onChangeScrollTime }/>
              </PanelRow>
            }
            {
              attributes.autoScroll &&
              <PanelRow>
              <CheckboxControl
                label="Pause scroll on hover"
                checked={ attributes.pauseScrollOnHover }
                onChange={ onChangeHoverPause }/>
              </PanelRow>
            }

            <PanelRow>
                <SelectControl
                    label="Slides to show"
                    value={ attributes.imagesToShow }
                    options={[
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    ]}
                    onChange={ onChangeImagesToShow }
                />
            </PanelRow>
            <PanelRow>
                <SelectControl
                  label="Media size"
                  value={ attributes.imageHeight }
                  options={[
                    { label: 'Full screen', value: 'full-screen' },
                    { label: '19/20 height', value: 'ninty-five-percent-height' },
                    { label: '3/4 height', value: 'three-quarter-height' },
                    { label: '1/2 height', value: 'half-height' },
                    { label: '1/4 height', value: 'one-quarter-height' },
                  ]}
                  onChange={ onSetImageHeight }
                />
              </PanelRow>

          </PanelBody>
        </InspectorControls>,

        <div class="carousel-container-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Carousel.png"/>
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
        <div class={"carousel-container"} data-show-arrows={attributes.showArrows} 
        data-auto-scroll={attributes.autoScroll} 
        data-scroll-time={attributes.scrollTime}
        data-pause-scroll={attributes.pauseScrollOnHover} 
        data-image-size={attributes.imageHeight}
        data-arrow-colour={attributes.scrollArrowColour}
        data-images-to-show={attributes.imagesToShow}>
          <InnerBlocks.Content />
        </div>
      );
    }
});
