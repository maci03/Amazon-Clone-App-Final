import React from 'react'

import Order from '../components/Order'
import LayoutHigherOrderComponent from '../layouts/index'

function PaymentScreen() {
	return (
		<LayoutHigherOrderComponent>
			<Order />
		</LayoutHigherOrderComponent>
	)
}

export default PaymentScreen
