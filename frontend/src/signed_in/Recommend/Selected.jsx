import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/recommend.css';

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg";

const Recommend = () => {
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDescriptions, setShowDescriptions] = useState({});
    const [departments, setDepartments] = useState([])
    const navigate = useNavigate();

    // User Page Connection
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userEmail = sessionStorage.getItem('user');
                if (userEmail) {
                    const response = await fetch(`http://localhost:8800/api/auth/user-profile?email=${userEmail}`);
                    const data = await response.json();

                    if (data.success) {
                        setUserName(data.userData.firstName);
                        setUserImage(data.userData.image ? `data:image/jpeg;base64,${data.userData.image}` : userImage);
                    } else {
                        console.log('Failed to fetch user profile');
                    }
                }
            } catch (error) {
                console.error('An error occurred', error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleProfileClick = () => {
        navigate('/My-Profile');
    }

    // Logout User
    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    }

    const DropdownModal = ({ logoutHandler }) => {
        return (
            <div className="dropdown-modal">
                <div className="profile-info">
                    <img
                        src={userImage || defaultImg}
                        alt='profile'
                        className='profileImg'
                    />
                    <p className='username'>{userName}</p>
                </div>
                <ul>
                    <li><button onClick={handleProfileClick}> My Profile </button></li>
                    <li><button onClick={logoutHandler}> Log Out </button></li>
                </ul>
            </div>
        );
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const toggleDescription = (departmentName) => {
        setShowDescriptions({
            ...showDescriptions,
            [departmentName]: !showDescriptions[departmentName],
        });
    };

    return (
        <>
            <div className="selectedContainer">
                <header className="navBar">
                    <div className="navBarInner">
                        <div className="navLogoContainer">
                            <img src={logo} alt="logo" className="navLogo" />
                        </div>
                        <div className="navProfile">
                            <img
                                src={userImage || defaultImg}
                                alt="profile"
                                className="profileImg"
                                onClick={toggleDropdown}
                            />
                        </div>
                    </div>
                </header>

                <div className="selectedJobContainer">
                    <div className="selectedJobContainerInner">
                        <div className="selectedJobContainerHeader">
                            <h1> Selected Job Role </h1>
                        </div>
                        <div className="selectedJobContainerSubtitle">
                            <p> Select a role you want to achieve. </p>
                        </div>
                        <div className="selectedJobContainerSelection">
                            {departments.map((department, index) => (
                                <div
                                    key={index}
                                    className="selectedJobContainerPanel"
                                    onClick={() => toggleDescription(department.name)}
                                >
                                    <p className='job-title'>{department.name}</p>
                                    {showDescriptions[department.name] && (
                                        <div className="job-description-selected">
                                            {department.jobs.map((job, jobIndex) => (
                                                <p key={jobIndex}>{job.title}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
            </div>
        </>
    );
};

export default Recommend;