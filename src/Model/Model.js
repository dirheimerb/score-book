"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
        this.get = this.attributes.get;
        this.on = this.events.on;
        this.trigger = this.events.trigger;
    }
    Model.prototype.set = function (update) {
        this.attributes.set(update);
        this.events.trigger('change');
    };
    Model.prototype.fetch = function () {
        var _this = this;
        var id = this.attributes.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch user without ID');
        }
        else {
            this.sync.fetch(id).then(function (response) {
                _this.set(response.data);
            });
        }
    };
    Model.prototype.save = function () {
        var _this = this;
        this.sync
            .save(this.attributes.getAll())
            .then(function (response) {
            _this.trigger('save');
        })
            .catch(function () {
            _this.trigger('error');
        });
    };
    return Model;
}());
exports.Model = Model;
