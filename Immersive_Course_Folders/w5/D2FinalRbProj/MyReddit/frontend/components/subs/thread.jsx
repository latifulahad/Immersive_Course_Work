import React from 'react';
import { Link, Route } from 'react-router-dom';

import PostContainer from '../posts/post_container';

class Thread extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.bringThread(id);
    }

    render() {
        let thrd = this.props.thread;
        let posts = this.props.post
        let kys = Object.keys(posts);
        
        return(
            <div className="content-thread">
                <h2>Description</h2>
                <p>{thrd.description} by {thrd.author}</p>
                    <br></br>
                <ul className="content-post-links">
                    Posts
                        <br></br>
                    { kys.map(ky => {
                        let pst = posts[ky];
                        return(<li><Link to={`/thread/${pst.link}/post/${pst.id}`} key={pst.id} >{pst.title}</Link></li>)
                    }) }
                </ul>
                
                <Route path="/thread/:id/post/:postId" component={PostContainer} />
            </div>
        )   
    }   
} 

export default Thread;