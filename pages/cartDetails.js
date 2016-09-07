module.exports = {
  sections: {
	addToCart:{
		  selector: 'body',
		elements:{
			addToCartBtn : {
				selector: '//div[@class="add-to-cart-container"]//button',
				locateStrategy : 'xpath'
			},
			fullCartBtn : {
				selector: '//div[@class="full-cart__footer"]//a[@class="full-cart__checkout-button"][1]',
				locateStrategy : 'xpath'
			}
		}
	}
  }
  };