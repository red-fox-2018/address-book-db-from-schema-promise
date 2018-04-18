
class View {
  static showList(list) {
    console.log('Show list');
    for (let l of list) {
      console.log(l);
    }
  }
  static showString(line) {
    console.log(line);
  }
  static showOne(array) {
    console.log(array);
  }
}

module.exports = View;