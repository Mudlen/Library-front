Vue.component('base-row', {
    props: ['file'],
    template: '<div><i>{{ file.id }}</i> {{ file.text }}</div>'
});

Vue.component('base-list', {
    props: ['files'],
    template: '<div> <base-row v-for="file in files" :file="file" /> </div>'
});

var app = new Vue({
    el: '#app',
    template: '<base-list :files="files" />',
    data: {
        files: [
            { id: '1', text: 'first text' },
            { id: '2', text: 'second text' },
            { id: '3', text: 'third text' }
        ]
    }
});