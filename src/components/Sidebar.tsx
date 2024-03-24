import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import {
  CheckCircle2,
  Laptop,
  ListIcon,
  LogOut,
  LucideLayoutDashboard,
  Star,
  UserRound,
  Zap,
} from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

export function Sidebar({
  className,
  selectedIndex,
  setSelectedIndex,
}: {
  className: string;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="px-3 py-4">
        <h2 className="px-4 text-2xl font-extrabold tracking-tight flex italic items-center">
          Electro{' '}
          <Zap className="ml-1 text-blue-500 w-8 h-8" fill="lightblue" /> Ease
        </h2>
      </div>
      <div className="space-y-4  w-35">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              variant={`${selectedIndex === 0 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(0)}
            >
              <LucideLayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={`${selectedIndex === 1 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(1)}
            >
              <Star className="mr-2 h-4 w-4" />
              Brands
            </Button>
            <Button
              variant={`${selectedIndex === 2 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(2)}
            >
              <Laptop className="mr-2 h-4 w-4" />
              Devices
            </Button>
            <Button
              variant={`${selectedIndex === 3 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(3)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Customers
            </Button>
            <Button
              variant={`${selectedIndex === 4 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(4)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Blogs
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              variant={`${selectedIndex === 5 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(5)}
            >
              <ListIcon className="mr-2 h-4 w-4" />
              All requests
            </Button>
            <Button
              variant={`${selectedIndex === 7 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(7)}
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Manage Requests
            </Button>
            <Button
              variant={`${selectedIndex === 6 ? 'secondary' : 'ghost'}`}
              className="w-full justify-start"
              onClick={() => setSelectedIndex(6)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Service Centers
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Account
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <UserRound className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4 text-red-600" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
