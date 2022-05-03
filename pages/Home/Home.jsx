import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Quote from '../../components/Quote/Quote';
import Form from '../../components/Form/Form';

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <Quote />
      <Form />
    </div>
  );
}

export default Home;
