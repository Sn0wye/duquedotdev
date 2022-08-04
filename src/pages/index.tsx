import { Blog } from '../components/Blog';
import { CardLeft } from '../components/CardLeft';
import { CardRight } from '../components/CardRight';
import { HalfCards } from '../components/HalfCard';
import { RepositoriesCards } from '../components/RepositoriesCards';
import { TopText } from '../components/TopText';

export default function Home() {
    return (
        <div className="home">
            <TopText />
            <CardRight />
            <CardLeft />
            <HalfCards />
            <RepositoriesCards />
            <Blog />
        </div>
    );
}
