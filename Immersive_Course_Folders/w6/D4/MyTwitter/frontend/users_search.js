const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$inp = this.$el.find('input[name=username]');
        this.$ul = this.$el.find('.users');

        this.$inp.on('input', this.handleInput.bind(this));
    }

    handleInput(event) {
        if (this.$inp.val() === '') {
            this.renderResults([]);
            return;
        }
        
        APIUtil.searchUsers(this.$inp.val()).then(resObj => this.renderResults(resObj).bind(this)); 
        //the .then() isn't firing as axpected!!!
    }
    
    renderResults(resObj) {
        this.$ul.empty();
        
        resObj.forEach(usr => {
            const $a = $('<a></a>');
            $a.text(`${usr.username}`);
            $a.attr('href', `/users/${usr.id}`);
            const $li = $('<li></li>');

            const $btn = $('<button></button>');
            new FollowToggle($btn, { userId: usr.id, followState: usr.followed ? 'followed' : 'unfollowed' });

            $li.append($a);
            $li.append($btn);
            this.$ul.append($li);
        }) 
    }

}

module.exports = UsersSearch;
