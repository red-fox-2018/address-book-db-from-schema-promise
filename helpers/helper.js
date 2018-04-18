class Process {
  constructor() {

  }

  static checkPhoneNumber(phone){

    if (phone.length < 15) {
      return true
    } else {
      return false
    }

  }

  static checkEmail(email){

    if (email.indexOf("@") != -1 && email.indexOf(".") != -1) {

      if (email.indexOf("@") < email.lastIndexOf(".")) {

        return true

      } else {

        return false

      }

    } else {

      return false

    }

  }

}

module.exports = Process;
