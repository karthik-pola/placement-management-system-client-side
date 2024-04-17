import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000'); // Change the URL to your server URL with port 8000

function StudentComponent() {
  useEffect(() => {
    // Establish WebSocket connection
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    // Listen for new notifications
    socket.on('newNotification', (notification) => {
      console.log('New notification received:', notification);
      // Handle the notification as needed (e.g., display in UI)
    });

    // Clean up WebSocket connection on component unmount
    return () => {
      socket.disconnect();
      console.log('Disconnected from WebSocket server');
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {/* Notification display UI */}
    </div>
  );
}

export default StudentComponent;
