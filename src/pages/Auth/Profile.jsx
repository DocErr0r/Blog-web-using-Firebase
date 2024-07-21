// src/components/auth/Profile.jsx
import React, { useState, useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebaseConfig';

const Profile = () => {
    const user = auth.currentUser;
    console.log(user);
    

    const [displayName, setDisplayName] = useState(user ? user.displayName : '');
    const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL,
            });
            toast.success('Profile updated successfully!');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <input type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input type="text" placeholder="Photo URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
