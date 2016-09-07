
module.exports = {
  sections: {
    navigateLoginSignup: {
      selector: '#root',
      elements: {
        loginSignup: {
          selector: 'a.secondary-nav__link:first-child'
        },
        loginLink: {
          selector: 'a.authentication-modal__alternate-action'
        }
      }
    },
	provideCred:{
		selector: '.authentication-modal__content',
			elements:{
					email:{
						selector : 'input[name = "email"]'
					},
					password:{
						selector:'input[type = "password"]'
					},
					loginBtn:{
						selector: 'button.cta-button.cta-button--nordstromrack'
					}
				}
	}

  
  
}
};

















/*module.exports = {
	

//navigate to login screwen
sections:{
	navigateLoginSignup:{
		selector: 'body',
		elements:{
				loginSignup:{
					selector : 'a.secondary-nav__link:first-child'
				},
				loginLink:{
					selector: 'a.authentication-modal__alternate-action'
				}
		}
	}
}
			

//click login button
sections:{
	loginBtnClick:{
		elements:{
			navigateLogin:{
				selector:'a.authentication-modal__alternate-action'
			}
		}
	}
},
	
	//enter valid login credentials
	
sections:{
		provideCred:{
			elements:{
					email:{
						selector : 'input[name = "email"]'
					},
					password:{
						selector:'input[type = "password"]'
					},
					loginBtn:{
						selector: '//button[@class="cta-button cta-button--nordstromrack"]',
						locateStrategy: 'xpath'
					}
				}
			}
	},
//select product category
sections:{
	productCategory:{
		elements:{
			menSubLink:{
				selector: 'a[href="/category/Men"]',
				locateStrategy: 'xpath'
			},
			tshirtsSubLink:{
				selector:'.menu_level_2 li a[href="/shop/Men/Clothing/T-Shirts"]'
			}
		}
	}
},
	
//select product
sections:{
	selectProduct:
	{
		elements:{
				selectTshirt : {
					selector: '.catalog-grid .catalog-grid-cell:first-child a'
				},
				selectSize: {
					selector : '//div[@data-size-name="M"]//a',
					locateStrategy: 'xpath'
				},
				selectQuantity : {
					selector : '(//select[@form="checkout"]//option)[1]',
					locateStrategy: 'xpath'
				}
			}
	}
},
		
		
//addToCart
sections:{
	addToCart:{
		elements:{
			addToCartBtn : {
				selector: '//div[@class="add-to-cart-container"]//button',
				locateStrategy: 'xpath'
			},
			fullCartBtn : {
				selector: '//a[@class="full-cart__checkout-button"]',
				locateStrategy : 'xpath'
			}
		}
	}
},
	
//fill	shipping details
sections:{
	fillShippingDetails:{
		selector:'body',
		elements:{
			newAddressBtn : {
				selector : '//div[@class="checkout-shipping-addresses"]//button',
				locateStrategy: 'xpath'
			},
			firstName:{
				selector: '//input[@autocomplete="shipping given-name"]',
				locateStrategy:'xpath'
			},
			lastName:{
				selector: '//input[@autocomplete="shipping family-name"]',
				locateStrategy:'xpath'
			},
			addressLine1 : {
				selector: '//input[@autocomplete="shipping address-line1"]' ,
				locateStrategy:'xpath'
			},
			city:{
				selector: '//input[@autocomplete="shipping address-level2"]',
				locateStrategy:'xpath'
				
			},
			state:{
				selector: '//option[@value="OH"]',
				locateStrategy : 'xpath'
			},
			postalCode:{
				selector: '//input[@autocomplete="shipping postal-code"]',
				locateStrategy : 'xpath'
			},
			mobileNumber:{
				selector : '//input[@autocomplete="shipping tel"]',
				locateStrategy : 'xpath'
			},
			saveBtn:{
				selector: 'button.checkout-form__submit'
			}
		}
	}
}
};*/
