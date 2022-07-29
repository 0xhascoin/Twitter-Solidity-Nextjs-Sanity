import Head from 'next/head'
import Image from 'next/image'

// Components
import Sidebar from '../components/sidebar';
import Feed from '../components/home/feed';

// Styles
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <h2>Wdigets</h2>
      </div>
    </div>
  )
}

export default Home
