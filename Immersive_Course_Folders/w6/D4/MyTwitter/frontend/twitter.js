const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');
const InfiniteTweets = require('./infinite_tweets.js');

$(function () {
    $('div.infinite-tweets').each((idx, dv) => new InfiniteTweets(dv));
    $('form.tweet-compose').each((idx, frm) => new TweetCompose(frm) );
    $('nav.users-search').each((idx, nv) => new UsersSearch(nv) );
    $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});
