const APIUtil = require('./api_util');

class InfiniteTweets {
    constructor(dv) {
        this.$div = $(dv);
        this.$wntUl = this.$div.find('#feed');
        this.$moreBtn = this.$div.find('.fetch-more');
        this.lastCreatedAt = null;

        this.$div.on('click', '.fetch-more', this.fetchTweets.bind(this));
        this.$wntUl.on('insert-tweet', this.insertTweet.bind(this));
    }

    insertTweet(event, trigData) {
        const $li = $('<li>');

        $li.text(JSON.stringify(trigData));
        this.$wntUl.append($li);

        this.lastCreatedAt = trigData.created_at;
    }

    insertTweets(resObj) {
        const $ul = this.$div.find('#feed');
        this.manageBtn(resObj);

        resObj.forEach(twet => {
            const $li = $('<li>');
            $li.text(JSON.stringify(twet));
            
            $ul.append($li);
        });

        this.lastCreatedAt = resObj[resObj.length - 1].created_at
    }

    fetchTweets(event) {
        event.preventDefault();
        const reqObj = this.lastCreatedAt !== null ? { max_created_at: this.lastCreatedAt } : {};

        APIUtil.fetchTweets(reqObj).then(resObj => this.insertTweets(resObj));
    }

    manageBtn(resObj) {
        if (resObj.length < 20) {
            this.$moreBtn.text('No More tweets!');
            this.$moreBtn.prop('disabled', true);
        } 
    }
}

module.exports = InfiniteTweets;