import profilePhoto from "../imgs/profile.jpeg";

const Header = () => {
  return (
    <>
      <div className="header mx-auto bg-gray-900 h-[250px] shadow shadow-lg shadow-gray-800">
        <div className="w-[1000px] mx-auto flex text-center items-center">
          <div className="profilePicture absolute  top-[130px]">
            <img
              className="w-[200px] h-[200px] rounded-full border border-black border-[3px]"
              src={profilePhoto}
            />
          </div>
          <div className="name-and-subheading w-[40%] mx-auto mt-[75px] text-white">
            <div className="name-main text-3xl font-bold">Zain Ul Abdin</div>
            <div className="designation text-2xl pt-3 ">
              Geographic Information Systems (GIS) Developer
            </div>
            <div className="contant-handles flex gap-3 ">
              <div className="github"></div>
              <div className="linkedin"></div>
              <div className="instagram"></div>
              <div className="facebook"></div>
              <div className="email"></div>
              <div className="whatsapp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
