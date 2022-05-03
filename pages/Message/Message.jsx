import './Message.css';
import Navbar from '../../components/Navbar/Navbar';
import MessageBody from '../../components/MessageBody/MessageBody';
import MessageHead from '../../components/MessageHead/MessageHead';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getMessage = async () => {
      const id = window.location.pathname.split('/')[2];
      const response = await axios.get(`http://localhost:8080/api/${id}`);
      if (response.status === 200) {
        setData(response.data);
      }
    };

    getMessage();
  }, []);
  return (
    <div className='message-container'>
      <Navbar />
      <MessageHead sender={data.sender} receiver={data.receiver} />
      <MessageBody message={data.message} />
    </div>
  );
}

export default Message;
