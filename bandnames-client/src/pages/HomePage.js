import React, { useContext } from 'react';
import { BandList } from '../components/BandList';
import { SocketContext } from '../context/SocketContext';

const HomePage = () => {
	const { online } = useContext(SocketContext);

	return (
		<div className='container'>
			<div className='aler'>
				<p>
					Service Status:
					{online ? (
						<span className='text-success'> Online</span>
					) : (
						<span className='text-danger'> Offline</span>
					)}
				</p>
			</div>
			<h1>BandNames</h1>
			<hr />

			<div className='row'>
				<div className='col-8'>
					<BandList />
				</div>
				<div className='col-4'>{/* <BandAdd createBand={createBand} /> */}</div>
			</div>
		</div>
	);
};

export default HomePage;
