import AddButton from "@/components/addButton/AddButton";
import GridContainer from "@/components/gridContainer/GridContainer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Logo from "@/components/logo/Logo";
import Menu from "@/components/menu/Menu";
import { useQuery } from "@tanstack/react-query";
import { FaGoogleDrive, FaRegStar } from "react-icons/fa";
import { FaComputer, FaRegTrashCan, FaUserGroup } from "react-icons/fa6";
import {
  IoIosCloud,
  IoIosInformationCircleOutline,
  IoMdHome,
} from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

// ASSETS
// import image5 from "@assets/pexels-artūras-kokorevas-15954324.jpg";
// import image1 from "@assets/pexels-barikive-5391172.jpg";
// import image7 from "@assets/pexels-esra-korkmaz-17848880.jpg";
// import image8 from "@assets/pexels-josh-withers-16625678.jpg";
// import image2 from "@assets/pexels-kristina-bauer-9162803.jpg";
// import image3 from "@assets/pexels-nati-18898418.jpg";
// import image6 from "@assets/pexels-phong-phạm-xuân-19877105.jpg";
// import image4 from "@assets/pexels-sara-mazin-19896578.jpg";
// import image9 from "@assets/pexels-shalom-osezua-19004679.jpg";

const firstMenu = [
  { icon: <IoMdHome />, link: "accueil" },
  { icon: <FaGoogleDrive />, link: "mon Drive" },
  { icon: <FaComputer />, link: "ordinateurs" },
  { icon: <FaUserGroup />, link: "partagés avec moi" },
  { icon: <IoTimeOutline />, link: "récents" },
  { icon: <FaRegStar />, link: "suivis" },
  { icon: <IoIosInformationCircleOutline />, link: "spam" },
  { icon: <FaRegTrashCan />, link: "corbeille" },
  { icon: <IoIosCloud />, link: "espace de stockage" },
];

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
// ];

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

function App() {
  // const { fetchUsers } = useUsersService();
  const { isPending, error, data } = useQuery<{ data: User[] }>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": "65be48072bbd311aa56cf454",
        },
      }).then((response) => response.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("DATA", data);

  return (
    <div className="flex h-full">
      <Sidebar>
        <Logo />
        <div className="py-2 pb-3">
          <AddButton onClick={() => {}} />
        </div>
        <Menu items={firstMenu} />
      </Sidebar>
      <div style={{ width: "100%" }}>
        <GridContainer datas={data.data} />
      </div>
      {/* <Carousel displayCount={3}>
        {data.data.map((user) => (
          <div className="max-w-lg h-96 object-contain" key={user.id}>
            <h2>{user.title}</h2>
            <img src={user.picture} alt="" loading="lazy" />
            <div>
              <p>
                {user.firstName}
                {user.lastName}
              </p>
            </div>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
}

export default App;
