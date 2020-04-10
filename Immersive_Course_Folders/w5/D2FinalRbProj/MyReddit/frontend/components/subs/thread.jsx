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

    handleDelete(evt) {
        evt.preventDefault();

        this.props.removePost(evt.target.value);
    }

    render() {
        let thrd = this.props.thread;
        let posts = this.props.post
        let kys = Object.keys(posts);
        let postLk, rmBttn

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
                        if(pst.author_id === this.props.usrId) { rmBttn = <button value={pst.id} style={{paddingLeft: 10}} onClick={this.handleDelete}>DELETE</button> }

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