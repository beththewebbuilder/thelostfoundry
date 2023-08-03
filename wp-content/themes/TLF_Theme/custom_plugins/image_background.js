const { registerBlockType } = wp.blocks;
const { MediaUpload, InspectorControls, InnerBlocks, RichText, MediaUploadCheck, ColorPalette } = wp.blockEditor;
const { PanelBody, PanelRow, TextControl, SelectControl, CheckboxControl } = wp.components;

// inner content settings
const ALLLOWED_BLOCKS = ['core/group'];
const BLOCK_TEMPLATE = [
  ['core/group', {}, [
    ['core/image', { className: 'no-padding' }],
    ['core/group', { className: 'image-background-content absolute-cover' }, [
        ['core/group', { className: 'content-center center-transform' }, [
            ['core/heading'],
            ['core/button'],
        ]]
    ]]
]]];

//'namespace/block-slug'
registerBlockType('tlf-plugins/image-background', {
    // built-in attributes
    title: 'Image Background with Button',
    description: 'A full width image as background with a heading and button on the top.',
    icon: 'format-image',
    category: 'thelostfoundry',

    // custom attributes
    attributes: {
        containerHeight: {
            type: 'string',
            default: 'one-quarter-height'
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
        <PanelBody title={'Image Container Settings'}>
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
        <div class="image-background-block custom-block">
          <img src="https://buildnbloom.co.uk/wp-content/uploads/2023/08/TLF-Image-Button.png"/>
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
        <div class={"image-background"} data-container-height={attributes.containerHeight}>
          <InnerBlocks.Content />
        </div>
      );
    }
});
