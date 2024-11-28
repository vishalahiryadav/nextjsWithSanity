const schema = {
    name: 'resourcePlaylist',
    title: 'Resource playlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "resource",
            title: 'Resources',
            type: 'array',
            of: [
                { type: 'reference', to: [{ type: 'resource' }] }
            ]
        }
    ]
}

export default schema;