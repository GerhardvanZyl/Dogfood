import * as types from './actionTypes'

export function createStory(story) {
    return {type: types.CREATE_STORY, story}
}
