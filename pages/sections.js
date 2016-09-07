  module.exports = {
	 elements:{
	  loginSignup:{
		  selector:'a.secondary-nav__link:first-child'
	  },
	  loginLink:{
		  selector:'a.authentication-modal__alternate-action'
	  },
	},
	sections: {
	 loginDetails:{
		selector:".auth-panel__form",
		  elements:{
			  mail:{
				  selector:'input[name=email]'
			  },
			  password:{
				  selector:'input[name=password]'
			  }
		  }
	  }
	}
};