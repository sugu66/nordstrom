module.exports = {
  sections: {
	details:
	{
		selector: 'body',
		elements:{
				selectSize: {
					selector : '//div[@data-size-name="S"]//a',
					locateStrategy: 'xpath'
				},
				selectQuantity : {
					selector : '(//select[@form="checkout"]//option)[1]',
					locateStrategy: 'xpath'
				}
			}
	
  }
  }
  };