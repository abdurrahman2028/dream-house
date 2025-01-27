import Background from './Background';
import Forground from './Forground';

const Docs = () => {
    return (
        <div className='relative h-screen w-full bg-zinc-800'>
            <Background></Background>
            <Forground></Forground>
        </div>
    );
};

export default Docs;