const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/video'];
const BLOCK_TEMPLATE = [
  ['core/video']
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/autoplay-video', {
    // built-in attributes
    title: 'Autoplay Video',
    description: 'Add a short local video to autoplay on page load. Originally designed to go at the top of the homepage. This should be imported as a small file.',
    icon: 'video-alt3',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
      containerHeight: {
        type: 'string',
        default: 'full-screen'
      },
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions
      function onSetContainerHeight( containerHeightValue ) {
        setAttributes( { containerHeight: containerHeightValue } );
      }

      return ([
        <InspectorControls style={ { marginBottom: '40px'} }>
          <PanelBody title={'Video Settings'}>
            <PanelRow>
                <SelectControl
                  label="Media size"
                  value={ attributes.containerHeight }
                  options={[
                    { label: 'Full screen', value: 'full-screen' },
                    { label: '3/4 height', value: 'three-quarter-height' },
                    { label: '1/2 height', value: 'half-height' },
                    { label: '1/4 height', value: 'one-quarter-height' },
                  ]}
                  onChange={ onSetContainerHeight }
                />
              </PanelRow>
          </PanelBody>
        </InspectorControls>,

        // templateLock: enforces rules on what the user is allowed to change. 'All' - disabled user control, 'Insert' - change order but no deleting or inserting, 'False' - off
        <div class="autoplay-video-container-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/07/JFV-Video.png"/>
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
        <div class="autoplay-video" data-video-height={attributes.containerHeight}>
            <InnerBlocks.Content />
        </div>
      );
    }
});
