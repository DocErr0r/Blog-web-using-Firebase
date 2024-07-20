import { useContext } from 'react';
import Card from '../../Components/card/Card';
import HeroSection from '../../Components/HeroSection/HeroSection';
import myContext from '../../contexts/data/myContext';

export default function Home() {
    const {mode}=useContext(myContext)
    return (
        <>
            <HeroSection />
            <div className="container mx-auto min-h-[100vh] flex flex-wrap">
                <Card />
            </div>
        </>
    );
}
