import { useResizeScreenModifile } from "common/hooks";
import Image from "next/image";
import { useRouter } from "node_modules/next/router";
import { useEffect, useRef, useState } from "react";

const dataNav = [
  {
    page_name: "Story",
    url: "/",
  },
  {
    page_name: "Skill",
    url: "/skill",
  },
  {
    page_name: "Project",
    url: "/project",
  },
  {
    page_name: "Contact",
    url: "/contact",
  },
];
const Header = () => {
  const [screen, setScreen] = useState(null);
  useResizeScreenModifile(setScreen);
  const ref = useRef();
  const [navActive, setNavActive] = useState(false);
  // nav
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowSidebar(false);
  }, [screen]);

  return (
    <>
      {screen === "DESKTOP" ? (
        <div
          className={`fixed top-0 z-50 w-full bg-transparent`}
          style={{
            height: "56px",
            boxShadow: "rgb(181 181 181 / 0.75) 0 16px 40px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="row mx-0">
            <div className="col-12 lg:col-6"></div>
            <div className="col-12 flex justify-evenly lg:col-6">
              {dataNav?.map((item) => {
                return (
                  <a
                    href={item.url || "/"}
                    className="group overflow-hidden"
                    key={item.page_name}
                  >
                    <div className=" inline-block px-5 py-4">
                      <div
                        className={`text-sm font-bold tracking-wider transition-colors duration-300`}
                      >
                        {item.page_name}
                        <div className="-translate-x-[170%] rounded-sm border-b-4 border-black duration-200 group-hover:translate-x-0"></div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Header;
