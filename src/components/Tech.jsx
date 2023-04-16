import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useUser } from "../contexts/UserContext";
import CanvasLoader from "./Loader";

const Tech = () => {
  const { user } = useUser();
  // const [loading, setLoading] = useState(false);
  // const [technologies, setTechnologies] = useState([]);

  // useEffect(() => {
  //   const initialTimer = setTimeout(async () => {
  //     setLoading(true);
  //     setTechnologies(user?.skills);
  //     return () => {
  //       clearTimeout(initialTimer);
  //       setLoading(false);
  //     };
  //   }, 6000); // Show the popup after 60 seconds
  // }, [user]);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {/* {loading && <CanvasLoader />} */}
      {/* {user?.skills?.map((technology) => ( */}
      {technologies?.map((technology) => (
        <div className="w-28 h-28" key={technology?.name}>
          <BallCanvas icon={technology?.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
