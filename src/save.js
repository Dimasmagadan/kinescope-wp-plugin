const Save = ( props ) => {
    const url = props.attributes.url;
    const email = props.attributes.email;
    const includeEmail = props.attributes.includeEmail;

    if ( includeEmail ) {
        url = `${url}?email=${email}`;
    }

    return (
        <div>
            <a href={url}>{url}</a>
        </div>
    );
};
