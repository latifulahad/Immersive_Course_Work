export const findDaRtCmts = (comments, postId) => {
    let ans = [];
    comments.forEach(cmt => {
        cmt.post_id === postId ? ans.push(cmt) : true;
    })

    return ans;
}