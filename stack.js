(function (name, definition) {

    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function';

    // 检测上下文环境是否为Node
    var hasExports = typeof module === 'object' && module.exports;

    if (hasDefine) { // AMD环境或CMD环境
        define(definition);
    } else if (hasExports) { // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }

})('Stack', function () {

    function Stack() {
        this.dataStore = []; // 保存栈内元素，初始化为一个空数组
        this.top = 0; // 栈顶位置，初始化为0

        this.push = function (element) {
            this.dataStore[this.top++] = element;
        }

        this.pop = function () {
            return this.dataStore[--this.top];
        }

        this.peek = function () {
            return this.dataStore[this.top - 1];
        }

        this.clear = function () {
            this.top = 0;
        }

        this.size = function () {
            return this.top;
        }

        this.empty = function () {
            return this.top === 0;
        }
    }

    return Stack;
});