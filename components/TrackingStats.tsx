'use client';

import { useEffect, useState } from 'react';
import { RotateCw, AlertCircle } from 'lucide-react';

interface DashboardStats {
  totalFollowing: number;
  totalFollowers: number;
  nonFollowers: number;
  recentUnfollowers: number;
  mutualFollowers: number;
  ghostFollowers: number;
  lastSync: string;
  syncStatus: string;
}

export function TrackingStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api?action=tracking-stats', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch stats');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      const response = await fetch('/api?action=tracking-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'tracking-sync' }),
      });

      if (!response.ok) {
        throw new Error('Sync failed');
      }

      const data = await response.json();
      if (data.success) {
        // Refresh stats after sync
        await fetchStats();
      } else {
        throw new Error(data.message || 'Sync failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sync failed');
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8 animate-pulse">
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-700 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[2rem] border border-red-500/30 bg-red-500/10 p-6 flex items-start gap-4">
        <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-300">Failed to load stats</h3>
          <p className="text-red-300/70 text-sm mt-2">{error}</p>
          <button
            onClick={fetchStats}
            className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 text-sm font-medium transition"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { label: 'Following', value: stats.totalFollowing, color: 'bg-blue-500/20 text-blue-400' },
    { label: 'Followers', value: stats.totalFollowers, color: 'bg-green-500/20 text-green-400' },
    { label: 'Non-followers', value: stats.nonFollowers, color: 'bg-amber-500/20 text-amber-400' },
    { label: 'Recent Unfollowers', value: stats.recentUnfollowers, color: 'bg-red-500/20 text-red-400' },
    { label: 'Mutual Followers', value: stats.mutualFollowers, color: 'bg-purple-500/20 text-purple-400' },
    { label: 'Ghost Followers', value: stats.ghostFollowers, color: 'bg-pink-500/20 text-pink-400' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Your Analytics</h2>
          <p className="text-slate-400 text-sm mt-1">
            Last synced: {new Date(stats.lastSync).toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500/20 text-brand-300 hover:bg-brand-500/30 disabled:opacity-50 transition"
        >
          <RotateCw className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Syncing...' : 'Sync Now'}
        </button>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        {statItems.map((item) => (
          <div
            key={item.label}
            className={`rounded-[1.5rem] border border-slate-700 ${item.color} bg-slate-900/40 p-6 transition hover:border-slate-600`}
          >
            <p className="text-sm font-medium opacity-75">{item.label}</p>
            <p className="mt-2 text-3xl font-bold">{item.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
