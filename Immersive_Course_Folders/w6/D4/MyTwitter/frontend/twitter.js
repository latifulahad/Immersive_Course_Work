const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$(() => {
    $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
    $('nav.users-search').each((idx, nv) => new UsersSearch(nv) );
    $('form.tweet-compose').each((idx, frm) => new TweetCompose(frm) );
}) 
