import ProjectsList from "./components/ProjectsList";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <Experience />
                </main>
            </div>
        </>
    );
}
