import './Form.css';
import axios from 'axios';
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('formData', formData);
      const resposne = await axios.post('http://localhost:8080/api/', formData);
      if (resposne.status === 200) {
        const link = 'http://localhost:3000/message/' + resposne.data._id;
        alert(
          'Your message has been sent! copy this link to your clipboard: ' +
            link
        );
      }
    } catch (error) {}
  };
  return (
    <div className='form-container'>
      <form className='form-input-control' onSubmit={handleSubmit}>
        <input
          className='form-input'
          type='text'
          name='sender'
          placeholder='Whats your name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='receiver'
          placeholder='Who do you want to share'
          className='form-input'
          onChange={handleChange}
        />
        <textarea
          name='message'
          className='form-input'
          rows='10'
          placeholder='Write your message'
          onChange={handleChange}
        ></textarea>
        <button type='submit' className='form-submit'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
