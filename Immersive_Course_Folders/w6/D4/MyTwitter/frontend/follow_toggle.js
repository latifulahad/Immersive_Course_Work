class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        switch(this.followState) {
            case 'unfollowed':
                this.$el.html('Follow!');
                break;
            case 'followed':
                this.$el.html('Unfollow!');
                break;
         } 
    }

    handleClick(event) {
        event.preventDefault();
        const thisTag = this;

        if(this.followState === "unfollowed") {
            $.ajax({ 
                method: 'POST',
                url: `/users/${thisTag.userId}/follow`,
                dataType: 'json' 
            }).then(() => { 
                thisTag.followState = "followed";
                thisTag.render();
            })
        } else {
            $.ajax({ 
                method: 'DELETE', 
                url: `/users/${thisTag.userId}/follow`,
                dataType: 'json' 
            }).then(() => {
                thisTag.followState = "unfollowed";
                thisTag.render();
            })
        }
    }

}

module.exports = FollowToggle;