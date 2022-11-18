
const inputData_Register = [
    { id: '0', name: 'none', example: 'none' },
    { id: '1', name: 'enterpriseName', example: 'Nhập tên doanh nghiệp' },
    { id: '2', name: 'shortname', example: 'example' },
    { id: '3', name: 'taxCode', example: 'example' },
    { id: '4', name: 'full_name', example: 'example' },
    { id: '5', name: 'phoneNumber', example: 'example' },
    { id: '6', name: 'date_of_birth', example: 'example' },
    { id: '7', name: 'gender', example: 'example' },
    { id: '8', name: 'email', example: 'example' },
    { id: '9', name: 'password', example: 'Password' },
    { id: '10', name: 'address', example: 'example' },
];

const inputData_Register_personal = [
    { id: '0', name: 'none', example: 'none' },
    { id: '1', name: 'full_name', example: 'Nhập tên' },
    { id: '2', name: 'phoneNumber', example: 'Nhập số điện thoại' },
    { id: '3', name: 'date_of_birth', example: 'example' },
    { id: '4', name: 'gender', example: 'Chọn giới tính' },
    { id: '5', name: 'email', example: 'Nhập địa chỉ Email' },
    { id: '6', name: 'password', example: 'Password' },
    { id: '7', name: 'address', example: 'Nhập địa chỉ' },
]

const initDataUser = {
    enterpriseName: '',
    shortname: '',
    taxCode: '',
    full_name: '',
    phoneNumber: '',
    date_of_birth: '',
    gender: 'male',
    email: '',
    address: '',
    // nation: 'vn',
    password: '',
}

const defaultNewData = {
    content: '',
    created_date: '',
    customer: {
        avatar: '',
        full_name: '',
        id: '1'
    },
    des: '',
    district_id: '1',
    ecommerce: {
        id: '1',
    },
    id: '1',
    image_url: [{
        id: '1',
        url: ''
    }],
    name: '',
    total_comment: 1,
    type: 1,
    updated_date: ''
}

const nationData = [
    { id: '0', locale: 'vn' },
    { id: '1', locale: 'en' }
]

const gender = [
    'male',
    'female',
]

export default {
    inputData_Register,
    inputData_Register_personal,
    initDataUser,
    nationData,
    gender
};
