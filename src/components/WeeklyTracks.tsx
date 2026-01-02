import Link from 'next/link';
import Image from 'next/image';
import { getWeeklyTopTracks, LastFmTrack } from '@/lib/lastfm';

const LASTFM_USERNAME = process.env.LAST_FM_USER;

function getTrackImage(track: LastFmTrack): string | null {
  const mediumImage = track.image?.find((img) => img.size === 'medium');
  return mediumImage?.['#text'] || null;
}

function TrackItem({ track, rank }: { track: LastFmTrack; rank: number }) {
  const imageUrl = getTrackImage(track);

  return (
    <Link
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
    >
      <span className="text-xs font-mono text-stone-400 dark:text-stone-600 w-5 text-right">
        {String(rank).padStart(2, '0')}
      </span>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`${track.name} by ${track.artist.name}`}
          width={48}
          height={48}
          className="rounded-md bg-stone-200 dark:bg-stone-800"
        />
      ) : (
        <div className="w-12 h-12 rounded-md bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
          <span className="text-stone-400 dark:text-stone-600 text-xs">♪</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-stone-900 dark:text-stone-100 font-medium truncate group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
          {track.name}
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-500 truncate">
          {track.artist.name}
        </p>
      </div>
      <span className="text-xs text-stone-400 dark:text-stone-600 font-mono whitespace-nowrap">
        {track.playcount}×
      </span>
    </Link>
  );
}

export async function WeeklyTracks() {
  const tracks = await getWeeklyTopTracks(7);

  if (tracks.length === 0) {
    return null;
  }

  return (
    <section className="mb-24">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">
          This Week&apos;s Soundtrack
        </h2>
        <Link
          href={`https://www.last.fm/user/${LASTFM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
        >
          last.fm →
        </Link>
      </div>
      <div className="space-y-1">
        {tracks.map((track, index) => (
          <TrackItem key={`${track.name}-${track.artist.name}`} track={track} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}

