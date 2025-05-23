"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

const TodoList = () => {
    const[date,setDate] = useState(new Date());
    const[open,setOpen] = useState(false);
  return (
    <div className="">
       <h1 className="text-lg font-medium mb-6"> Pending Payments</h1>
        <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className="w-full">
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date?format(date,"PPP"): <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
  <Calendar
    mode="single"
    selected={date}
    onSelect={(date)=>{
        setDate(date);
        setOpen(false);
    }}
    className="rounded-md border"
  />
  </PopoverContent>
</Popover>

        {/*LIST*/}
        <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
            {/*List Items */}
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Justpay</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Phonepay</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Gpay</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Paytm</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Amazon</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Flipkart</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Myntra</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Zomato</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Swiggy</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Ola</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Uber</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Microsoft</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from NIIT</label>
                </div>
            </Card>
            <Card className="p-4">

                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from Amex</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">Payment Recieved from PhonePe</label>
                </div>
            </Card>
            </div>
        </ScrollArea>

    </div>
  ) 
}

export default TodoList