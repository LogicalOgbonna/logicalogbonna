const LASTFM_API_KEY = process.env.LAST_FM_API_KEY;
const LASTFM_USERNAME = process.env.LAST_FM_USER;
const LASTFM_BASE_URL = 'https://ws.audioscrobbler.com/2.0';

export interface LastFmTrack {
  name: string;
  playcount: string;
  artist: {
    name: string;
    url: string;
  };
  url: string;
  image: Array<{
    '#text': string;
    size: string;
  }>;
}

export interface LastFmTopTracksResponse {
  toptracks: {
    track: LastFmTrack[];
    '@attr': {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

export async function getWeeklyTopTracks(
  limit: number = 5
): Promise<LastFmTrack[]> {
  if (!LASTFM_API_KEY) {
    console.error('LAST_FM_API_KEY is not set');
    return [];
  }

  try {
    const params = new URLSearchParams({
      method: 'user.gettoptracks',
      user: LASTFM_USERNAME || '',
      api_key: LASTFM_API_KEY,
      format: 'json',
      period: '7day',
      limit: limit.toString(),
    });

    const response = await fetch(`${LASTFM_BASE_URL}?${params.toString()}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Last.fm API error: ${response.status}`);
    }

    const data: LastFmTopTracksResponse = await response.json();
    return data.toptracks?.track || [];
  } catch (error) {
    console.error('Error fetching Last.fm top tracks:', error);
    return [];
  }
}
