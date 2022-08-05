import {
    AssetArea,
    CardLink,
    CardTitle,
    Container,
    Content,
    ContentCard,
} from './styles';

interface HalfCardProps {
    showTitle?: boolean;
}

export function HalfCard({ showTitle = true }: HalfCardProps) {
    return (
        <Container>
            <Content>
                <AssetArea />
                {showTitle && (
                    <ContentCard>
                        <CardTitle>
                            <h3>desafios</h3>
                            <h3>ativos</h3>
                        </CardTitle>

                        <CardLink
                            href="https://github.com/duquedotdev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github
                        </CardLink>
                    </ContentCard>
                )}
            </Content>
        </Container>
    );
}
