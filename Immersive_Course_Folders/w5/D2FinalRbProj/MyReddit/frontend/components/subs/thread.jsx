import React from 'react';
import { Link, Route } from 'react-router-dom';

class Thread extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.bringThread(id);
    }

    render() {
        let thrd = this.props.thread;
        let posts = this.props.post
        let kys = Object.keys(posts);
        let postLk

        this.props.user ? postLk = <Link to={`/thread/${this.props.match.params.id}/post`}>Make a Post</Link> : postLk;

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
                        return (<li key={pst.id}><Link to={`/thread/${pst.link}/post/${pst.id}`} >{pst.title}</Link></li>)
                    }) }
                </ul>
                    <br></br>
                {postLk}
            </div>
        )   
    }   
} 

export default Thread;