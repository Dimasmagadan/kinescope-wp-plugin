const { TextControl, CheckboxControl } = wp.components;
const { useState } = wp.element;

const Edit = ( props ) => {
    const [ email, setEmail ] = useState( props.attributes.email );
    const [ includeEmail, setIncludeEmail ] = useState( props.attributes.includeEmail );

    return (
        <div>
            <CheckboxControl
                label="Include email in URL"
                checked={ includeEmail }
                onChange={ setIncludeEmail }
            />
            <TextControl
                label="Email"
                value={ email }
                onChange={ setEmail }
            />
            <InnerBlocks />
        </div>
    );
};