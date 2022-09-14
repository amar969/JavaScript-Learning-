# Callback 

'''
const cart = ["Shoes", "Pants", "Kurta"]

// to create order
api.createOrder(cart, function(){

	// proceed to payment after creating an order
	api.proceedToPayment(cart, function(){
		
			// show order summary after payment
			api.showOrderSummary(function() {

						function (){
							api.updateWallet()
							}
				})

		})

})

'''


The issue with callback functions, 

1. Callback Hell 
2. Inversion of Control

1. **Callback Hell**: Callbacks are useful when we want to perform some extra functionality with our already existing function for example passing an error handling callback to our already created function, BUT when callbacks within themselves start taking in other functions as callbacks then that mess that you are left with is known as the Callback Hell leading to unreadable code, hence unmaintainable code.
2. **Inversion Of Control:** when we pass a function to another function as a callback we are giving the called function the control of whether to even call it or not or maybe call it in the wrong context. For example, a success callback is called when an error occurs inside a called function (maybe due to human error while writing the code for called function), this type of giving up of control over our functions is known as inversion of control.