import { Edit } from './edit.js';
import { Save } from './save.js';

const { registerBlockType } = wp.blocks;
const { getBlockDefaultClassName } = wp.blockEditor;

const { TextControl, CheckboxControl } = wp.components;
const { useState } = wp.element;

registerBlockType( 'kinescope/embed-video', {
    title: 'Kinescope Video',
    name: 'Kinescope Video',
    icon: 'embed-twitter',
    category: 'embed',
    parent: ['core/embed'],
    attributes: {
        email: {
            type: 'string',
            default: ''
        },
        includeEmail: {
            type: 'boolean',
            default: false
        },
    },
    edit: (props) => {
        const [email, setEmail] = useState(props.attributes.email);
        const [includeEmail, setIncludeEmail] = useState(props.attributes.includeEmail);

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
    className: getBlockDefaultClassName( 'core/embed' ),
} );
