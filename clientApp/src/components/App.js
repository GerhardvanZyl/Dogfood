import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './home/HomePage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import StoriesPage from './stories/StoriesPage';
import AuthorStoryPage from './stories/AuthorStoryPage';

function App() {
    return (
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/story' component={StoriesPage} />
                <Route path='/authorstory' component={AuthorStoryPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
