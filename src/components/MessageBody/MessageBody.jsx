import './MessageBody.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function MessageBody(props) {
  const [words, setwords] = useState([]);
  const [count, setcount] = useState(0);
  const [finished, setfinished] = useState(false);

  async function handleClick() {
    const temmp = count;

    if (temmp >= words.length - 1) {
      const id = window.location.pathname.split('/')[2];
      const response = await axios.delete(`http://localhost:8080/api/${id}`);
      if (response.status === 200) {
        setfinished(true);
      }
    } else {
      setcount(temmp + 1);
    }
  }
  useEffect(() => {
    props.message && setwords(props.message.split(' '));
  }, [props]);

  return (
    <div className='message-body-container' onClick={handleClick}>
      <div className='message-body-text'>
        {!finished ? (
          <p className='message-body-word'>{words[count]}</p>
        ) : (
          <div className='message-body-finished'>
            <p className='message-body-word'>
              This message is deleted from all our servers.
            </p>
            <p className='message-body-word'>Want to tell something?</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageBody;
