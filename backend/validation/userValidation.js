

export const userSchemaValidation = {
    fullName: {
        notEmpty: {
            errorMessage: "full name must not be empty"
        },
        isString: {
            errorMessage: "full name must be string"
        },
    },
    username: {
        notEmpty: {
            errorMessage:"username must not be empty"
        },
        isString: {
            errorMessage: "full name must be string"
        },
    },
    password: {
        notEmpty: {
            errorMessage: "password must be a string"
        },
        isString: {
            errorMessage: "password must be a string"
        },
        isLength:{
            options:{
                min: 6
            }
        }
    },
    confirmPassword: {
        notEmpty: {
            errorMessage: "password must be a string"
        },
        isString: {
            errorMessage: "password must be a string"
        },
        isLength:{
            options:{
                min: 6
            }
        }
    },
    gender:{
        notEmpty: {
            errorMessage:"gender must not be empty"
        },
        isString:{
            errorMessage:"gender must be a string"
        },

    }
}

export const userLoginValidation = {
    username: {
        notEmpty: {
            errorMessage:"username must not be empty"
        },
        isString: {
            errorMessage: "full name must be string"
        },
    },
    password: {
        notEmpty: {
            errorMessage: "password must be a string"
        },
        isString: {
            errorMessage: "password must be a string"
        },
        isLength:{
            options:{
                min: 6
            }
        }
    },
}