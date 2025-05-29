"use client"
import React from 'react'
import Link from 'next/link'
import { Moon, User ,ReceiptIndianRupeeIcon,Banknote,Settings,LogOut, Sun, Sidebar} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useRouter } from "next/navigation";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './button'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from './sidebar'

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme()
  return (
    <nav className='p-4 flex items-center justify-between'>
      {/*left*/}
      <SidebarTrigger />

      {/*Right*/}
      <div className="flex items-center gap-4">
       <Link href="/">Dashboard</Link>
       {/*Theme Menu*/}
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

       {/*User Menu*/}
       <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
        <AvatarImage className="size-8 rounded-full" src="https://github.com/shadcn.png" />
        <AvatarFallback className="size-8">CN</AvatarFallback>
       </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User className='h-[1.2rem] w-[1.2rem] mr-2' onSelect={() => router.push("/users/raghav")}/>Profile</DropdownMenuItem>
    <DropdownMenuItem><Banknote className='h-[1.2rem] w-[1.2rem] mr-2'/> Billing</DropdownMenuItem>
    <DropdownMenuItem><ReceiptIndianRupeeIcon className='h-[1.2rem] w-[1.2rem] mr-2'/> Payments</DropdownMenuItem>
    <DropdownMenuItem><Settings className='h-[1.2rem] w-[1.2rem] mr-2'/> Settings</DropdownMenuItem>
    <DropdownMenuItem variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/> Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>




      </div>

    </nav>
  )
}

export default Navbar