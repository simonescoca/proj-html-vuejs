import {reactive} from 'vue';
const store = reactive ({
    datum1: "",
    datum2: ""
});

export {store}


// Per importare:
// # import {store} from "./path"
// # data() {
// #     return {
// #        store
// #     }
// # },