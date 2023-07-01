import './App.css';
import {puppyList} from './data';
import {useState} from 'react';

function App() {
	const [puppies, setPuppies] = useState(puppyList);
	const [featPupId, setPuppyId] = useState(null);

	const featuredPup = puppies.find((pup) => pup.id === featPupId);

	return (
		<>
			{puppies.map((puppy) => {
				return (
					<p
						key={puppy.id}
						onClick={() => {
							setPuppyId(puppy.id);
						}}
					>
						{puppy.name}
					</p>
				);
			})}

			{featPupId && (
				<div>
					<h2>{featuredPup.name}</h2>
					<ul>
						<li className='list'>Age: {featuredPup.age}</li>
						<li className='list'>Email: {featuredPup.email}</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default App;
