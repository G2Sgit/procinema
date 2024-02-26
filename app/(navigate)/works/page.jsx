import Header from "@/components/Header/Header";
import WorksList from "../../../components/WorksPageComponents/WorksList";

export const metadata = {
  title: "Works",
  description: "Procinema works page",
};

const WorksPage = () => {
  return (
    <>
      <WorksList />
    </>
  );
};

export default WorksPage;
