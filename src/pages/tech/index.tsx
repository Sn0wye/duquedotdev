import { HalfCardWithoutTitle } from '../../components/HarlfCardWithoutTitle';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { TechCardsTextMidle } from '../../components/TechCardsTextBoth';
import { TechCardsTextLeft } from '../../components/TechCardsTextLeft';
import { TechCardsTextRight } from '../../components/TechCardsTextRight';
import { TopText } from '../../components/TopText';

export default function Tech() {
    return (
        <div className="tech">
            <TopText />
            <TechCardsTextLeft />
            <RepositoriesCards />
            <TechCardsTextRight />
            <HalfCardWithoutTitle />
            <TechCardsTextMidle />
            {/* <Nutshell /> */}
        </div>
    );
}
