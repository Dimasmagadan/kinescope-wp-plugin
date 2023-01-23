import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';
import * as blockData from '../plugin/block/block.json';
// // import { Edit } from './edit.js';
// // import { Save } from './save.js';



import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { ToggleControl } from '@wordpress/components';

// const { getBlockDefaultClassName } = wp.blockEditor;

const { addFilter } = wp.hooks;

console.log('loaded12' );

registerBlockVariation(
    'core/embed',
    {
        title: blockData.title,
        name: blockData.name,
        icon: blockData.icon,
        category: blockData.category,
        attributes: blockData.attributes,
        isActive: (blockAttributes, variationAttributes) => blockAttributes.providerNameSlug === 'kinescope',
        description: blockData.description,
        edit: (props) => {
            const [email, setEmail] = useState(props.attributes.email);
            const [includeEmail, setIncludeEmail] = useState(props.attributes.includeEmail);
console.log('editor')
            return (
                <div>
                    <CheckboxControl
                        label="Include email in URL"
                        checked={includeEmail}
                        onChange={setIncludeEmail}
                    />
                    <TextControl
                        label="Email"
                        value={email}
                        onChange={setEmail}
                    />
                    <InnerBlocks />
                </div>
            );
        },
        save: (props) => {
            const url = props.attributes.url;
            const email = props.attributes.email;
            const includeEmail = props.attributes.includeEmail;

            if (includeEmail) {
                url = `${url}?email=${email}`;
            }

            return (
                <div>
                    <a href={url}>{url}</a>
                </div>
            );
        },
        // className: getBlockDefaultClassName( 'core/embed' ),
    }
);




/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
// function addAttributes(settings, name) {

//     console.log('settings', settings, name);

//     return settings;
// }

// addFilter(
//     'blocks.registerBlockType',
//     'kinescope/modify-embed',
//     addAttributes
// );
