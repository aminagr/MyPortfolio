import React from 'react';
import { useAppContext } from '../../app/context/AppContext';
import styles from './LanguageSelector.module.css'; 

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();

  return (
    <select 
      className={styles.languageSelect} 
      value={language} 
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">🇬🇧 English</option>
      <option value="fr">🇫🇷 Français</option>
    </select>
  );
};

export default LanguageSelector;
