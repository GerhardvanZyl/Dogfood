import React from 'react';
import { connect } from 'react-redux';

class StoriesPage extends React.Component {
    state = {
        story: {
            title: 'My Story',
            content: 'nothing',
        },
        //redirectToStoryPage: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* {this.state.redirectToStoryPage && <Redirect to="/Story"/>} */}
                <div>
                    <h2>Stories</h2>
                    {this.props.stories.map((story) => (
                        // <div key={story.title} onClick={()=> this.setState({redirectToStoryPage})}>{story.title}</div>
                        <div key={story.title}>
                            <h3>{story.title}</h3>
                            <div>{story.content}</div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories,
    };
}

export default connect(mapStateToProps)(StoriesPage);
