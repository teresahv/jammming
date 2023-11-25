import Image from 'next/image'
import App from '@/app/components/App';

export default function Home() {
  return (
  <div className="
  bg-[rgb(11,47,55)] m-4 
  flex justify-center items-center flex-col
  ">
    <h1 className="
    style-script text-6xl py-8
    ">
      Jammming
    </h1>
    <App />
  </div>
  )
}
