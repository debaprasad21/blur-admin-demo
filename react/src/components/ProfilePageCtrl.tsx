// Converted from src/app/pages/profile/ProfilePageCtrl.js

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useFileReader from '../services/fileReader';
import ProfileModalCtrl from './ProfileModalCtrl';

const ProfilePageCtrl: React.FC = () => {
  const [picture, setPicture] = useState<string | null>(null);
  const [noPicture, setNoPicture] = useState<boolean>(false);
  const [socialProfiles, setSocialProfiles] = useState([
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/akveo/',
      icon: 'socicon-facebook',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/akveo_inc',
      icon: 'socicon-twitter',
    },
    {
      name: 'Google',
      icon: 'socicon-google',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/akveo',
      icon: 'socicon-linkedin',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/akveo',
      icon: 'socicon-github',
    },
    {
      name: 'StackOverflow',
      icon: 'socicon-stackoverflow',
    },
    {
      name: 'Dribbble',
      icon: 'socicon-dribble',
    },
    {
      name: 'Behance',
      icon: 'socicon-behace',
    },
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentProfile, setCurrentProfile] = useState<any>(null);

  const { readAsDataURL } = useFileReader();

  const removePicture = () => {
    setPicture('theme/no-photo.png');
    setNoPicture(true);
  };

  const uploadPicture = () => {
    const fileInput = document.getElementById('uploadFile') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const unconnect = (item: any) => {
    item.href = undefined;
    setSocialProfiles([...socialProfiles]);
  };

  const handleShowModal = (item: any) => {
    setCurrentProfile(item);
    setShowModal(true);
  };

  const handleModalClose = (link: string) => {
    if (currentProfile) {
      currentProfile.href = link;
      setSocialProfiles([...socialProfiles]);
    }
    setShowModal(false);
  };

  const getFile = async (file: File) => {
    try {
      const result = await readAsDataURL(file);
      setPicture(result);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  return (
    <div>
      <img src={picture || 'theme/no-photo.png'} alt="Profile" />
      <button onClick={removePicture}>Remove Picture</button>
      <button onClick={uploadPicture}>Upload Picture</button>
      <input
        type="file"
        id="uploadFile"
        style={{ display: 'none' }}
        onChange={(e) => e.target.files && getFile(e.target.files[0])}
      />
      <ul>
        {socialProfiles.map((profile, index) => (
          <li key={index}>
            <i className={profile.icon}></i>
            <a href={profile.href}>{profile.name}</a>
            <button onClick={() => unconnect(profile)}>Unconnect</button>
            <button onClick={() => handleShowModal(profile)}>Edit</button>
          </li>
        ))}
      </ul>
      <ProfileModalCtrl show={showModal} onClose={handleModalClose} />
    </div>
  );
};

export default ProfilePageCtrl;
