const APIUtil = {
    
    followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
    unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, status) => {
        $.ajax({
            method: `${status}`,
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    },

    searchUsers: (queryVal) => {
        $.ajax({
            method: 'GET',
            url: '/users/search',
            data: { queryVal },
            dataType: 'json'
        })
    },

    createTweet: (obj) => {
        $.ajax({
            method: 'POST',
            dataType: 'json',
            data: obj,
            url: '/tweets'
        })
    }

}

module.exports = APIUtil;
