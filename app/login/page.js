// import Login from "@/components/login/login";
import dynamic from 'next/dynamic';
// const Page = () => {
//   return <Login />;
// };

// export default Page;


const Page = dynamic(() => import('@/components/login/login'), {
  ssr: false, // Set ssr to false to disable server-side rendering for this component
});
export default Page;