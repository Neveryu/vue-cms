/**
 * 表单校验函数
 * 1、只写有必要的
 * 2、不写没必要的
 */

import { userMap } from '@/mock/modules/user'

/**
 * 登录时的用户名验证
 * @Author   Author
 * @DateTime 2020-10-16T13:18:25+0800
 * @param    {[string]}                 str [description]
 * @return   {Boolean}                    [description]
 */
export const validateUsername = (rule, value, callback) => {
  const usernameMap = Object.keys(userMap)
  if (!usernameMap.includes(value.trim())) {
    callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}

/**
 * pwd 验证
 */

export const validatePwd = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码不能小于6位'))
  } else {
    callback()
  }
}

// 身份证
export const checkIdCard = async (rule, value, callback) => {
  //  if (!Number(value)) {
  //    callback(new Error('请输入数字值'))
  //  }

  if (!value) {
    return callback(new Error('身份证不能为空'))
  } else {
    let idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    if (!idcardReg.test(value)) {
      callback(new Error('身份证不合法'))
    } else {
      //  let res = await checkUserIdCard(value)
      //  if (eval(res.data)) {
      //    return callback(new Error('用户身份证号码被占用，请重新输入'))
      //  }
      if (this.information.userSex) {
        let age = value.toString().substring(value.toString().length - 2)
        if (this.information.userSex == 1 && age % 2 == 1) {
          return callback()
        } else if (this.information.userSex == 2 && age % 2 == 0) {
          return callback()
        } else {
          return callback(new Error('身份验证异常，请检查重新输入'))
        }
      } else {
        return callback()
      }
    }
  }
}

// 手机号
export const checkPoliceNumber = (rule, value, callback) => {
  function checkTel(tel) {
    let mobile = /^1[3|5|8]\d{9}$/,
      phone = /^0\d{2,3}-?\d{7,8}$/
    return mobile.test(tel) || phone.test(tel)
  }

  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else {
    if (!checkTel(value)) {
      return callback(new Error('号码输入格式错误'))
    } else {
      let show = this.phoneNumberList.indexOf(value)
      if (show == -1) {
        this.phoneNumberList.unshift(value)
      }
      return callback()
    }
  }
}

// 邮箱
export const checkMailBox = async (rule, value, callback) => {
  if (!value) {
    return callback(new Error('邮箱不能为空'))
  } else {
    let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!reg.test(value)) {
      return callback(new Error('邮箱格式不正确，请重新输入'))
    } else {
      // let res = await checkUserMailBox(value)
      let res = {
        data: 1,
      }
      if (eval(res.data)) {
        return callback(new Error('邮箱被占用，请重新输入'))
      } else {
        return callback()
      }
    }
  }
}

// 户籍所在地
export const checkDomicilePlace = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('户籍所在地不能为空'))
  } else {
    return callback()
  }
}
