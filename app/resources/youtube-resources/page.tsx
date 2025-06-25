import YouTubeCardList from './YouTubeCardList'
import { ytVdo } from '@/lib/dummy'
import { getYouTubeMeta } from '@/lib/getYouTubeMeta'


export default async function YouTubeResourcesPage() {
    try {
        const enriched = await Promise.all(
            ytVdo.map(async (item) => {
                const meta = await getYouTubeMeta(item.ytUrl, item.isPlaylist);
                return { ...item, ...meta };
            })
        );

        // console.log('✅ Enriched:', enriched);
        return <YouTubeCardList initialItems={enriched} />;
    } catch (error) {
        console.error('❌ Error while enriching YouTube data:', error);
        return <div className="p-10 text-red-500">Error loading resources.</div>;
    }
}