import play from 'play-dl';

export async function getYouTubeMeta(url: string, isPlaylist: boolean) {
  try {
    if (isPlaylist) {
      const playlist = await play.playlist_info(url, { incomplete: true });
      await playlist.fetch()

      return {
        type: 'playlist',
        title: playlist.title,
        thumbnail: playlist.thumbnail?.url,
        totalVideos: playlist.videoCount,
        channelName: playlist.channel?.name,
        url: playlist.url,
        views : playlist.views,
      }
    } else {
      const video = await play.video_info(url);
      const v = video.video_details;

      return {
        type: 'video',
        title: v.title,
        thumbnail: v.thumbnails[0].url,
        channelName: v.channel?.name,
        url: v.url,
        views : v.views,
      }
    }
  } catch (error) {
    return { error: error };
  }
}