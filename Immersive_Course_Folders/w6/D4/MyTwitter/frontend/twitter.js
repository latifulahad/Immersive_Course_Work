const FollowToggle = require('./follow_toggle.js');

$(() => {
    $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn));
}) 
