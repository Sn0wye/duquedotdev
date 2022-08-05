import { HalfCard } from '../../components/HalfCard';
import { Nutshell } from '../../components/Nutshell';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { TopText } from '../../components/TopText';

export default function About() {
    return (
        <div className="home">
            <TopText />
            <RepositoriesCards />
            <HalfCard showTitle={false} />
            <RepositoriesCards />
            <Nutshell />
        </div>
    );
}
