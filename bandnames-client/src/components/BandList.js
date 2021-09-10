import React, { useEffect, useState } from 'react';

export const BandList = ({ data }) => {
	const [bands, setBands] = useState(data);

	useEffect(() => {
		setBands(data);
	}, [data]);

	const onChangeName = (event, id) => {
		const newName = event.target.value;

		setBands((bands) =>
			bands.map((band) => {
				if (band.id === id) {
					band.name = newName;
				}
				return band;
			})
		);
	};

	const onLostFocus = (id, name) => {
		console.log(id, name);
	};

	const createRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button className='btn btn-primary'>+1</button>
				</td>
				<td>
					<input
						type='text'
						className='form-control'
						value={band.name}
						onChange={(event) => onChangeName(event, band.id)}
						onBlur={() => onLostFocus(band.id, band.name)}
					/>
				</td>
				<td>
					<h3>{band.votes}</h3>
				</td>
				<td>
					<button className='btn btn-danger'>Delete</button>
				</td>
			</tr>
		));
	};

	return (
		<>
			<table className='table table-stripped'>
				<thead>
					<tr>
						<th></th>
						<th>Name: </th>
						<th>Votes: </th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>{createRows()}</tbody>
			</table>
		</>
	);
};
