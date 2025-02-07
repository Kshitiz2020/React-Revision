import { userContext } from './UserContext'; // Import the correct context object
import { useContext, useState } from 'react';

function UpdatedUser() {
    const { user, updateUser } = useContext(userContext); // Use the correct context object

    const [name, setName] = useState();
    const [age, setAge] = useState();

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(name, Number(age)); 
        // Ensure age is a number
        setName('');
        setAge('');
    };

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        placeholder="Enter Age"
                    />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdatedUser;
