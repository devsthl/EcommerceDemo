import dataUltils from '../../../../data/dataUltils'

export const validateInput = (value, typeInput) => {
    switch (typeInput) {
        case 'email': {
            return dataUltils.validMail(value)
        }
        case 'phoneNumber': {
            const res = dataUltils.validatePhone(value)
            return res
        }
        case 'full_name': {
            return dataUltils.validateName(value)
        }
        case 'password': {
            return dataUltils.validatePassword(value)
        }
    }
    return true
}

export const validateData = (data) => {
    let result = true;
    Object.entries(data).forEach(([key, value]) => {
        if (!result) return
        if (key === 'date_of_birth' || key === 'gender') return
        if (value === '') {
            if (key === 'enterpriseName' || key === 'shortname' || key === 'taxCode') return
            else {
                result = false
                return
            }
        } else {
            if (!validateInput(value, key)) { result = false; return }
        }
    })
    console.log(result);
    return result
}