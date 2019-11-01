const APIUtil = {
    
    followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
    unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, status) => (
        $.ajax({
            method: `${status}`,
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    ),

    searchUsers: (query) => (
        $.ajax({
            method: 'GET',
            url: '/users/search',
            data: { query },
            dataType: 'json'
        })
    ),

    createTweet: (obj) => (
        $.ajax({
            method: 'POST',
            dataType: 'json',
            data: obj,
            url: '/tweets'
        })
    ),

    fetchTweets: (timeInfo) => (
        $.ajax({
            method: 'GET',
            url: '/feed',
            dataType: 'json',
            data: timeInfo
        })
    )

};

module.exports = APIUtil;
