import moment from 'moment'

export default class Todo {
    constructor(content = '', date = moment()) {
        this.content = content
        this.date = date
    }
}