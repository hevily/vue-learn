// 1、起步
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! QinBin '
    }
})

// 2、声明式渲染
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})

// 3、条件与循环
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: "学习 Javascript"
        }, {
            text: "学习 Vue"
        }, {
            text: "整个牛项目"
        }]
    }
})

// 4、处理用户输入
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Vue!"
    }
})

// 5、组件化应用构建
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    // template: '<li>这是个代办项</li>'
    // todo-item 类似于一个自定义特性。
    // 这个 prop 名为 todo
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: '蔬菜'
            },
            {
                id: 1,
                text: '奶油'
            },
            {
                id: 2,
                text: '可乐'
            },
        ]
    }
})