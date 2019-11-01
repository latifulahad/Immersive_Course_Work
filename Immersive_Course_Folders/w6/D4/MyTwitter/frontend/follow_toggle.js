const APIUtil = require('./api_util');

class FollowToggle {
    constructor(el, opt) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id") || opt.userId;
        this.followState = this.$el.data("initial-follow-state") || opt.followState;
        
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        switch(this.followState) {
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.text('Follow!');
                break;
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.text('Unfollow!');
                break;
            case 'following':
                this.$el.prop('disabled', true);
                this.$el.html('Following...');
                break;
            case 'unfollowing':
                this.$el.prop('disabled', true);
                this.$el.html('Unfollowing...');
                break;
         } 
    }

    handleClick(event) {
        event.preventDefault();
        const thisTag = this;

        if(this.followState === "unfollowed") {
            this.followState = 'following';
            this.render();
            APIUtil.followUser(this.userId).then(() => { 
                thisTag.followState = "followed";
                thisTag.render();
            })
        } else {
            this.followState = 'unfollowing';
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
                thisTag.followState = "unfollowed";
                thisTag.render();
            })
        }
    }

}

module.exports = FollowToggle;