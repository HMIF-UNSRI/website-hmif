import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableDashboard from "@/components/Admin-Dashboard/TableDashboard";
import FormDashboard from "@/components/Admin-Dashboard/FormDashboard";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { isLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "@/lib/networks/adminQueries";
import { Menu } from "lucide-react";
import { toast } from "sonner";
import { DashboardProvider } from "@/lib/context/dashboardContext";

const pages = [
  "academic_competition",
  "academic_competition_details",
  "academic_scholarship",
  "academic_scholarship_details",
  "academic_seminar",
  "academic_seminar_details",
  "proker",
  "member",
];

export default function Dashboard() {
  const navigate = useNavigate();

  isLogin();

  function logOut() {
    // need backend
    // document.cookie =
    //   "supabase_token=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Strict";
    // window.location.reload();
    signOutUser();
    toast("Anda berhasil log out!");
    navigate("/admin");
  }

  return (
    <section id="admin-dashboard" className="-mx-5 md:-mx-12 xl:-mx-20">
      <Tabs defaultValue="academic_competition" className="flex">
        <div>
          <TabsList className="fixed left-0 right-0 z-50 h-auto items-center justify-between border-b-2 border-primary bg-background px-6 py-4 md:hidden">
            <a href="/">
              <div className="flex gap-4">
                <img
                  src="/img/logo-hmif.png"
                  alt="logo-hmif"
                  className="size-12"
                />
                <div className="flex flex-col justify-center text-primary">
                  <h1 className="text-xl font-bold md:text-2xl">HMIF UNSRI</h1>
                  <p className="text-xs font-medium">
                    Kuatkan Formasi Wujudkan Inovasi
                  </p>
                </div>
              </div>
            </a>
            <Sheet>
              <SheetTrigger className="lg:hidden">
                <Menu className="size-8 text-primary" />
              </SheetTrigger>
              <SheetContent className="flex flex-col items-start space-y-4">
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                {pages.map((item, key) => (
                  <TabsTrigger value={item} key={key + item} className="my-2">
                    {item}
                  </TabsTrigger>
                ))}
                <Button variant={"destructive"} onClick={() => logOut()}>
                  Log Out
                </Button>
              </SheetContent>
            </Sheet>
          </TabsList>
          <TabsList className="fixed bottom-0 top-0 hidden h-full w-1/5 flex-col items-start justify-start border-r-2 border-primary px-4 pt-8 md:flex">
            <a href="/" className="mb-10">
              <div className="flex gap-4">
                <img
                  src="/img/logo-hmif.png"
                  alt="logo-hmif"
                  className="size-12 xl:size-16"
                />
                <div className="flex flex-col justify-center text-primary">
                  <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
                    HMIF UNSRI
                  </h1>
                  <p className="text-xs font-medium xl:text-sm">
                    Kuatkan Formasi Wujudkan Inovasi
                  </p>
                </div>
              </div>
            </a>
            {pages.map((item, key) => (
              <TabsTrigger value={item} key={key + item} className="my-2">
                {item}
              </TabsTrigger>
            ))}
            <Button variant={"destructive"} onClick={() => logOut()}>
              Log Out
            </Button>
          </TabsList>
        </div>
        {pages.map((item, key) => (
          <TabsContent
            value={item}
            id={item}
            key={key + item}
            className="relative w-full bg-red-300 px-10 md:left-1/3 md:w-2/3"
          >
            <DashboardProvider>
              <FormDashboard tableName={item} />
              <TableDashboard tableName={item} />
            </DashboardProvider>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
