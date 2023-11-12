import Card from "../components/card-component";
import CardContent from "../components/card-content-component";
import CardHeader from "../components/card-header-component";

export default function HomeLayout() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-c4">
            <Card>
                <CardHeader />
                <CardContent />
            </Card>
        </main>
    )
}