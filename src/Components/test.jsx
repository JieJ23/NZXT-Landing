import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Carousel,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "H9",
    description: "Dual-Chamber Mid-Tower Cases",
    icon: SquaresPlusIcon,
  },
  {
    title: "H7",
    description: "ATX Mid-Tower Cases",
    icon: UserGroupIcon,
  },
  {
    title: "H6",
    description: "Compact Dual-Chamber Mid-Tower Airflow Cases",
    icon: Bars4Icon,
  },
  {
    title: "H5",
    description: "Compact ATX Mid-Tower Cases",
    icon: SunIcon,
  },
  {
    title: "H1",
    description: "Small Form Factor Mini-ITX",
    icon: GlobeAmericasIcon,
  },
  {
    title: "CRFT",
    description: "Limited Edition",
    icon: PhoneIcon,
  },
];

const navListMenuItems2 = [
  {
    title: "The New Krakens",
    description: "AIO Liquid Coolers with LCD Display",
    icon: SquaresPlusIcon,
  },
  {
    title: "Kraken Z",
    description: "AIO Liquid Cooler with LCD Display",
    icon: UserGroupIcon,
  },
  {
    title: "Kraken X",
    description: "AIO Liquid Cooler with Infinity Mirror Display",
    icon: Bars4Icon,
  },
  {
    title: "Kraken 120",
    description: "120mm Liquid Cooler with RGB",
    icon: SunIcon,
  },
  {
    title: "F Series Fans",
    description: "RGB & High-performance Fans",
    icon: GlobeAmericasIcon,
  },
  {
    title: "T120 Air Coolers",
    description: "CPU Air Coolers",
    icon: PhoneIcon,
  },
];

const navListMenuItems3 = [
  {
    title: "Motherboards",
    description: "Gaming Motherboards",
    icon: SquaresPlusIcon,
  },
  {
    title: "Power",
    description: "80 Plus Rated PSUs",
    icon: UserGroupIcon,
  },
  {
    title: "Lighting",
    description: "Expanded RGB Lighting and Control",
    icon: Bars4Icon,
  },
  {
    title: "PCle Riser Cable",
    description: "Flexible Riser Cable",
    icon: SunIcon,
  },
  {
    title: "Vertical GPU Mounting Kit",
    description: "GPU Holder & PCle 4.0 Riser Cable",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Puck",
    description: "Magnetic Organizers",
    icon: PhoneIcon,
  },
  {
    title: "120VHPWR Adapter Cable",
    description: "16-Pin to Dual 8-Pin 12VHPWR PCle 5.0 PSU Cable",
    icon: PhoneIcon,
  },
];

//
//
//

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[black]">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-white opacity-70"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
  const renderItems2 = navListMenuItems2.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[black]">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-white opacity-70"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
  const renderItems3 = navListMenuItems3.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[black]">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-white opacity-70"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 15, crossAxis: 50 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-white bg-[#131111] hover:bg-[#131111] focus:bg-[#131111] hover:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Components
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-[#131111]">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            <div>{renderItems}</div>
            <div>{renderItems2}</div>
            <div>{renderItems3}</div>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Carousel className="">
            <div>{renderItems}</div>
            <div>{renderItems2}</div>
            <div>{renderItems3}</div>
          </Carousel>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="m-0 border-none w-full px-10 py-2 bg-[#131111]"
      fullWidth={true}
      shadow={false}
      color="black"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl text-white"
        >
          NZXT
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="white">
            Log In
          </Button>
        </div>

        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />

        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="white" fullWidth>
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

//
