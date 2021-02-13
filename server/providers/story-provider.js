const collections = require('../types/collections');
const db = require('../db');
const collection = db.getCollection(collections.STORIES);

class StoryProvider {
    async add(story) {

        try{

            const storyDoc = {
                    'title': story.title,
                    'date': story.date,
                    'description': story.description,
                    'paragraphs': [ ...story.paragraphs ]
                };

            const s = await collection.insertOne(storyDoc);
        } catch (e) {
            console.error('Error inserting story into db: ', e);
        }
    }
}

module.exports = StoryProvider;