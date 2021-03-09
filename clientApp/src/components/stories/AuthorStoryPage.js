import React from 'react';
import { connect } from 'react-redux';
import * as storyActions from '../../redux/actions/storyActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class AuthorStoryPage extends React.Component {
    state = {
        story: {
            title: 'Once upon a time...',
            content: ''
        },
    };

    constructor(props) {
        super(props);
    }

    handleChange = (evt) => {
        const story = { ...this.state.story, title: evt.target.value };
        this.setState({ story });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.state.story.content = document.getElementById('body1').innerText;
        this.props.actions.createStory(this.state.story);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Author a new story</h2>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.story.title}
                />
                <input type='submit' value='Save' />
                <div contentEditable id='body1' className='author-body-text'></div>
            </form>
        );
    }
}

AuthorStoryPage.propTypes = {
    actions: PropTypes.object.isRequired,
};

function mapStateToProps({ stories }) {
    return {
        stories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(storyActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorStoryPage);
