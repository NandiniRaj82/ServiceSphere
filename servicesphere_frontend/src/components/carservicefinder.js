import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/finder.css'; 

const CarServiceUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/users/car-service');
        if (!response.ok) {
          throw new Error('Loading...');
        }
        const data = await response.json();
        setUsers(data);  // Assuming `data` is an array of users
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the users based on the search query (location)
  const filteredUsers = users.filter((user) =>
    user.Address && user.Address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <div className='search'>
      <h3 className='finder'>Car Services</h3>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
        className="search-bar"
      />
      </div>
      <div className="serve">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => {
            console.log(user);  // Log the full user object
            console.log(Object.keys(user));  // Log the keys of the user object to check field names
            return (
              <div className="item" key={index}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="default"
                  className="serage"
                />
                <div className="service-info">
                  <strong>Name:</strong> {user.UserName} <br />
                  <strong>Phone Number:</strong> {user.phoneNumber} <br />
                  <strong>Address:</strong> {user.Address || 'Address not available'} <br />
                  <a href="#">
                    <button className="book-service-btn">Book service</button>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default CarServiceUsers;
