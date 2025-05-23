"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { Home, User, Banknote, Receipt, FileBarChart2, ChevronDown, ChevronUp, Coins, Users, Settings as Cog } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  const [accountsOpen, setAccountsOpen] = React.useState(false)
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-3 justify-center md:justify-start">
          <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="OfficeSahyogi Logo" className="h-8 w-8 object-contain" />
          </div>
          {!isCollapsed && (
            <span className="text-2xl font-bold tracking-tight">OfficeSahyogi</span>
          )}
        </div>
      </SidebarHeader>
      <div className="border-b border-border mx-4" />
      <SidebarContent>
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Application</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={isCollapsed ? "Home" : undefined}>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Home</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Accounts Dropdown (click to open) */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setAccountsOpen((open) => !open)}
                  aria-expanded={accountsOpen}
                  aria-controls="accounts-submenu"
                  type="button"
                  tooltip={isCollapsed ? "Accounts" : undefined}
                >
                  <User className="mr-2 h-4 w-4" />
                  {!isCollapsed && <span>Accounts</span>}
                  {!isCollapsed && (accountsOpen ? (
                    <ChevronUp className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-auto h-4 w-4" />
                  ))}
                </SidebarMenuButton>
                {/* Only show submenu when expanded */}
                {!isCollapsed && (
                  <SidebarMenuSub id="accounts-submenu" style={{ display: accountsOpen ? undefined : "none" }}>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/payables">
                          <Banknote className="mr-2 h-4 w-4" />
                          <span>Payables</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/receivables">
                          <Receipt className="mr-2 h-4 w-4" />
                          <span>Receivables</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/report">
                          <FileBarChart2 className="mr-2 h-4 w-4" />
                          <span>Generate Report</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
              {/* Finance */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={isCollapsed ? "Finance" : undefined}>
                  <Link href="/finance">
                    <Coins className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Finance</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* CRM */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={isCollapsed ? "CRM" : undefined}>
                  <Link href="/crm">
                    <Users className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>CRM</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Operations */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={isCollapsed ? "Operations" : undefined}>
                  <Link href="/operations">
                    <Cog className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Operations</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="w-full flex items-center justify-center pb-4">
          {isCollapsed ? (
            <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center overflow-hidden">
              {/* Optionally, use a user icon here */}
              <img src="/logo.png" alt="User" className="h-8 w-8 object-contain" />
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <span className="font-semibold">Raghav Gaur</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 transition-all duration-200 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom-2 data-[state=open]:slide-in-from-bottom-2">
                <DropdownMenuItem>
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
