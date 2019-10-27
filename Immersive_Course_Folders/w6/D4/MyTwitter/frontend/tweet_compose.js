const APTUtil = require('./api_util');

class TweetCompose {
    constructor(frm) {
        this.$frm = $(frm);
        this.$inp = this.$frm.find("textarea[name=tweet\\[content\\]]");
        this.$mentionBtn = this.$frm.find('.mention-btn');
        this.$mentionsUl = this.$frm.find('.mention-helper');
        
        this.$mentionBtn.on('click', this.setupMentions.bind(this));
        this.$inp.on('input', this.handleInput.bind(this));
        this.$frm.on('submit', this.submit.bind(this));
    }

    newUserSelect() {
        const usersInps = window.users.map((usr) => `<option value='${usr.id}'>${usr.username}</option>`).join('');

        const html = `
        <select name='tweet[mentioned-users-ids][]'>
            ${usersInps}
        </select>`;

        return $(html);
    }

    setupMentions(event) {
        event.preventDefault();

        this.$mentionsUl.append(this.newUserSelect());
    }

    handleInput(event) {
        const inputLength = this.$inp.val().length;

        this.$frm.find('.chars-left').text(`${140 - inputLength} characters left`);
    }

    clearInput() {
        this.$frm.find("textarea[name=tweet\\[content\\]]").val(''); //WRKS
        this.$frm.find('select').empty(); // in theory this will uncheck the <opt>s
        this.$frm.find(':input').prop('disabled', false);
    }

    handleSuccess(data) {
        const $tweetsUl = $(this.$frm.data('tweets-ul'));
        const $li = $('<li></li>');
        const contnt = JSON.stringify(data);
        $li.text(contnt);
        $tweetsUl.append($li);
        
        this.clearInput(); //WRKS
    }

    submit(event) {
        event.preventDefault();

        const argObj = this.$frm.serializeJSON(); 

        this.$frm.find(':input').prop('disabled', true);

        APTUtil.createTweet(argObj).then(railsRes => this.handleSuccess(railsRes));
    }

}

module.exports = TweetCompose;
