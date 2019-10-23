const APTUtil = require('./api_util');

class TweetCompose {
    constructor(frm) {
        this.$frm = $(frm);
        this.$inp = this.$frm.find("textarea[name=tweet\\[content\\]]")
        
        this.$inp.on('input', this.handleInput.bind(this));
        this.$frm.on('submit', this.submit.bind(this));
    }

    handleInput(event) {
        const inputLength = this.$inp.val().length;

        this.$frm.find('.chars-left').text(`${140 - inputLength} characters left`);
    }

    clearInput() {
        this.$frm.find("textarea[name=tweet\\[content\\]]").val('');
        this.$frm.find('select').empty(); // in theory this will uncheck the <opt>s
    }

    handleSuccess(data) {
        const $tweetsUl = this.$frm.data('tweets-ul');
        const $li = $('<li></li>');
        $li.val(data);
        $tweetsUl.append($li);

        this.clearInput();
        this.$frm.find(':input').prop('disabled', false);
    }

    submit(event) {
        event.preventDefault();

        const argObj = this.$frm.serializeJSON(); 

        this.$frm.find(':input').prop('disabled', true);

        APTUtil.createTweet(argObj).then(railsRes => this.handleSuccess(railsRes))
    }

}

module.exports = TweetCompose;

