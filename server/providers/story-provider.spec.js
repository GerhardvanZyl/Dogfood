const { MongoMemoryServer } = require('mongodb-memory-server');
const collections = require('../types/collections');
const StoryProvider = require('./story-provider');
const db = require('../db');
const collection = db.getCollection(collections.STORIES);


describe('story-provider', ()=>{
    
    let mongoServer;
    let provider;

    beforeAll(() => {
        provider = new StoryProvider();
        mongoServer = new MongoMemoryServer({
            port: 27017,
            ip: '127.0.0.1',
        });
    });

    afterAll(async (done) => {
        await mongoServer.stop();
    });

    describe('add', ()=>{
        it('should add a single story to the DB', async ()=>{

            const story = {
                'title': 'This is a test story',
                'date': '23 Jan 2021',
                'description': 'This story will just be a story that I use to test',
                'paragraphs': [
                    'This is the first paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'This is the Second paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'This is the third paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
            };

            provider.add(story);

            const retrievedValue = await collection.findOne();

            console.log(retrievedValue);

            expect(retrievedValue.title).toEqual(story.title);
            expect(retrievedValue.date).toEqual(story.date);
            expect(retrievedValue.description).toEqual(story.description);
            expect(retrievedValue.paragraphs[0]).toEqual(story.paragraphs[0]);
            expect(retrievedValue.paragraphs[1]).toEqual(story.paragraphs[1]);
            expect(retrievedValue.paragraphs[2]).toEqual(story.paragraphs[2]);
        });
    });

});
