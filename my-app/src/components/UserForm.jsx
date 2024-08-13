import { useState } from 'react';

function UserForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
    	event.preventDefault();
    	console.log('Form submitted:', { name, email, password });
	};

	return (
    	<form onSubmit={handleSubmit}>
        	<label>
            	Name:
            	<input
                	type="text"
                	value={name}
                	onChange={(event) => setName(event.target.value)}
            	/>
        	</label>
        	<br />
        	<label>
            	Email:
            	<input
                	type="email"
                	value={email}
                	onChange={(event) => setEmail(event.target.value)}
            	/>
        	</label>
        	<br />
        	<label>
            	Password:
            	<input
                	type="password"
                	value={password}
                	onChange={(event) => setPassword(event.target.value)}
            	/>
        	</label>
        	<br />
        	<button type="submit">Submit</button>
    	</form>
	);
}

export default UserForm;