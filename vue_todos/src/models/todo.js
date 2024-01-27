import moment from "moment"

const toDateStr = d => moment(d).format('YYYY-MM-DD')
const toDateStrCN = d => moment(d).format('YYYY年M月D日')

class Todo {
  constructor(name = null) {
    this.name = name
    this.done = false

    this._date = new Date()
  }

  get date() {
    return toDateStr(this._date)
  }

  get cDate() {
    return toDateStrCN(this._date)
  }

  get isToday() {
    return toDateStr(new Date()) === this.date
  }

  get isOverdue() {
    return this.date < toDateStr(new Date())
  }

  set date(d) {
    this._date = new Date(d)
  }
}

export default Todo