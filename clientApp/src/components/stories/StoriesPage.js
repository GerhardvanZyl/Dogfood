import React from 'react';
import { connect } from 'react-redux';

class StoriesPage extends React.Component {
    state = {
        story: {
            title: 'My Story',
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Stories</h2>
                {this.props.stories.map((story) => (
                    <div key={story.title}>{story.title}</div>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps)(StoriesPage);
