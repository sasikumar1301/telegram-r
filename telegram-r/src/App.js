import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { FaBars, FaUser, FaUsers, FaPhone, FaBookmark, FaCog, FaMoon } from 'react-icons/fa';

const App = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
      setChats(response.data.data.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      setMessages(response.data.data);
      setSelectedChat(chatId);
      if (window.innerWidth <= 768) {
        setShowProfile(false); // Close profile view on mobile
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    return nameParts.map(part => part.charAt(0)).join('').toUpperCase();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleChatList = () => {
    setSelectedChat(null); // Deselect chat on toggle
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className={`chat-list ${selectedChat !== null ? 'hidden' : ''} ${darkMode ? 'dark' : ''}`}>
        <div className="header">
          <FaBars className="hamburger" onClick={() => setShowProfile(!showProfile)} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat.id ? 'selected' : ''} ${darkMode ? 'dark' : ''}`}
            onClick={() => fetchMessages(chat.id)}
          >
            <div className={`profile-initials ${darkMode ? 'dark' : ''}`}>
              {getInitials(chat.creator.name)}
            </div>
            <div className="chat-item-content">
              <p className="chat-creator">{chat.creator.name}</p>
              <p className={`chat-message ${darkMode ? 'dark' : ''}`}>{chat.lastMessage}</p>
            </div>
            <div className={`chat-date ${darkMode ? 'dark' : ''}`}>{chat.date}</div>
          </div>
        ))}
      </div>
      <div className={`chat-window ${selectedChat !== null ? 'active' : ''} ${darkMode ? 'dark' : ''}`}>
        {selectedChat !== null ? (
          <>
            {messages.map((message) => (
              <div key={message.id} className={`message-item ${darkMode ? 'dark' : ''}`}>
                <div className={`message-initials ${darkMode ? 'dark' : ''}`}>
                  {getInitials(message.sender.name)}
                </div>
                <div className="message-text">
                  <p>{message.message}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Select a chat to view messages</p>
        )}
      </div>
      {showProfile && (
        <div className={`profile-view ${darkMode ? 'dark' : ''}`} ref={profileRef}>
          <div className="profile-header">
            <div className="profile-pic"></div>
            <p className="username">Username</p>
          </div>
          <div className="profile-options">
            <div className="option"><FaUsers /> New Group</div>
            <div className="option"><FaUsers /> New Channel</div>
            <div className="option"><FaUser /> Contacts</div>
            <div className="option"><FaPhone /> Calls</div>
            <div className="option"><FaBookmark /> Saved Messages</div>
            <div className="option"><FaCog /> Settings</div>
            <div className="option" onClick={toggleDarkMode}><FaMoon /> Dark Mode</div>
          </div>
        </div>
      )}
      {selectedChat !== null && (
        <div className="overlay" onClick={toggleChatList}></div>
      )}
    </div>
  );
};

export default App;
