import React from 'react'

const OrderHistoryPage: React.FC = () => {
	return (
		<table className='c_profile_order_table'>
			<thead>
				<tr>
					<th>Movie</th>
					<th>Date</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr className='c_profile_order_row'>
					<td>Interstellar</td>
					<td>12.06.2024</td>
					<td>20 $</td>
				</tr>
			</tbody>
		</table>
	)
}

export default OrderHistoryPage
