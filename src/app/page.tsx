'use client';
import { Menu } from '@/components/Menu';
import { Sidebar } from '@/components/Sidebar';
import { DeviceTableDemo as Brands } from '@/components/brands/Device';
import { DataTableDemo } from '@/components/brands/BrandsTable';
import { CustomerTableDemo } from '@/components/brands/Customers';
import DashboardPage from '@/components/dashboard/Dashboard';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { BrandRequestTableDemo } from '@/components/brands/BrandRequest';
import { DeviceRequestTableDemo } from '@/components/brands/DeviceRequest';
import MailPage from '@/components/blog/page';
import { ServiceCenter } from '@/components/brands/Service';

const Pages = [
  <DashboardPage key={3} />,

  <DataTableDemo key={5} />,
  <Brands key={4} />,
  <CustomerTableDemo key={6} />,
  <MailPage key={10} />,
  <div className="h-full px-4 py-6 lg:px-8" key={1}>
    <Tabs defaultValue="music" className="h-full space-y-6">
      <div className="space-between flex items-center">
        <TabsList>
          <TabsTrigger value="music" className="relative">
            Brands
          </TabsTrigger>
          <TabsTrigger value="podcasts">Devices</TabsTrigger>
        </TabsList>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add Brand
          </Button>
        </div>
      </div>
      <TabsContent value="music" className="border-none p-0 outline-none">
        <BrandRequestTableDemo />
        <Separator className="my-4" />
      </TabsContent>
      <TabsContent value="podcasts" className="border-none p-0 outline-none">
        <DeviceRequestTableDemo />
        <Separator className="my-4" />
      </TabsContent>
    </Tabs>
  </div>,
  <ServiceCenter key={2} />,
  <div className="h-full px-4 py-6 lg:px-8" key={0}>
    <Tabs defaultValue="music" className="h-full space-y-6">
      <div className="space-between flex items-center">
        <TabsList>
          <TabsTrigger value="music" className="relative">
            Request
          </TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        </TabsList>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add Request
          </Button>
        </div>
      </div>
      <TabsContent value="music" className="border-none p-0 outline-none">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Approve Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Top requests for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4"></div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Made for You
          </h2>
          <p className="text-sm text-muted-foreground">
            Your personal playlists. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4"></div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent
        value="podcasts"
        className="h-full flex-col border-none p-0 data-[state=active]:flex"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              New Episodes
            </h2>
            <p className="text-sm text-muted-foreground">
              Your favorite podcasts. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
      </TabsContent>
    </Tabs>
  </div>,
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div> */}
      <div className="hidden md:block">
        {/* <Menu /> */}
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-6">
              <div className="fixed w-[16.5%] overflow-auto">
                <Sidebar
                  className="hidden lg:block"
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
              <div className="w-35"></div>
              <div className="col-span-3 lg:col-span-5 lg:border-l overflow-auto">
                {Pages[selectedIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
