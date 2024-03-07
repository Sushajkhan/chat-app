import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const SelectAvatar = ({ setSelectedLink, selectedLink }) => {
  // console.log(selectedLink)
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          "/api/avatar/all"
        );
        console.log(response.data.avatars);
        setAvatars(response.data.avatars);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div className="mt-3">
      <p className="block mb-2 text-lg font-medium  text-black">
        Choose Avatar
      </p>
      <div className="grid grid-cols-4 gap-2 mb-7">
        {avatars?.map((avatar) => (
          <img
            key={avatar._id}
            src={avatar.link}
            onClick={() => {
              setSelectedLink(avatar.link);
              toast.success("Avatar Selected");
            }}
            alt={`Avatar ${avatar._id}`}
            style={{ width: "90px", height: "90px", margin: "5px" }}
            className={`rounded-full cursor-pointer  p-2 bg-primarySecond hover:outline outline-white ${
              selectedLink === avatar.link ? "outline" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectAvatar;
