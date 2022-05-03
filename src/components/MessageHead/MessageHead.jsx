import './MessageHead.css';

function MessageHead(props) {
  const head = {
    sender: 'SENDER',
    receiver: 'RECEIVER',
  };
  return (
    <div className='message-head-container'>
      <div className='message-head-name message-head-sender'>
        <span className='message-head-sender-name'>{props.sender}</span>
      </div>
      <div className='message-head-carrier'>
        <span>💌</span>
      </div>
      <div className='message-head-name message-head-receiver'>
        <span className='message-head-receiver-name'>{props.receiver}</span>
      </div>
    </div>
  );
}

export default MessageHead;
