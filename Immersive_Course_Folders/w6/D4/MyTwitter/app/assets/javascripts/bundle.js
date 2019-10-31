/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const APIUtil = {
    
    followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
    unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, status) => (
        $.ajax({
            method: `${status}`,
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    ),

    searchUsers: (queryVal) => (
        $.ajax({
            method: 'GET',
            url: '/users/search',
            data: { queryVal },
            dataType: 'json'
        })
    ),

    createTweet: (obj) => (
        $.ajax({
            method: 'POST',
            dataType: 'json',
            data: obj,
            url: '/tweets'
        })
    ),

    fetchTweets: (timeInfo) => (
        $.ajax({
            method: 'GET',
            url: '/feed',
            dataType: 'json',
            data: timeInfo
        })
    )

};

module.exports = APIUtil;


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
    constructor(el, opt) {
        this.$el = $(el);
        this.userId = $el.data("user-id") || opt.userId;
        this.followState = $el.data("initial-follow-state") || opt.followState;
        
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        switch(this.followState) {
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.html('Follow!');
                break;
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.html('Unfollow!');
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

/***/ }),

/***/ "./frontend/infinite_tweets.js":
/*!*************************************!*\
  !*** ./frontend/infinite_tweets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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

/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APTUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class TweetCompose {
    constructor(frm) {
        this.$frm = $(frm);
        this.$inp = this.$frm.find("textarea[name=tweet\\[content\\]]");
        this.$mentionBtn = this.$frm.find('.mention-btn');
        this.$mentionsUl = this.$frm.find('.mention-helper');
        
        this.$mentionsUl.on('click', '.remove-mentioned-user', this.rmMentionedUsr.bind(this));
        this.$mentionBtn.on('click', this.setupMentions.bind(this));
        this.$inp.on('input', this.handleInput.bind(this));
        this.$frm.on('submit', this.submit.bind(this));
    }

    newUserSelect() {
        const usersInps = window.users.map((usr) => `<option value='${usr.id}'>${usr.username}</option>`).join('');

        const html = `
        <div>
            <select name='tweet[mentioned_user_ids][]'>
                ${usersInps}
            </select>

            <button class="remove-mentioned-user">Remove</button>
        </div>`;
        return $(html);
    }

    setupMentions(event) {
        event.preventDefault();

        this.$mentionsUl.append(this.newUserSelect());
    }

    rmMentionedUsr(event) {
        event.preventDefault();
        $(event.currentTarget).parent().remove();
    }

    handleInput(event) {
        const inputLength = this.$inp.val().length;

        this.$frm.find('.chars-left').text(`${140 - inputLength} characters left`);
    }

    clearInput() {
        this.$frm.find("textarea[name=tweet\\[content\\]]").val(''); //WRKS
        this.$mentionsUl.empty();
        this.$frm.find(':input').prop('disabled', false);
    }

    handleSuccess(resObj) {
        const $tweetsUl = $(this.$frm.data('tweets-ul'));
        $tweetsUl.trigger('insert-tweet', resObj);
        
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


/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");
const TweetCompose = __webpack_require__(/*! ./tweet_compose.js */ "./frontend/tweet_compose.js");
const InfiniteTweets = __webpack_require__(/*! ./infinite_tweets.js */ "./frontend/infinite_tweets.js");

$(function () {
    $('div.infinite-tweets').each((idx, dv) => new InfiniteTweets(dv));
    $('form.tweet-compose').each((idx, frm) => new TweetCompose(frm) );
    $('nav.users-search').each((idx, nv) => new UsersSearch(nv) );
    $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$inp = this.$el.find('input[name=username]');
        this.$ul = this.$el.find('ul.users');

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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map