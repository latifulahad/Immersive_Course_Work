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
        
        APIUtil.searchUsers(this.$inp.val()).then(resObj => this.renderResults(resObj)); 
    }
    
    renderResults(resObj) {
        this.$ul.empty();
        const $wntUl = this.$ul;

        for(let i = 0; i < resObj.length; i++) {
            const $a = $('<a></a>');
            $a.text(`${resObj[i].username}`);
            $a.attr('href', `/users/${resObj[i].id}`);
            
            const $btn = $('<button></button>');
            new FollowToggle($btn, {
                userId: resObj[i].id,
                followState: resObj[i].followed ? 'followed' : 'unfollowed'
            });
            
            const $li = $('<li></li>');
            $li.append($a);
            $li.append($btn);
            $wntUl.append($li);
        } 
    }

}

module.exports = UsersSearch;
