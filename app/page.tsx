import Head from 'next/head';
import DnDWithKit from './components/DnDWithKit';
// import { TestDAndD } from './components/TestDAndD';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Drag and Drop Task Board</title>
        <meta name="description" content="A simple drag-and-drop task board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main style={{ padding: '2rem' }}> */}
        {/* <h1 className='mb-8 text-xl'>Drag and Drop Task Board</h1> */}
        {/* <TaskBoard /> */}
        {/* <TestDAndD /> */}
      {/* </main> */}

      <DnDWithKit/>
    </div>
  );
}
