import { auth } from '@/auth'

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="font-bold text-3xl ">Welcome to the world of Next.js</h1>
      {/* <h2>Hiii</h2> */}
    </>
  );

};
export default Home;