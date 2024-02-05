import Image from "@/components/UI/image/Image";
import Typography from "@/components/UI/typography/Typography";
import logo from "@assets/Google-Drive-Logo.png";

const Logo = () => {
  return (
    <div className="flex p-3 cursor-pointer">
      <Image src={logo} className="w-14 object-contain" />
      <Typography className="text-2xl text-gray-700 font-normal">
        Drive
      </Typography>
    </div>
  );
};

export default Logo;
