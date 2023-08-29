import NavBar from "@/components/navbar";
import CatalogPage from "@/app/catalog/page";

export default async function AppPage() {
    return (
        <main>
            <div>
                <NavBar/>
                <CatalogPage/>
            </div>
        </main>
    )
}
