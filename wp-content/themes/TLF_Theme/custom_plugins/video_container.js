const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
    ['core/group', {}, [
        ['core/image', { className: 'no-padding' }],
    ] ]
];

//'namespace/block-slug'
registerBlockType('tlf-plugins/video-container', {
    // built-in attributes
    title: 'Video',
    description: 'Add a vdeo with a placeholder image and a play button. When clicked the video opens out and starts to play in a pop-up.',
    icon: 'format-video',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
      youTubeId: {
        type: 'string',
        default: 'https://youtu.be/VkO_7eTE0hU?si=Rs9s5kpQhy8w54z9'
      },
      containerHeight: {
        type: 'string',
        default: 'full-screen'
      },
    },

    // built-in functions
    edit: ({ attributes, setAttributes }) => {

      // custom functions
      function onYouTubeIdChange( videoIdValue ) {
        var trimedVideoId = videoIdValue.replace("https://youtu.be/", "");
        setAttributes( { youTubeId: trimedVideoId } );
      }
      function onSetContainerHeight( containerHeightValue ) {
        setAttributes( { containerHeight: containerHeightValue } );
      }

      return ([
        <InspectorControls style={ { marginBottom: '40px'} }>
          <PanelBody title={'Video Settings'}>
            <PanelRow>
                <TextControl 
                label="Vimeo video Id"
                value={ attributes.youTubeId }
                onChange={ onYouTubeIdChange }/>
            </PanelRow>
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
        <div class="video-container-block custom-block">
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
        <div class="video-container-with-popup" data-video-id={attributes.youTubeId} data-video-height={attributes.containerHeight}>
            <InnerBlocks.Content />
            <div class="play-icon center-transform"><i class="fa-solid fa-play"></i></div>
            <div class="video-container">
              <div class="close-video"><i class="fa-solid fa-xmark"></i></div>
              <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + attributes.youTubeId} id={"video_" + attributes.youTubeId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
      );
    }
});
