module.exports = {
  'Nordstrom Test'(client) {
 client
      .windowMaximize()
      .url(client.launchUrl)
      .waitForElementVisible('body', 1000);

    const landingPage = client.page.nordstrom();
	 landingPage.expect.section('@navigateLoginSignup').to.be.visible;
	 
	//Login Navigation
    const navigateLoginSection = landingPage.section.navigateLoginSignup;
    navigateLoginSection.expect.element('@loginSignup').to.be.visible;
    navigateLoginSection.click('@loginSignup');
	navigateLoginSection.expect.element('@loginLink').to.be.visible;
	navigateLoginSection.click('@loginLink');
	
	//Login button click
	const provideCredSection=landingPage.section.provideCred;
	 provideCredSection.expect.element('@email').to.be.visible;
	  provideCredSection.setValue('@email', 'nightwatchuser@example.com');
	  provideCredSection.expect.element('@password').to.be.visible;
	  provideCredSection.setValue('@password' , 'test123');
	  provideCredSection.expect.element('@loginBtn').to.be.visible;
	  provideCredSection.click('@loginBtn');
	  
	// Select category
	const categoryPage=client.page.category();
	categoryPage.expect.section('@selectCategory').to.be.visible;
	const categorySection=categoryPage.section.selectCategory;
	categorySection.expect.element('@menLink').to.be.visible;
    categorySection.click('@menLink');
	
	//Select Product
	const selectProductPage=client.page.productType();
	selectProductPage.expect.section('@selectProductType').to.be.visible;
	const selectProductSection=selectProductPage.section.selectProductType;
	selectProductSection.expect.element('@tshirtsSubLink').to.be.visible;
    selectProductSection.click('@tshirtsSubLink');
	
	//Project Page
	const productPage=client.page.product();
	productPage.expect.section('@product').to.be.visible;
	const productSection=productPage.section.product;
	productSection.expect.element('@selectTshirt').to.be.visible;
    productSection.click('@selectTshirt');
	
	//Product Details page
	const productDetailsPage=client.page.productDetails();
	productDetailsPage.expect.section('@details').to.be.visible;
	const productDetailsSection=productDetailsPage.section.details;
	productDetailsSection.expect.element('@selectSize').to.be.visible;
    productDetailsSection.click('@selectSize');
	productDetailsSection.expect.element('@selectQuantity').to.be.visible;
    productDetailsSection.click('@selectQuantity');
	
	//Cart Details Page
	const cartDetailsPage=client.page.cartDetails();
	cartDetailsPage.expect.section('@addToCart').to.be.visible;
	const cartDetailsSection=cartDetailsPage.section.addToCart;
	cartDetailsSection.expect.element('@addToCartBtn').to.be.visible;
    cartDetailsSection.click('@addToCartBtn');
	client.pause(2000);
	cartDetailsSection.expect.element('@fullCartBtn').to.be.visible;
    cartDetailsSection.click('@fullCartBtn');
	client.pause(2000);
	
	//Shipping details
	
	client.useXpath()
	.waitForElementVisible('//button[@class="checkout-page__input-new-item-button"]',3000)
	.click('//button[@class="checkout-page__input-new-item-button"]')
	.waitForElementVisible('//input[@autocomplete="shipping given-name"]',3000)
	.setValue('//input[@autocomplete="shipping given-name"]', 'test')
	.waitForElementVisible('//input[@autocomplete="shipping family-name"]',3000)
	.setValue('//input[@autocomplete="shipping family-name"]', 'test1')
	.waitForElementVisible('//input[@autocomplete="shipping address-line1"]',3000)
	.setValue('//input[@autocomplete="shipping address-line1"]', 'test12345')
	.waitForElementVisible('//input[@autocomplete="shipping address-level2"]',3000)
	.setValue('//input[@autocomplete="shipping address-level2"]', 'Fremont')
	.waitForElementVisible('//option[@value="OH"]',3000)
	.click('//option[@value="OH"]')
	.waitForElementVisible('//input[@autocomplete="shipping postal-code"]',3000)
	.setValue('//input[@autocomplete="shipping postal-code"]', '43420')
	.waitForElementVisible('//input[@autocomplete="shipping tel"]',3000)
	.setValue('//input[@autocomplete="shipping tel"]', '5875585555')
	.useCss()
	.waitForElementVisible('button.checkout-form__submit',3000)
	.click('button.checkout-form__submit');
	client.end();

	
  }
};