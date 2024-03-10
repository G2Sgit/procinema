import ServicesList from "../../../components/PostServicesPageComponents/ServicesList/ServicesList";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Post services",
  description: "Procinema post services page",
};


const PostServicesPage = () => {
  return (
    <>
      <ServicesList />
    </>
  );
};

export default PostServicesPage;
