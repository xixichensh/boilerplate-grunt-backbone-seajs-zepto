/**
 * Created by Administrator on 2016/7/5.
 */
define(function(require, exports, module) {
    const common = require('common'); //一些常用参数
    const viewHelper = require('viewhelper');
    const bodyView = $("body");

    const IndexView = Backbone.View.extend({

        el: "#indexView",

        events: {

        },

        templates: {

        },

        initialize: function() {
            const _this = this;

            _this.render();
        },

        render: function() {
            const _this = this;

            _this.$el.data("isload","true");
        }

    });

    module.exports = IndexView;
});