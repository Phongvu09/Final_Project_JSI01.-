export function CheckEmail_2(email) {
    // regex hỗ trợ kiểm tra tính hợp của email
    expression = /(\W|^)[\w.+\-]*@mindx\.edu\.vn(\W|$)/
    if (expression.test(email) == true) {
        // email is good
        return true
    } else {
        //email is bad
        return false
    }
}

export function CheckPassword(password) {
    // regex giúp hỗ trợ tính kiểm tra hợp lệ của password
    expression = /^[A-Za-z]\w{7,14}$/
    if (expression.test(password) == true) {
        //password is good
        return true
    } else {
        //password is bad
        return false
    }
}

// export function CheckConfirmPassword(passowrd, cpassword) {
//     if (passowrd == cpassword) {
//         return true
//     } else {
//         return false
//     }
// }

export function CheckField() {
    // export function kiểm tra không được để trống
    if (field == null) {
        return false
    }
    // Kiểm tra khoảng trống
    if (field.length <= 0) {
        return false
    } else {
        true
    }
}

export function CheckUsername(username) {
    // Gồm chuỗi và số từ 3 đến 16 ký tự
    expression = /^[a-z0-9_-]{5,16}$/
    if (expression.test(username) == true) {
        return true
    } else {
        return false
    }
}