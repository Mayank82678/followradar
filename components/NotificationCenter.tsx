'use client';

import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';

export interface Notification {
  id: string;
  type: 'unfollow' | 'follower' | 'ghost' | 'info' | 'success' | 'error';
  title: string;
  message: string;
  username?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  timestamp: Date;
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Simulate incoming unfollower notifications
  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.7) {
        const unfollowNotification: Notification = {
          id: `notif_${Date.now()}`,
          type: 'unfollow',
          title: 'Someone unfollowed you',
          message: `@${['user_' + Math.random().toString(36).substring(7), 'creator_' + Math.random().toString(36).substring(7), 'account' + Math.random().toString(36).substring(7)].join('')} just unfollowed you`,
          username: '@' + Math.random().toString(36).substring(7),
          action: {
            label: 'Unfollow Back',
            onClick: () => console.log('Unfollowing back...'),
          },
          timestamp: new Date(),
        };
        setNotifications((prev) => [unfollowNotification, ...prev].slice(0, 10));
      }
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getColorClass = (type: Notification['type']) => {
    switch (type) {
      case 'unfollow':
        return 'bg-red-500/20 border-red-500/50 text-red-100';
      case 'follower':
        return 'bg-green-500/20 border-green-500/50 text-green-100';
      case 'ghost':
        return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-100';
      case 'success':
        return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-100';
      case 'error':
        return 'bg-red-500/20 border-red-500/50 text-red-100';
      default:
        return 'bg-slate-500/20 border-slate-500/50 text-slate-100';
    }
  };

  const unreadCount = notifications.length;

  return (
    <>
      {/* Notification Bell Icon in Top Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-slate-800 transition"
      >
        <Bell className="h-5 w-5 text-slate-300" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="fixed right-4 top-20 z-50 w-96 max-h-[600px] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900/95 shadow-xl">
          <div className="sticky top-0 border-b border-slate-700 bg-slate-900/95 px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">Notifications</h3>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-800 rounded">
              <X className="h-4 w-4" />
            </button>
          </div>

          {notifications.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-700">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-l-4 ${getColorClass(notif.type)} border-l-current hover:bg-slate-800/50 transition`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{notif.title}</p>
                      <p className="text-xs mt-1 opacity-75">{notif.message}</p>
                      <p className="text-xs mt-2 opacity-50">
                        {new Date(notif.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeNotification(notif.id)}
                      className="flex-shrink-0 p-1 hover:bg-black/20 rounded"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>

                  {notif.action && (
                    <button
                      onClick={() => {
                        notif.action?.onClick();
                        removeNotification(notif.id);
                      }}
                      className="mt-3 w-full rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-xs font-medium transition"
                    >
                      {notif.action.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Toast Notifications (Latest at top) */}
      <div className="fixed top-24 right-4 z-40 space-y-2 pointer-events-none">
        {notifications.slice(0, 3).map((notif) => (
          <div
            key={notif.id}
            className={`rounded-xl border p-4 shadow-lg backdrop-blur pointer-events-auto animate-in fade-in slide-in-from-right ${getColorClass(notif.type)}`}
          >
            <p className="font-semibold text-sm">{notif.title}</p>
            <p className="text-xs mt-1 opacity-75">{notif.message}</p>
            {notif.action && (
              <button
                onClick={() => {
                  notif.action?.onClick();
                  removeNotification(notif.id);
                }}
                className="mt-2 text-xs font-semibold underline hover:opacity-75 transition"
              >
                {notif.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

// Hook for adding notifications from anywhere
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notif: Omit<Notification, 'id' | 'timestamp'>) => {
    const id = `notif_${Date.now()}`;
    const newNotif: Notification = {
      ...notif,
      id,
      timestamp: new Date(),
    };
    setNotifications((prev) => [newNotif, ...prev]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  return { notifications, addNotification };
}
