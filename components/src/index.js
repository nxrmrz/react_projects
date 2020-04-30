import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <h4>Warning!</h4>
            Are you sure you want to do this?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" text={faker.lorem.sentence()} avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:00pm" text={faker.lorem.sentence()} avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 2:00am" text={faker.lorem.sentence()} avatar={faker.image.avatar()}/></ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" text={faker.lorem.sentence()} avatar={faker.image.avatar()}/></ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector("#root"));