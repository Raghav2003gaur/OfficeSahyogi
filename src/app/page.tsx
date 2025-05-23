
import CardList from "@/components/CardList";
import AppAreaChart from "@/components/ui/AppAreaChart";
import AppBarChart from "@/components/ui/AppBarChart";
import AppPieChart from "@/components/ui/AppPieChart";
import TodoList from "@/components/TodoList";
export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2"><AppAreaChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"/></div>
    </div>
  );
} 







