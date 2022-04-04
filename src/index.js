"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList_1 = require("./views/UserList");
var Collection_1 = require("./models/Collection");
var User_1 = require("./models/User");
var users = new Collection_1.Collection('http://localhost:3000/users', function (json) {
    return User_1.User.buildUser(json);
});
users.on('change', function () {
    var root = document.getElementById('root');
    if (root) {
        var userlist = new UserList_1.UserList(root, users);
        userlist.render();
    }
    else {
        throw new Error('Cannot fetch user list');
    }
});
users.fetch();
