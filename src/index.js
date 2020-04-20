import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard/>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="What were you thinking?!"
                avatar={Faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                content="This is genius"
                avatar={Faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                content="Never seen anything like this."
                avatar={Faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))