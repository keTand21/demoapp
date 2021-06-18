

export const CustomValidation = {
    user: {
        FirstName: [
            { type: 'required', message: 'First name is required' },
            { type: 'minlength', message: 'First name must be at least 2 characters long' },
            { type: 'maxlength', message: 'First name cannot be more than 20 characters long' },
            { type: 'pattern', message: 'First name must contain only letters' },
        ],
        LastName: [
            { type: 'required', message: 'Last name is required' },
            { type: 'minlength', message: 'Last name must be at least 2 characters long' },
            { type: 'maxlength', message: 'Last name cannot be more than 25 characters long' },
            { type: 'pattern', message: 'Last name must contain only letters' },
        ],
     
        Address: [
            { type: 'required', message: 'Address is required' },
            { type: 'minlength', message: 'Address must be at least 5 characters long' },
            { type: 'maxlength', message: 'Address cannot be more than 25 characters long' },
        

        ],
        MobileNo: [
            { type: 'required', message: 'Mobile number is required' },
            { type: 'minlength', message: 'Mobile number must be 10 digit number' },
            { type: 'maxlength', message: 'Mobile number must be 10 digit number' },
            { type: 'pattern', message: 'Mobile number must contain only number' },
        ],

        EmailId: [
            { type: 'required', message: 'Email id is required' },
            { type: 'pattern', message: 'Email id is must be valid' },
    
        ],

        State: [
            { type: 'required', message: 'State is required' },

            { type: 'pattern', message: 'State must contain only letters' },
        ],
        Country: [
            { type: 'required', message: 'Country is required' },
            { type: 'pattern', message: 'Country must contain only letters' },
        ],

        ProfileImage: [
            { type: 'required', message: 'Profile Image is required' },
      
            { type: 'ProfilePhoto', message: ' Profile Image size large in height 310 and width 325 please add new image' },
        ],
  

    }
}