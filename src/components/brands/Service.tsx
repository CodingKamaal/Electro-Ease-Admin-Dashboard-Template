import { ComponentProps, useState } from 'react';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import Image from 'next/image';
import { Button } from '../ui/button';

export function ServiceCenter() {
  return (
    <>
      <div className="flex justify-between bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form className="w-[75%]">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
        <Button>+ Add Service Center</Button>
      </div>
      <div className="flex">
        <ScrollArea className="h-screen w-[50%]">
          <div className="flex flex-wrap gap-2 p-4 pt-0">
            <button
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
                //   mail.selected === item.id && 'bg-muted',
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      ABC Electronics and Service Center
                    </div>
                    {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                  </div>
                  <div
                    className={cn(
                      'ml-auto text-xs',
                      // mail.selected === item.id
                      //   ? 'text-foreground'
                      //   : 'text-muted-foreground',
                    )}
                  >
                    Associated On: 15 Dec 2023
                  </div>
                </div>
                <div className="text-xs font-medium"></div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, numquam, accusantium nostrum corrupti dolorum,
                corporis totam earum rem architecto perferendis veritatis
                voluptates dolores. Voluptatem, pariatur quia! Aliquid nesciunt
                distinctio eveniet.
              </div>
              <div className="flex items-center gap-2">
                <Badge>
                  Address: ABC 45/46 New road, Indore, Madhya Pradesh
                </Badge>
                <Badge>Contact: 999999999</Badge>
              </div>
            </button>
            <button
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
                //   mail.selected === item.id && 'bg-muted',
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      ABC Electronics and Service Center
                    </div>
                    {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                  </div>
                  <div
                    className={cn(
                      'ml-auto text-xs',
                      // mail.selected === item.id
                      //   ? 'text-foreground'
                      //   : 'text-muted-foreground',
                    )}
                  >
                    Associated On: 15 Dec 2023
                  </div>
                </div>
                <div className="text-xs font-medium"></div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, numquam, accusantium nostrum corrupti dolorum,
                corporis totam earum rem architecto perferendis veritatis
                voluptates dolores. Voluptatem, pariatur quia! Aliquid nesciunt
                distinctio eveniet.
              </div>
              <div className="flex items-center gap-2">
                <Badge>
                  Address: ABC 45/46 New road, Indore, Madhya Pradesh
                </Badge>
                <Badge>Contact: 999999999</Badge>
              </div>
            </button>
            <button
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
                //   mail.selected === item.id && 'bg-muted',
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      ABC Electronics and Service Center
                    </div>
                    {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                  </div>
                  <div
                    className={cn(
                      'ml-auto text-xs',
                      // mail.selected === item.id
                      //   ? 'text-foreground'
                      //   : 'text-muted-foreground',
                    )}
                  >
                    Associated On: 15 Dec 2023
                  </div>
                </div>
                <div className="text-xs font-medium"></div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, numquam, accusantium nostrum corrupti dolorum,
                corporis totam earum rem architecto perferendis veritatis
                voluptates dolores. Voluptatem, pariatur quia! Aliquid nesciunt
                distinctio eveniet.
              </div>
              <div className="flex items-center gap-2">
                <Badge>
                  Address: ABC 45/46 New road, Indore, Madhya Pradesh
                </Badge>
                <Badge>Contact: 999999999</Badge>
              </div>
            </button>
            <button
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
                //   mail.selected === item.id && 'bg-muted',
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      ABC Electronics and Service Center
                    </div>
                    {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                  </div>
                  <div
                    className={cn(
                      'ml-auto text-xs',
                      // mail.selected === item.id
                      //   ? 'text-foreground'
                      //   : 'text-muted-foreground',
                    )}
                  >
                    Associated On: 15 Dec 2023
                  </div>
                </div>
                <div className="text-xs font-medium"></div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, numquam, accusantium nostrum corrupti dolorum,
                corporis totam earum rem architecto perferendis veritatis
                voluptates dolores. Voluptatem, pariatur quia! Aliquid nesciunt
                distinctio eveniet.
              </div>
              <div className="flex items-center gap-2">
                <Badge>
                  Address: ABC 45/46 New road, Indore, Madhya Pradesh
                </Badge>
                <Badge>Contact: 999999999</Badge>
              </div>
            </button>
            <button
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
                //   mail.selected === item.id && 'bg-muted',
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      ABC Electronics and Service Center
                    </div>
                    {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                  </div>
                  <div
                    className={cn(
                      'ml-auto text-xs',
                      // mail.selected === item.id
                      //   ? 'text-foreground'
                      //   : 'text-muted-foreground',
                    )}
                  >
                    Associated On: 15 Dec 2023
                  </div>
                </div>
                <div className="text-xs font-medium"></div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, numquam, accusantium nostrum corrupti dolorum,
                corporis totam earum rem architecto perferendis veritatis
                voluptates dolores. Voluptatem, pariatur quia! Aliquid nesciunt
                distinctio eveniet.
              </div>
              <div className="flex items-center gap-2">
                <Badge>
                  Address: ABC 45/46 New road, Indore, Madhya Pradesh
                </Badge>
                <Badge>Contact: 999999999</Badge>
              </div>
            </button>
          </div>
        </ScrollArea>
        <div className="w-[50%] px-8">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
          <div className="p-16">
            <Image
              src="/map-with-pins-vector-14261754.jpg" // Path to the image inside the public folder
              alt="Example Image"
              width={500} // Width of the image
              height={300} // Height of the image
            />
          </div>
        </div>
      </div>
    </>
  );
}
