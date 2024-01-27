import moment from "moment"

export default class Todo {
    constructor() {
        this.task = ''
        this.date = moment().format('yyyy-MM-DD')
        this.isDone = false
    }
}