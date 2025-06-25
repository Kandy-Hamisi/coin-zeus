"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Bell, LogOut, Search, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/*    left */}
      <SidebarTrigger />
      {/*    right*/}
      <div className="flex items-center gap-4">
        {/*  input*/}
        <div className="relative bg-purple-50 flex items-center gap-2 cursor-pointer px-4">
          <Search size={16} />
          <Input
            placeholder="Search"
            className="focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none shadow-none"
          />
        </div>

        {/*  bell*/}
        <div className="relative">
          <Bell size={18} className="cursor-pointer" />
          <div className="h-1.5 w-1.5 bg-red-500 rounded-full absolute top-[1px] right-[2px]"></div>
        </div>
        {/*  separator*/}
        <div className="h-6 border border-gray-400"></div>
        {/*  Avatar*/}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
export default Navbar;
