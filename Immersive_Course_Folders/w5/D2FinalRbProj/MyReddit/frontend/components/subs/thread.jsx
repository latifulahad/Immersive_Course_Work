import React from 'react';
import { Link, Route } from 'react-router-dom';

class Thread extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.bringThread(id);
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.match.params.id !== this.props.match.id) {
    //         let id = this.props.match.params.id;
    //         this.props.bringThread(id);
    //     }
    // } NEEDS WORK

    handleDelete(evt) {
        evt.preventDefault();

        this.props.removePost(evt.target.value);
    }

    render() {
        let thrd = this.props.thread;
        let posts = this.props.post
        let kys = Object.keys(posts);
        let userID = this.props.usrId;
        let postLk

        this.props.user ? postLk = <Link to={`/thread/${this.props.match.params.id}/post`}>Make a Post</Link> : postLk;

        return(
            <div className="content-thread">
                <h2>Description</h2>
                <p>{thrd.description} by {thrd.author}</p>
                    <br></br>
                <ul className="content-post-links">
                    <p>Posts</p>
                    { kys.map(ky => {
                        let rmBttn;
                        let pst = posts[ky];
                        if(pst.author_id === userID) { rmBttn = <button value={pst.id} style={{paddingLeft: 10}} onClick={this.handleDelete}>DELETE</button> }

                        return (<li key={pst.id}>
                            <Link to={`/thread/${pst.link}/post/${pst.id}`} >{pst.title}</Link>
                            {rmBttn}
                            </li>
                        )
                      }) 
                    }
                </ul>
                    <br></br>
                {postLk}
            </div>
        )   
    }   
} 

export default Thread;