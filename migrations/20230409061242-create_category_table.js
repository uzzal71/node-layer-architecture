module.exports = {
    async up(db) {
        await db.createCollection('categories', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['name', 'slug', 'createdAt'],
                    properties: {
                        parent_id: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        name: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        slug: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        index: {
                            bsonType: 'number',
                            description: 'must be a number and is required',
                        },
                        createdAt: {
                            bsonType: 'date',
                            description: 'must be a date and is required',
                        },
                        updatedAt: {
                            bsonType: 'date',
                            description: 'must be a date',
                        },
                    },
                },
            },
        });
    },

    async down(db) {
        await db.dropCollection('categories');
    },
};
